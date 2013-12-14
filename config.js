/**
 * Grunt configuration
 */
'use strict';

var pkg = require('../package');

module.exports = {

	// Project settings
        yeoman: {
            // Configurable paths
            app: '.',
            dist: 'dist'
        },

	// A banner for distributed files (name, version, license, date)
	banner: '/*! ' + pkg.name + ' - v' + pkg.version + ' - MIT License - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %> */',

	destDir: 'dist/',

	requirejs: '../components/requirejs/require'
};
