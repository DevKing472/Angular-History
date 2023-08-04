# MyApp

## Step 1 - Configure the JSON server
JSON Server is an open source tool used to create mock REST APIs. You'll use it to serve the housing location data that is currently stored in the housing service.

1. Install json-server from npm by using the following command.
```bash 
npm install -g json-server
```
2. In the root directory of your project, create a file called db.json. This is where you will store the data for the json-server.
3. Open db.json and copy the following code into the file
```json 
{
    "locations": [
        {
            "id": 0,
            "name": "Acme Fresh Start Housing",
            "city": "Chicago",
            "state": "IL",
            "photo": "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
            "availableUnits": 4,
            "wifi": true,
            "laundry": true
        },
        {
            "id": 1,
            "name": "A113 Transitional Housing",
            "city": "Santa Monica",
            "state": "CA",
            "photo": "https://angular.io/assets/images/tutorials/faa/brandon-griggs-wR11KBaB86U-unsplash.jpg",
            "availableUnits": 0,
            "wifi": false,
            "laundry": true
        },
        {
            "id": 2,
            "name": "Warm Beds Housing Support",
            "city": "Juneau",
            "state": "AK",
            "photo": "https://angular.io/assets/images/tutorials/faa/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
            "availableUnits": 1,
            "wifi": false,
            "laundry": false
        },
        {
            "id": 3,
            "name": "Homesteady Housing",
            "city": "Chicago",
            "state": "IL",
            "photo": "https://angular.io/assets/images/tutorials/faa/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
            "availableUnits": 1,
            "wifi": true,
            "laundry": false
        },
        {
            "id": 4,
            "name": "Happy Homes Group",
            "city": "Gary",
            "state": "IN",
            "photo": "https://angular.io/assets/images/tutorials/faa/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
            "availableUnits": 1,
            "wifi": true,
            "laundry": false
        },
        {
            "id": 5,
            "name": "Hopeful Apartment Group",
            "city": "Oakland",
            "state": "CA",
            "photo": "https://angular.io/assets/images/tutorials/faa/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
            "availableUnits": 2,
            "wifi": true,
            "laundry": true
        },
        {
            "id": 6,
            "name": "Seriously Safe Towns",
            "city": "Oakland",
            "state": "CA",
            "photo": "https://angular.io/assets/images/tutorials/faa/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
            "availableUnits": 5,
            "wifi": true,
            "laundry": true
        },
        {
            "id": 7,
            "name": "Hopeful Housing Solutions",
            "city": "Oakland",
            "state": "CA",
            "photo": "https://angular.io/assets/images/tutorials/faa/r-architecture-GGupkreKwxA-unsplash.jpg",
            "availableUnits": 2,
            "wifi": true,
            "laundry": true
        },
        {
            "id": 8,
            "name": "Seriously Safe Towns",
            "city": "Oakland",
            "state": "CA",
            "photo": "https://angular.io/assets/images/tutorials/faa/saru-robert-9rP3mxf8qWI-unsplash.jpg",
            "availableUnits": 10,
            "wifi": false,
            "laundry": false
        },
        {
            "id": 9,
            "name": "Capital Safe Towns",
            "city": "Portland",
            "state": "OR",
            "photo": "https://angular.io/assets/images/tutorials/faa/webaliser-_TPTXZd9mOo-unsplash.jpg",
            "availableUnits": 6,
            "wifi": true,
            "laundry": true
        }
    ]
}
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
