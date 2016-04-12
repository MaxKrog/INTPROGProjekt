var React = require("react");
var Backbone = require("backbone");
var backboneMixin = require('backbone-react-component');

var HeaderView = React.createClass({
	mixins: [backboneMixin],
	propTypes: {
		model: React.PropTypes.object.isRequired //Backbone.Model: UserModel
	},

	render: function() {

		if(this.props.model.isAuthorized()){
			var toggleLogin = <li><a href="#/logout">Log out</a></li>
		} else {
			var toggleLogin = <li><a href="#/login">Log In</a></li>  
		}

		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">Tracklists</a>
					</div>
					<form className="navbar-form navbar-left">
						<div className="form-group">
						<input type="text" className="form-control" placeholder="Search" />
						</div>
					</form>
					<ul className="nav navbar-nav"> 
						<li><a href="#/">Show Tracklists</a></li> 
						<li><a href="#/add/tracklist">Add New Tracklist</a></li> 
						<li><a href="#/tracks">Show Tracks</a></li>
						<li><a href="#/add/track">Add new Track</a></li>
						{toggleLogin}
					</ul>
				</div>
			</nav>
		);
	}

});

module.exports = HeaderView;
