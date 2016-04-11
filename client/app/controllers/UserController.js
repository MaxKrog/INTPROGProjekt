var React = require("react");
var ReactDOM = require("react-dom");

//MODEL

//COLLECTION

//VIEW
var LoginView = require("../views/pages/LoginView.jsx");

module.exports = function(options) {
    
    // Where to render
    var app = options.app;
    var element = options.element;

    return {
        login: function() {

                ReactDOM.render(
                    <LoginView />, element);
            }

        
    };
};