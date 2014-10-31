module.exports = function(config) {
    config.set({
        preprocessors: {
            '**/*.cjsx': ['react-coffee']
        },
        
        reactCoffeePreprocessor: {
            transformPath: function(path) {
                return path.replace(/\.cjsx$/, '.coffee')
            }
        }
    });
};