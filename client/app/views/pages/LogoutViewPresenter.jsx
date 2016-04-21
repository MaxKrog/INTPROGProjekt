var React = require("react");

var userModel = require("../../models/UserModel.js");

var LogoutView = React.createClass({

	contextTypes: {
		router: React.PropTypes.func
	},

	componentDidMount: function() {
		var _this = this;
		userModel.logout({
            success: function() {
                _this.context.router.push("/");
            }
        });
	},

	render: function() {
		return <div> Youre being logged out and will be redirected </div>
	}

});

module.exports = LogoutView;