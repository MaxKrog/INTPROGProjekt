var React = require("react");

//VIEWS:
var ListCellView = React.createClass({

	propTypes: {
		model: React.PropTypes.object.isRequired, //A Backbone-Model
		onClick: React.PropTypes.func.isRequired
	},

	getInitialState: function() {
		var state = {};

		state.imgUrl = this.props.model.get("type") === "track" ? "./img/track.jpeg" : "./img/tracklist.jpeg";

		return state
	},

	render: function(){

		return(
			<li className="list-group-item" onClick={this.onClick}>
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

	onClick: function() {
		this.props.onClick(this.props.model);
	}
});

module.exports = ListCellView;