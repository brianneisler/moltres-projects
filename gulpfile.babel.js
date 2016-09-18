//-------------------------------------------------------------------------------
// Imports
//-------------------------------------------------------------------------------

import gulp from 'gulp'
import eslint from 'gulp-eslint'
import mocha from 'gulp-mocha'
import util from 'gulp-util'
import del from 'del'


//-------------------------------------------------------------------------------
// Gulp Tasks
//-------------------------------------------------------------------------------

gulp.task('dev', ['lint', 'lint-watch'])

gulp.task('test', ['lint', 'mocha'])

gulp.task('lint', () => {
  return gulp.src([
    '**/*.js',
    '!node_modules/**',
    '!dist/**'
  ])
  .pipe(eslint())
  .pipe(eslint.formatEach())
  .pipe(eslint.failOnError())
  .on('error', function (error) {
    util.log('Stream Exiting With Error', error)
  })
})

gulp.task('mocha', () => {
  return gulp.src([
    '**/__tests__/*.js',
    '!node_modules/**',
    '!dist/**'
  ])
  .pipe(mocha({
    compilers: {
      js: babelRegister
    }
  }))
})

gulp.task('clean', () => {
  return del([
    'dist'
  ])
})


//-------------------------------------------------------------------------------
// Gulp Watchers
//-------------------------------------------------------------------------------

gulp.task('lint-watch', function() {
  const lintAndPrint = eslint()
  lintAndPrint.pipe(eslint.formatEach())

  return gulp.watch('src/**/*.js', function (event) {
    if (event.type !== 'deleted') {
      gulp.src(event.path)
        .pipe(lintAndPrint, {end: false})
        .on('error', function (error) {
          util.log(error)
        })
    }
  })
})
