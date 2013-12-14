  // Performs rewrites based on rev and the useminPrepare configuration

'use strict';

var config = require('../config');

module.exports = {
   options: {
                assetsDirs: ['<%%= yeoman.dist %>']
            },
            html: ['<%%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%%= yeoman.dist %>/styles/{,*/}*.css']

};

