var React = require("react");

//VIEWS:
module.exports = React.createClass({

	propTypes: {
		model: React.PropTypes.object.isRequired //A Backbone-Model
	},

	getInitialState: function() {
		var state = {};

		state.imgUrl = this.props.model.get("type") === "track" ? "./img/track.jpeg" : "./img/tracklist.jpeg";

		return state
	},

	render: function(){

		return(
			<li className="list-group-item" onClick={this.click}>
				<div className="media">
					<div className="media-left">
						<img className="media-object" src={this.state.imgUrl} style={{maxWidth:"30px"}}/>
					</div>
					<div className="media-body">
						<h4 className="media-heading">{this.props.model.get("title")}</h4>
						{this.props.model.get("artist")}
					</div>
				</div>
			</li>
		)
	},

	click: function() {
		var model = this.props.model;
		window.location.hash = "#/" + model.get("type") + "/" + model.get("id");
	}
});