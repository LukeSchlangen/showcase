'use strict';

module.exports = UserService;

/**
 * @ngInject
 */
function UserService() {
    var UserService = {
        login: login,
        signUp:signUp
    };

    return UserService;

    //////////

    function login() {
        console.debug('Logging in a user');
    }
    function signUp() {
        console.debug('Signing up a user');
    }
}

