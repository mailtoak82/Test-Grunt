module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

  htmlhint: {
    build: {
        options: {
            'tag-pair': true,
            'tagname-lowercase': true,
            'attr-lowercase': true,
            'attr-value-double-quotes': true,
            'doctype-first': true,
            'spec-char-escape': true,
            'id-unique': true,
            'head-script-disabled': true,
            'style-disabled': true
        },
        src: ['index.html']
    }
},

  watch: {
    html: {
        files: ['index.html'],
        tasks: ['htmlhint']
    }
}

})
    
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};