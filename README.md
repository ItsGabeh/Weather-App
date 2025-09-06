# Weather-App

Simple weather app using Angular, Openweather API and Geoapify.

Search for a city and get the weather information and a map of the city.

![App Sample 1](/images/app_sample_1.png)

![App Sample 2](/images/app_sample_2.png)

## Openweather API

The app uses the [Openweather API](https://openweathermap.org/api) to get the weather information.

## Geoapify

The app uses the [Geoapify API](https://geoapify.com/) to get the map of the city.

## Change the API Key

You can change the API keys in the `src/app/service/weather.service.ts` and `src/app/service/static-map.service.ts` files.

## Development server

To start a local development server, run:

```bash
ng serve
```

or 

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```
or 

```bash
npm build
```

This will compile the project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.6.
