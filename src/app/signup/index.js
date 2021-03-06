'use strict';

module.exports = require('angular')
    .module('bookbottles.showcase.signUp', [
        require('angular-ui-router')
    ])
    .config(require('./route'))
    .controller('SignUpCtrl', require('./controllers/SignUpCtrl'))
    .factory('UserService', require('./services/UserService'))
    .name;
