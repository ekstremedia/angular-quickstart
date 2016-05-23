##Angular 1 quickstart

By Terje Nesthus (terje@ekstremedia.no)

This will get an Angular 1.* app up and running fast. It features a small todo-app wich also demonstrates both angulars ng-enter and ng-leave animations, as well as Greensocks awesome timeline.

It requires [NodeJS](https://nodejs.org) and [Git](https://git-scm.com/downloads) to be pre-installed. It's using webpack and nodejs-modularity, and will compile javascript and typescript (es2015).

[Demo here: ](http://ekstremedia.no/projects/angular-quickstart/) [http://ekstremedia.no/projects/angular-quickstart/](http://ekstremedia.no/projects/angular-quickstart/)

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

####Structure

Source files are in the `src/` folder.

Check out `index.js` and `config.js` for configuration. Angular module is set in `config.js`.

Angular files are in `src/ang/` (`controllers.js`, `directives.js`, `filters.js`, `locale.js`, `services.js` and `routes.js`). The angular views are found in `src/ang/views/`.

CSS files are found in `src/css/`, check `master.scss`. Wen running a dev server, webpack will compile the scss files and push it into the server, so you dont have to refresh to see the update. Awesome? I know.

In `public/`, the index.html file have set a `<base href="/">` tag, you might want to edit that to your structure. This is to make the html5provider work, so you dont end up with hashbangs (#) in your urls.

Webpack's config files: `dist.min.config.js` for minified, `webpack.prod.config.js` for build and `webpack.config.js` for the server.