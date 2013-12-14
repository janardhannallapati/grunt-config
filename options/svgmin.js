/**
 * Lossless image optimization
 */
'use strict';

var config = require('../config');

module.exports = {
      dist: {
                files: [{
                    expand: true,
                    cwd: '<%%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%%= yeoman.dist %>/images'
                }]
            }

};
