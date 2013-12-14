/**
 * Remove stuff
 */
'use strict';

module.exports = {
	
   // Empties folders to start fresh

    dist: {
        files: [{
            dot: true,
            src: [
                '.tmp',
                '<%%= yeoman.dist %>/*',
                '!<%%= yeoman.dist %>/.git*'
            ]
        }]
    },
    server: '.tmp'

};
