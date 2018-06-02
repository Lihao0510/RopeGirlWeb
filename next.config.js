const withLess = require('@zeit/next-less');

module.exports = withLess({
    webpack: (config, options) => {

        console.log(config);

        config.node = {
            fs: 'empty'
        };

        return config;
    }
});
