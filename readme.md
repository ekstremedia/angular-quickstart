##Angular 1 quickstart

By Terje Nesthus (terje@ekstremedia.no)

This will get an Angular 1.* app up and running fast. It requires [NodeJS](https://nodejs.org) to be pre-installed. It's using webpack and nodejs-modularity, and will compile javascript and typescript (es2015).

[Demo here: ](http://ekstremedia.no/projects/angular-quickstart/todos) [http://ekstremedia.no/projects/angular-quickstart/todos](http://ekstremedia.no/projects/angular-quickstart/todos)

####Includes
* [Angular 1](https://angularjs.org/)
* [angular-ui-router](https://github.com/angular-ui/ui-router)
* [angular-animation](https://docs.angularjs.org/api/ngAnimate)
* [angular-ui-bootstrap](https://angular-ui.github.io/bootstrap/)
* [moment](http://momentjs.com/) & [angular-moment](https://github.com/urish/angular-moment)
* [Greensock](https://greensock.com)
* [Bootstrap 3](http://getbootstrap.com/)
* [Normalize.css](https://necolas.github.io/normalize.css/)
* [Webpack, webpack-server](https://webpack.github.io/)
* [Sass](http://sass-lang.com/)

####Install

Open a terminal window, on Windows I can recommend using Git Bash that is included and installed (if you choose to during install) with NodeJS,
or just use PowerShell or cmd. 

Start by cloning my project from `https://github.com/ekstremedia/angular-quickstart`

```
git clone https://github.com/ekstremedia/angular-quickstart
```

Go into the folder

```
cd angular-quickstart
```

Install dependencies

```
npm install
```

This will take some minutes as it will install all packages from 'package.json'. 

####Starting

To start a local web server on port 3000, run the command:
```npm run start```

To start a developer server on port 8080 that will auto-build on save, run:

```
npm run startdev
```

Note that this doesnt work if `npm run start` is not running. When running it can be accessed in your browser from the local ip, most likely 
http://localhost:8080 

####Building

To make a webpack bundle, type: 
```
npm run build
```

To make a minified webpack bundle, type:
```
npm run min
```

These commands will include everything, bundle it together and respectively then make the emapp.js and emapp.min.js in the 'public/'-folder.