module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            local: {
                options: {
                    hostname: "localhost",
                    port: 9000,
                    keepalive: true,
                    base: "app"
                }
            }
        }
    });
    
    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-connect');
    
    // Default task(s).
    //grunt.registerTask('default', []);

};
