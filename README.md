# web-apps-node-iot-hub-data-visualization
This repo contains code for a web application, which can read temperature & humidity data from IoT hub and show the real-time data in a line chart on the web page.

## Browser compatible
| Browser | Least Version |
| --- | --- |
| IE | 10 | 
| Edge | 14 |
| Firefox | 50 |
| Chrome | 49 |
| Safari | 10 |
| Opera | 43 |
| iOS Safari | 9.3 |
| Opera Mini | ALL |
| Android Browser | 4.3 |
| Chrome for Android | 56 |

## Run a daemon application to send data to your IoT hub
You can refer the related [lesson](#) to run an daemon application, to send data to your IoT hub.

## Add new consumer group to your event hub
Go to [Azure Portal](https://portal.azure.com) and select your IoT hub. Click `Endpoints -> Events`, add a new consumer group and then save it.

## Deploy to Azure web application
Go to [Azure Portal](https://portal.azure.com) to create your own Azure web app service. Then do the following setting:

* Go to `Application settings`, add key/value pairs `Azure.IoT.IoTHub.ConnectionString` and `Azure.IoT.IoTHub.ConsumerGroup` to `App settings` slot.
* Go to `Deployment options`, set `Local git repository` to deploy your web app.
* Go to `Deployment credentials`, set your deploy username and password.
* In the `Overview` page, note the `Git clone url`.
* Push the repo's code to the git repo url you note in last step.
* After the push and deploy finished, you can view the page to see the real-time data chart.

## Local deploy
* Open a console and set the following environment variable:
  * `set Azure.IoT.IoTHub.ConnectionString=<your connection string>`
  * `set Azure.IoT.IoTHub.ConsumerGroup=<your consumer group name>`
* `npm install`
* `npm start`
