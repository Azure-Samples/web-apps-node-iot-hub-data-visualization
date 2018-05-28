/*
 * IoT Gateway BLE Script - Microsoft Sample Code - Copyright (c) 2016 - Licensed MIT
 */
'use strict';

var { EventHubClient, EventPosition } = require('azure-event-hubs');

// Close connection to IoT Hub.
IoTHubReaderClient.prototype.stopReadMessage = function() {
  this.iotHubClient.close();
}

// Read device-to-cloud messages from IoT Hub.
IoTHubReaderClient.prototype.startReadMessage = function(cb) {
  var self = this;
  var printError = function(err) {
    console.error(err.message || err);
  };
  var deviceId = process.env['Azure.IoT.IoTHub.DeviceId'];

  EventHubClient.createFromIotHubConnectionString(this.connectionString).then((client) => {
    console.log("Successully created the EventHub Client from iothub connection string.");
    self.iotHubClient = client;
    return self.iotHubClient.getPartitionIds();
  }).then((ids) => {
    console.log("The partition ids are: ", ids);
    var onMessageHandler = (message) => {
      var from = message.annotations['iothub-connection-device-id'];
      if (deviceId && deviceId !== from) {
        return;
      }
      cb(message.body, Date.parse(message.enqueuedTimeUtc));
    };
    return ids.map(function (id) {
      return self.iotHubClient.receive(id, onMessageHandler, printError, { eventPosition: EventPosition.fromEnqueuedTime(Date.now()) });
    });
  }).catch(printError);

}

function IoTHubReaderClient(connectionString, consumerGroupName) {
  this.connectionString = connectionString;
  this.consumerGroupName = consumerGroupName;
  this.iotHubClient = undefined;
}

module.exports = IoTHubReaderClient;
