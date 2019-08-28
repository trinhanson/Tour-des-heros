var gulp = require('gulp');
var concat = require('gulp-concat');
//var gzip = require('gulp-gzip');

const outputDir='dist/angular-tour-of-heroes';
const suffix='-es2015';
const outputFiles = [
    `runtime${suffix}`, 
    `polyfills${suffix}`,
    `scripts`,
    `main${suffix}`
];

gulp.task('package', async function() {
	await gulp.src( outputFiles.map(name => `${outputDir}/${name}.js`))
	.pipe(concat('tourHero.js'))
	//.pipe(gzip())
    .pipe(gulp.dest(`preview`));
});