var React = require("react");
var backboneMixin = require('backbone-react-component');
//VIEWS:
var EditInfoCellView = require("../info/EditInfoCellView.jsx");

var LoginInputView = require("../login/LoginInputView.jsx");
var LoginView = require("../login/LoginFormView.jsx");
module.exports = React.createClass({

	mixins: [backboneMixin],

	propTypes: {
		model: React.PropTypes.object.isRequired //Backbone.Model: UserModel
	},

	getInitialState: function() {
		return {
			action: "login" // "login" or "create"
		}
	},

	render: function(){ 

		return(		
        	<div className="row">
        		<div className="col-md-8 col-md-offset-2">
        			<LoginView model={this.props.model} submitHandler={this.submitHandler} />
        		</div>
        	</div>
		)
	},

	submitHandler: function(formData){
		console.log("LoginView: submitHandler");
		var _this = this;
        this.props.model.save(formData, {
        	success: function(){
        		window.location.hash = "#/";
        	},
        	error: function(){
        		_this.setState({
        			error: "Something went wrong. Try again."
        		})
        	}
        });
	}
});