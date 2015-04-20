module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			scripts: {
				files: ['build/style.less','build/component/*.less'],
				tasks: ['build-css'],
				options: {
					spawn: false,
				},
			},
		},

		concat: {
			less: {
				src: ['build/vendor/default.less', 'build/style.less','build/component/*.less'],
				dest: 'build/vendor/concat.less'
			}
		},
		
		less: {
			development: {
				files: {
					"assets/css/style.css": "build/vendor/concat.less"
				}
			}
		},

		cssmin: {
			options: {
				shorthandCompacting: true,
				roundingPrecision: -1
			},
			target: {
				files: {
					'assets/css/style.min.css': ['assets/css/style.css']
				}
			}
		},
		uglify: {
			js: {
				files: {
					'assets/js/app.min.js': ['node_modules/jquery/dist/jquery.js', 'node_modules/bootstrap/dist/js/bootstrap.js']
				}
			}
		},

		browserSync: {
			dev: {
				bsFiles: {
					src : 'assets/css/style.min.css'
				},
				options: {
					proxy: "http://localhost:8000/app/"
				}
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('build-css', ['concat:less','less','cssmin']);
	grunt.registerTask('build-js', ['uglify']);
	grunt.registerTask('build', ['build-css','build-js']);
	grunt.registerTask('livereload', ['browserSync']);
};
