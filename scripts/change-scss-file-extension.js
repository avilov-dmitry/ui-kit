const fs = require('fs');
const path = require('path');
const glob = require('glob');

const pathToComponents = path.resolve(__dirname, '../lib', 'components'); // path to compiled components

const componentFiles = glob.sync(`${pathToComponents}/**/*.js`); // get .js files in this directory

componentFiles.forEach(item => {
    fs.readFile(item, function(err, data) {
        if(err) {
            throw err;
        }

        data = data.toString(); // convert to string

        data = data.replace(/.scss/, '.css');

        fs.writeFile(item, data, function(err) {
            if(err) {
                console.error(err)
                // console.log('Data replaced - ', item);
            }
        });
    });
});

  

