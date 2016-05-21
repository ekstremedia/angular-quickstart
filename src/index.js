var $ = require('jquery');
import appModule from 'config';
import "gsap";
import 'css/master.scss';
import 'normalize.css';
import 'ang/routes';
import 'ang/directives';
import 'ang/filters';
import 'ang/controllers';
import 'ang/services';
import 'ang/locale';

angular.bootstrap(document, [appModule.name]); 