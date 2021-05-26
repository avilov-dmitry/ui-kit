const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

function sassTask() {
    return src('src/components/**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('lib/components/'));
}

// const startWatch = () => {
//     console.log("Watching source directories...");

//     watch('src/components/**/*.scss', sassTask);
//   }

// exports.sass = sassTask;
exports.default = sassTask;