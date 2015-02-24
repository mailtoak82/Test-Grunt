module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

 watch: {
    html: {
        files: ['main.jade'],
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
                "Compiled/main.html": "main.jade"
              }
          }
        }

})
    
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};