module.exports = function(grunt) {
    grunt.initConfig({
        webdriver: { // for use with webdriver.io
            options: {
                desiredCapabilities: {
                    browserName: 'chrome' // No Xvfb required
                }
            },
            chrome: {
                tests: ['./test/test-webdriver-ref.js'],
                options: {
                    desiredCapabilities: {
                        browserName: 'chrome'
                    }
                }
            },
        },
    });
    grunt.loadNpmTasks('grunt-webdriver');
    grunt.registerTask('default', ['webdriver']);
};
