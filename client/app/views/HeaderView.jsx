var React = require("react");


module.exports = React.createClass({

	render: function(){
		return(
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
						<li className="active"><a href="#">Frontpage</a></li> 
						<li><a href="#">Add New Track</a></li>
						<li><a href="#">Add New Tracklist</a></li> 
						<li><a href="#">Log Out</a></li>  
					</ul>
				</div>
			</nav>
		)
	}
});

