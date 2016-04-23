var React = require("react");
var backboneMixin = require('backbone-react-component');
var Link = require("react-router").Link;
var IndexLink = require("react-router").IndexLink;

var UserModel = require("../../models/UserModel.js");


var NavLink = React.createClass({

	render: function() {
		return (
			<Link {...this.props} activeClassName="navactive"/>
		);		
	}

});


var HeaderView = React.createClass({
	
	mixins: [backboneMixin],
	
	getInitialState: function() {
		UserModel.on("all", function(){
			this.forceUpdate();
		}, this);
		
		return {
			user: UserModel
		}
		
	},


	render: function() {
		var user = this.state.user

		if(user.isAuthorized()){
			var toggleLogin = <li><Link to="/logout" activeClassName="navactive"> Log out </Link></li>;
		} else {
			var toggleLogin = <li><Link to="/login" activeClassName="navactive"> Log in </Link></li>;
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
								<li><IndexLink to="/" activeClassName="navactive"> Latest Tracklists </IndexLink></li>
								<li><Link to="/add/tracklist" activeClassName="navactive"> Add New Tracklist </Link></li>
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
