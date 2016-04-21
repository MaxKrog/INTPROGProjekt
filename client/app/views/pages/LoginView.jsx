var React = require("react");
var backboneMixin = require('backbone-react-component');
//VIEWS:
var EditInfoCellView = require("../info/EditInfoCellView.jsx");

var LoginInputView = require("../login/LoginInputView.jsx");
var LoginFormView = require("../login/LoginFormView.jsx");
module.exports = React.createClass({

	mixins: [backboneMixin], 

	propTypes: {
		model: React.PropTypes.object.isRequired //Backbone.Model: UserModel
	},

	render: function(){ 

		return(		
        	<LoginFormView model={this.props.model} submitHandler={this.submitHandler}  />
		)
	},

	submitHandler: function(formData){
		console.log("LoginView: submitHandler");
		var _this = this;

        this.props.model.save(formData, {
        	success: function(){
        		window.location.hash = "#/";
        	},
        	wait: true
        });
	}
});