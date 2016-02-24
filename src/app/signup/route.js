'use strict';

module.exports = route;

/**
 * @ngInject
 */
function route($stateProvider) {
    // Configure states here
    $stateProvider
        .state('signUp', {
            url: '/signUp',
            template: require('./templates/signUp.tpl.jade'),
            controller: 'SignUpCtrl as vm'
        });
}
