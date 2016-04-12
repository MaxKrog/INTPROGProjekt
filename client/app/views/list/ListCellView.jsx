var React = require("react");

//VIEWS:
var ListCellView = React.createClass({

	propTypes: {
		model: React.PropTypes.object.isRequired //A Backbone-Model
	},

	getInitialState: function() {
		var state = {};

		state.imgUrl = this.props.model.get("type") === "track" ? "./img/track.jpeg" : "./img/tracklist.jpeg";

		return state
	},

	render: function(){

		var href = "#/" + this.props.model.get("type") + "/" + this.props.model.id;
		return(
			<a className="list-group-item" href={href} >
				<div className="media">
					<div className="media-left">
						<img className="media-object" src={this.state.imgUrl} style={{maxWidth:"44px"}}/>
					</div>
					<div className="media-body">
						<h4 className="media-heading">{this.props.model.get("title")}</h4>
						{this.props.model.get("artist")}
					</div>
				</div>
			</a>
		)
	}
});

module.exports = ListCellView;