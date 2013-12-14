/**
 * Concatenate pages
 */
'use strict';

//var pages = require('../../pages');

module.exports = {

dist: {
                files: {
                    '<%%= yeoman.dist %>/scripts/scripts.js': [
                        '<%%= yeoman.dist %>/scripts/scripts.js'
                    ]
                }
      }

};
