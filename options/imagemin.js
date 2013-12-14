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
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%%= yeoman.dist %>/images'
                }]
            }
};
