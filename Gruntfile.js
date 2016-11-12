module.exports = function(grunt){

  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '*',
          base: './',
          keepalive: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  
  /* TASKS DEFINITIONS */
  grunt.registerTask('default', ['connect']);
};
