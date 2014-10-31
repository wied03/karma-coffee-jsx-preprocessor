var createReactCoffeePreprocessor = function(args, config, logger,helper) {
    config = config || {};

    var log = logger.create('preprocessor.reactcoffee');
    
    var defaultOptions = {};
    
    var options = helper.merge(defaultOptions, args.options || {}, config.options || {});

    var transformPath = args.transformPath || config.transformPath || function(filepath) {
        return filepath.replace(/\.coffee$/, '.js');
    };
    
    return function(content,file,done) {
        log.debug('Processing "%s".', file.originalPath);
        file.path = transformPath(file.originalPath);
        done(require('coffee-react-transform')(content));
    };
};

createReactCoffeePreprocessor.$inject = ['args','config.reactCoffeePreprocessor', 'logger', 'helper'];
module.exports = {
    'preprocessor:react-coffee': ['factory', createReactCoffeePreprocessor]
};