import * as gulp from 'gulp';
import config from '../../config';

var war = require('gulp-war');
var zip = require('gulp-zip');

export = () => {

    return gulp.src(config.APP_DEST + '/**')
        .pipe(war({
            welcome: 'index.html',
            displayName: 'RFID',
        }))
        .pipe(zip('consola.war'))
        .pipe(gulp.dest(config.WAR_DEST));
};
