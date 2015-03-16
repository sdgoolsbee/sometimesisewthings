module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: {
                src: [
                    'css/<%= pkg.name %>.css',
                    'css/<%= pkg.name %>.min.css',
                    'css/<%= pkg.name %>.min.css.map'
                ]
            }
        },
        uglify: {
            // main: {
            //     src: 'js/clean-blog.js',
            //     dest: 'js/clean-blog.min.js'
            // },
            jquery: {
                src: 'lib/jquery.js',
                dest: 'lib/jquery.min.js'
            },
            // bootstrap: {
            //     src: 'js/bootstrap.js',
            //     dest: 'js/bootstrap.min.js'
            // },
            // instafeed: {
            //     src: 'js/instafeed.js',
            //     dest: 'js/instafeed.min.js'
            // },
            head: {
                src: 'lib/head.js',
                dest: 'lib/head.min.js'
            }
        },
        sass: {
            expanded: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    'css/<%= pkg.name %>.css': 'sass/<%= pkg.name %>.scss'
                }
            },
            // minified: {
            //     options: {
            //         style: 'compressed',
            //         sourcemap: 'none'
            //     },
            //     files: {
            //         'css/<%= pkg.name %>.min.css': 'sass/<%= pkg.name %>.scss'
            //     }
            // }
        },
        banner: '/*!\n' +
            ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: ['css/<%= pkg.name %>.css', 'css/<%= pkg.name %>.min.css', 'js/clean-blog.min.js']
                }
            }
        },
        watch: {
            // scripts: {
            //     files: ['js/clean-blog.js'],
            //     tasks: ['uglify'],
            //     options: {
            //         spawn: false,
            //     },
            // },
            sass: {
                files: ['**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
        }
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'uglify', 'sass', 'usebanner']);

};
