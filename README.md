RPI3 + Sensors (Temperature, Humidity, Button etc) + Google Home + GraphQL

## Introduction
Currently this app can do below things

* It stores room temperature and humidity in mysql database every 5 mins
* GraphQL APIs
  * get latest room temperature and humidity
  * get list of room temperature and humidity sorted by datetime
  * make GoogleHome say something or play something that you want
  * make GoogleHome inform the room temparature

## Preparations before the start
* You need to set environment variables
  ```typescript
  // ./src/env/googleHomeConfig.ts
  export default {
      ip: '127.0.0.1',
  }
  ```
    ```typescript
  // ./src/env/gpios.ts
  // numbers are gpio number.
  export const GpioPin = {
      dht: 9,
      button: 10,
      infraRedReceiver: 11,
      twoColorLedGreen: 12,
      twoColorLedRed: 13,
  }
  ```
    ```typescript
  // ./src/env/poolConfig.ts
  export default {
      host: 'example.org',
      user: 'bob',
      password: 'secret',
      database: 'my_db',
  }
  ```

## Commands
* `yarn build`
  to compile app into js // output directory is `lib`
* `yarn start`
  to compile app into js, then execute `lib/index.js`
* `yarn ts-start`
  to compile and execute the app
* `yarn execute` {filename}.ts
  to run typescript file directly

## Issues:
* it's not working on RPI4, because there is an issue in `node-dht-sensor` package.