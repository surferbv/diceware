# Diceware

This application implements the Diceware method in picking passphrases using some of the software architecture and design concepts covered in CS575. It was implemented using Angular 5 and Boostrap to demonstrate some of the fundamental software architecture concepts and design patterns such as MVC, services, observables, etc...

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4, NodeJS v8.9.2, NPM 1.5.4, and the latest CDN's of Bootstrap.


## Diceware demonstration
Click on this YouTube link [Diceware](https://www.youtube.com/watch?v=rlnDk_wzl18) to view a demonstration of the application. 

## Initial setup and running development server

1. Install NodeJS v8.9.2 which should come with NPM 1.5.4 via [NodeJS](https://nodejs.org/en/download/)
2. Install Angualr-CLI `npm install @angular/cli`
3. Clone the project to your local computer using `git clone https://github.com/surferbv/diceware` in your terminal or command prompt.
4. Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Note: If you are running it for the first time you may need to run `npm install` in the project directory in order for it to work.

## Project file description

### Source Files

### Auxilaray Files
diceware-complete.json: 
This file is located in the `../src/assets/data/` folder and should not be moved in order to the application to function properly. If you do move the locaiton of this file you will need to change the path the the `data.service.ts` refers to in the code.

Bootstrap CDN:
Ensure that you have a proper internet connection as the applicaiton refers to the following cdns. 

https://bootswatch.com/4/sandstone/bootstrap.min.css
https://code.jquery.com/jquery-3.2.1.slim.min.js
https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js
https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js

NOTE: These links are located in the `index.html` file.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
