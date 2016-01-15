module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // CONFIG ===================================/

        watch: {
            compass: {
                files: ['scss/**/*'],
                tasks: ['compass:prod','exec:print_pdf']
            },

            html: {
                files: ['*.html'],
                tasks: ['exec:print_pdf']
            }
        },

        compass: {
            prod: {
                options: {
                    sassDir: ['scss'],
                    cssDir: ['./'],
                    relativeAssets: true,
                    outputStyle: 'compressed',
                    environment: 'production'
                }
            }
        },

        exec: {
            print_pdf: {
              cmd: "wkhtmltopdf -B 0 -L 0 -R 0 -T 0 --page-width 612pt --page-height 792pt lease-template.html  lease.pdf",
              stdout: false,
              stderr: false
            }

        },


    });

    // DEPENDENT PLUGINS =========================/

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-exec');

    // TASKS =====================================/

    grunt.registerTask('default', ['compass:prod' , 'exec' , 'watch']);

};
