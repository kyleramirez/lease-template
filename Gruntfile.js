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
              cmd: 'wkhtmltopdf -B 48pt -L 24pt -R 24pt -T 24pt --page-width 612pt --page-height 792pt --footer-html lease-footer.html --print-media-type lease-template.html  lease.pdf',
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
