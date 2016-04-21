var React = require("react");
var ReactDOM = require("react-dom");

//VIEW
var LoginView = require("../views/pages/LoginView.jsx");

var AuthorizationController = function(options) {

    var app = options.app;
    var element = options.element;
    var user = require("../models/UserModel.js");

        return {

            login: function() {

                if(!user.isAuthorized()){
                    ReactDOM.render(<LoginView model={user} handler={this.handler} />, element);
                }


            },

            logout: function(){
                user.logout({
                    success: function() {
                        window.location.hash = "#/";
                    }
                });
                
            }
        };
};

module.exports = AuthorizationController;