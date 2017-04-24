var gulp = require('gulp'),
    buildConfig = require('./config/build.config'),
    $ = require('gulp-load-plugins')();

gulp.task('default', ['build']);


gulp.task('clean', require('del').bind(null, [ 'dist' ]));


gulp.task('lint', function () {
    return gulp.src([ '!src/lib/**', 'src/**/*.js' ])
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'));
});


gulp.task('build', ['lint', 'copy'], function () {
    return gulp.src(buildConfig.src.plugins)
        .pipe($.concat('cordova.js'))
        .pipe($.header(buildConfig.closureStart))
        .pipe($.footer(buildConfig.closureEnd))
        .pipe($.header(buildConfig.banner))
        .pipe(gulp.dest(buildConfig.dist.scripts))
        .pipe($.uglify())
        .pipe($.rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest(buildConfig.dist.scripts))
});

gulp.task('copy', function () {
    gulp.src(['src/scripts/inject.js', 'src/scripts/background.js'])
        .pipe(gulp.dest('dist/scripts/'));
    gulp.src('src/_locales/**')
        .pipe(gulp.dest('dist/_locales'));
    gulp.src('src/images/**')
        .pipe(gulp.dest('dist/images'));
    gulp.src('src/options/**')
        .pipe(gulp.dest('dist/options'));
    gulp.src('src/popup/**')
        .pipe(gulp.dest('dist/popup'));
    gulp.src('src/lib/**')
        .pipe(gulp.dest('dist/lib'));
    return gulp.src('src/manifest.json')
        .pipe(gulp.dest('dist'));
});

gulp.task('zip', ['build'], function () {
    var manifest = require('./src/manifest'),
        distFileName = manifest.name + ' v' + manifest.version + '.zip',
        mapFileName = manifest.name + ' v' + manifest.version + '-maps.zip';
    return gulp.src(['dist/**', '!dist/scripts/**/*.map'])
        .pipe($.zip(distFileName))
        .pipe(gulp.dest('package'));
});

gulp.task('wiredep', function () {
    var wiredep = require('wiredep').stream;

    return gulp.src('src/options/options.html')
        .pipe(wiredep())
        .pipe(gulp.dest('src/options/'))
});

gulp.task('watch', function () {
    gulp.watch('src/**', [ 'build']);
    gulp.watch('src/manifest.json', [ 'build']);
    gulp.watch('bower.json', [ 'wiredep' ]);
});
