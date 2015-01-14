/**
 *
 * environment config, used by grunt to produce an environment specific build based on the node env
 *
 * IMPORTANT: This file is not packaged and sent to the client, BUT the grunt task produces a
 * environment-specific index.html based on the NODE_ENV variable that grunt finds when executing 'grunt build'.
 * Grunt calls "environmentConfig[process.env.NODE_ENV || 'dev'] to get the correct config object.
 *
 * explanations for supported config parameters:
 *
 * - translationSource: source for the translation resources, values: 'local', 'wti'
 *
 *
 *
 */
var _ = require('lodash');

var env = process.env.NODE_ENV || 'dev';

var defaultConfig = {
    name: process.env.NODE_ENV,
    webclientUrl: 'https://' + env + '.youpers.com',
    backendUrl: 'https://' + env + '.youpers.com/api',
    swaggerUrl: 'http://' + env + '.youpers.com:5000',
    projectName: "Youpers Backend: " + env
};

var specificConfigs = {
    default: {},
    dev: {
        name: 'dev',
        webclientUrl: 'http://localhost:9000',
        backendUrl: 'http://localhost:8000',
        swaggerUrl: 'http://localhost:5000'
    },
    localvm: {
        // used to test from Windows VMs on your local machine,
        // REQUIRES: - a /etc/hosts entry for 'localvm' to the real IP of you mac
        //           - set the NODE_ENV to 'localvm' in the shell where your weblclient is grunted.
        name: 'localvm',
        webclientUrl: 'http://localvm:9000',
        backendUrl: 'http://localvm:8000'
    }
};

module.exports = {
    environmentConfig: _.forEach(specificConfigs, function (conf, key) {
        _.defaults(conf, defaultConfig);
    })
};
