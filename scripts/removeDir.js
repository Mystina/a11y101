'use strict';

// remove directory passed as argument
const fs = require('fs-extra');
const dirname = process.argv[2]; // for example node deleteDir.js dist/abc

/**
 * remove directory recursively based on rm -rf
 * https://github.com/jprichardson/node-fs-extra/blob/master/docs/remove.md
 * @param dirname - directory passes as an argument
 */

fs.remove(dirname, (err) => {
    if (err) {
        console.error(err);
    }
});