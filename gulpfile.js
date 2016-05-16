'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var sonar = require('gulp-sonar');
var path = require('path');

var mochaOpts = {
    reporter: path.join('', 'mochawesome'),
    timeout: 30000,
    slow: 1,
    'no-exit': true
};

gulp.task('test', () => {
    return gulp.src('./test/saleshelloboxtab.js')
        .pipe(mocha())
        .once('error', () => {
            process.exit(1);
        })
        .once('end', () => {
            process.exit();
        });
});

gulp.task('default', () => {
    return gulp.src('./test/saleshelloboxtab.js')
        .pipe(mocha())
        .once('error', () => {
            process.exit(1);
        })
        .once('end', () => {
            process.exit();
        });
});

gulp.task('sonar', function() {
    var options = {
        sonar: {
            host: {
                url: 'http://localhost:9000'
            },
            jdbc: {
                url: 'jdbc:h2:tcp://localhost:9092/sonar',
                username: 'sonar',
                password: 'sonar'
            },
            projectKey: 'sonar:grunt-sonar-runner:0.1.0',
            projectName: 'galactus-qbo-Sonar',
            projectVersion: '1.0.0',
            sources: ['lib', 'pages', 'test'].join(','),
            language: 'js',
            sourceEncoding: 'UTF-8',
        }
    };
    return gulp.src('dummyFile.js', {
            read: false
        })
        .pipe(sonar(options));
});
