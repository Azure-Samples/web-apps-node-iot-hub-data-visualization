'use strict';

const ConnectionString = process.env['Azure.IoT.IoTHub.ConnectionString'] || 'Your connection string';
const ConsumerGroup = process.env['Azure.IoT.IoTHub.ConsumerGroup'] || 'Your consumer group';

module.exports = {
	ConnectionString: ConnectionString,
	ConsumerGroup: ConsumerGroup
};