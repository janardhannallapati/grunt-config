/**
 * Build Modernizr
 */
'use strict';

var config = require('../config');

module.exports = {

    <% if (testFramework === 'jasmine') { %>
          // Jasmine testing framework configuration options
       all: {
                options: {
                    specs: 'test/spec/{,*/}*.js'
                }
            }
        
        <% }%>
	
    
};
