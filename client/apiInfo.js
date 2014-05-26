getLoginData = function () {
    return {
        apiKey: $('.js-apiKey').val(),
        domain: $('.js-domain').val()
    };
};

Template.apiInfo.getApiKey = function () {
    return _.isObject(window.LoginData) ? window.LoginData.apiKey : '';
};

Template.apiInfo.getDomain = function () {
    return _.isObject(window.LoginData) ? window.LoginData.domain : '';
};