var React = require("react");
var Backbone = require("backbone");
var backboneMixin = require('backbone-react-component');
var Link = require("react-router").Link;

var UserModel = require("../../models/UserModel.js");

var HeaderView = React.createClass({
	mixins: [backboneMixin],


	getInitialState: function(){
		return {
			user: UserModel
		}
	},

	render: function() {

		var user = this.state.user

		if(user.isAuthorized()){
			var toggleLogin = <li><Link to="/logout" activeClassName="active"> Log out </Link></li>;
		} else {
			var toggleLogin = <li><Link to="/login" activeClassName="active"> Log in </Link></li>;
		}

		return (
			<section className="container">
				
				<section className="row">
					<nav className="navbar navbar-default">
						<div className="container-fluid">
							<div className="navbar-header">
								<a className="navbar-brand" href="#">{user.get("username")}</a>
							</div>
							<ul className="nav navbar-nav"> 
								<li><Link to="/" activeClassName="active"> Latest Tracklists </Link></li>
								<li><Link to="/add/tracklist" activeClassName="active"> Add New Tracklist </Link></li>
								{toggleLogin}
							</ul>
						</div>
					</nav>
				</section>

				<section className="row">
					{this.props.children}
				</section>
			</section>
		);
	}

});

module.exports = HeaderView;
