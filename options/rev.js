// Renames files for browser caching purposes      

'use strict';

var config = require('../config');

module.exports = {
      dist: {
        files: {
            src: [
                '<%%= yeoman.dist %>/scripts/{,*/}*.js',
                '<%%= yeoman.dist %>/styles/{,*/}*.css',
                '<%%= yeoman.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
                '<%%= yeoman.dist %>/styles/fonts/{,*/}*.*'
            ]
        }
    }


};

