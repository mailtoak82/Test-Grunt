module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

 watch: {

    jade: {
        files: ['main.jade','./Compiled/*.css'],
        tasks: ['jade']
    }
  },


jade: {
          reportal: {
            options: {
              pretty: true,
              data: {
                debug: true,
                timestamp: "<%= new Date().getTime() %>"
              }
            },
            files: {
                "Compiled/Index.html": "main.jade"
              }
          }
      },


express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: ['./Compiled/'],
          livereload: true
      }
    }
  },  

  open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    }
    
  });  
    
  // Load the plugin that provides the "uglify" task.
 
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s).
  grunt.registerTask('default', ['express','open','watch']);

};