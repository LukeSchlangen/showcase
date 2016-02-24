'use strict';

module.exports = LoginCtrl;

/**
 * @ngInject
 */
function LoginCtrl(UserService) {
    var vm = this;

    vm.login = UserService.login;
}

