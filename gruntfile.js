module.exports = function(grunt) {

    //Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        validation: {
            options: {
                reset: grunt.option('reset') || false,
                stoponerror: false,
                relaxerror: ["Bad value X-UA-Compatible for attribute http-equiv on element meta."] //ignores these errors
            },
            files: {
                src: ['./*.html', '!./skeleton.html']
            }
        },
        csslint: {
            lax: {
                options: {
                    import: false
                },
                src: ['./*.css']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-html-validation');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    
    grunt.registerTask('default', ['validation', 'csslint']);
    };