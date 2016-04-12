var React = require("react");
var backboneMixin = require('backbone-react-component');
//VIEWS:
var EditInfoCellView = require("../info/EditInfoCellView.jsx");

var LoginInputView = require("../login/LoginInputView.jsx");

var LoginFormView = React.createClass({

	mixins: [backboneMixin], //Updates this.state.error if model triggers an error.

	propTypes: {
		model: React.PropTypes.object.isRequired, //Backbone.Model: UserModel
		submitHandler: React.PropTypes.func.isRequired //Function to be called with the collected userdata and the action-type.
	},

	getInitialState: function() {
		return {
			action: "login", // "login" or "create"
			error: false
		}
	},

	//Toggles state.action between "login" and "create". Also resets state.error
	toggleAction: function(){
		var action = this.state.action === "login" ? "create" : "login";
		this.setState({
			action: action,
			error: false
		});
	},

	render: function(){ 
		console.log(this.props);
		
		var isStateLogin = this.state.action === "login" ? true : false; //Boolean value. True if this.state.action === "login". Used for rendering

		var error = this.state.error ? true : false;

		if(isStateLogin){
			var formBody = 
				<div className="panel-body form-horizontal">
					<LoginInputView title={"Username"} type={"text"} name={"username"} error={error}/>
					<LoginInputView title={"Password"} type={"password"} name={"password"} error={error}/>
				</div>
		} else {
			var formBody =
				<div className="panel-body form-horizontal">
					<LoginInputView title={"Username"} type={"text"} name={"username"} error={error} />
					<LoginInputView title={"Password"} type={"password"} name={"password"} error={error} />
					<LoginInputView title={"Email"} type={"email"} name={"email"} error={error} />
				</div>
		}

		

		return(		
    		<form className="panel panel-default" ref="form" onSubmit={this.onSubmit}>
    			<div className="panel-body">
    				<h2 className="text-center"> Welcome </h2>
    				<h2 className="text-center"><small>{isStateLogin ? "Please log in to be able to contribute." : "Please create an account to be able to contribute." }</small></h2>
    			</div>

				{formBody}

    			<div className="panel-body">
        			<div className="btn-group btn-group-justified">
        					<a onClick={this.toggleAction} type="button" className="btn btn-default btn-block">{isStateLogin ? "I dont have an account" : "I already have an account" } </a>
        					<a onClick={this.submit} type="button" className="btn btn-default btn-block"> {isStateLogin ? "Log in" : "Create account" } </a>
        			</div>
    			</div>
    		</form>
		)
	},



	submit: function(e){
		console.log("Submitted!");

		var formData = {
			username: this.refs.form["username"].value,
			password: this.refs.form["password"].value,
			action: this.state.action
		}

		this.props.submitHandler(formData);

	}
});

module.exports = LoginFormView;