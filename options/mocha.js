/**
 * Build Modernizr
 */
'use strict';

var config = require('../config');

module.exports = {

    <% if (testFramework === 'mocha') { %>
        // Mocha testing framework configuration options
    
            all: {
                options: {
                    run: true,
                    urls: ['http://<%%= connect.test.options.hostname %>:<%%= connect.test.options.port %>/index.html']
                }
            }
        <% }%>
	
    
};
