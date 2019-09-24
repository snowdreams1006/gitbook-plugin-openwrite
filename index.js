var openwriteConfig = {};

module.exports = {
    hooks: {
        "init": function() {
            this.log.debug.ln('init', this.options.pluginsConfig.openwrite);

            openwriteConfig = this.options.pluginsConfig.openwrite;
        }
    }
};