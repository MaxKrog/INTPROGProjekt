var React = require("react");

//VIEWS:
var LoginFormView = require("../login/LoginFormView.jsx");

var userModel = require("../../models/UserModel.js");


module.exports = React.createClass({


	render: function(){ 

		return(		
        	<LoginFormView model={userModel} submitHandler={this.submitHandler} />
		)
	},

	submitHandler: function(formData){
		var _this = this;

        userModel.save(formData, {
        	success: function(){
        		window.location.hash = "#/";
        	}
        });
	}
});