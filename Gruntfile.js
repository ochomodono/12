module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
	  combine: {
		files: {
		  'public/css/main.min.css': ['aseets/css/demo.css', 'assets/css/two.css']
		}
	  }
	},
	 markdown: {
    all: {
      files: [
        {
          expand: true,
          src: '*.md',
          dest: 'public/html/',
          ext: '.html'
        }
      ]
    }
  }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-markdown');

  // Default task(s).
  grunt.registerTask('default', ['cssmin', 'markdown']);
  

};