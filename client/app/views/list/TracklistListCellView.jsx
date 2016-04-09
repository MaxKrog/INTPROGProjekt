var React = require("react");
//VIEWS:
module.exports = React.createClass({

	propTypes: {
		model: React.PropTypes.object.isRequired, //A Backbone-Model
		dragMethods: React.PropTypes.object.isRequired
	},

	getInitialState: function() {
		var state = {};

		state.imgUrl = this.props.model.get("type") === "track" ? "./img/track.jpeg" : "./img/tracklist.jpeg";

		return state
	},

	render: function(){

		var dragMethods = this.props.dragMethods;
		return(
			<li className="list-group-item" draggable="true" onDragStart={dragMethods.dragStart} onDragEnd={dragMethods.dragEnd} >
					<div className="media">
						<div className="media-left">
							<span className="badge" style={{width:"50px"}}><h4> 10 </h4></span>
						</div>
						<div className="media-body">
							<h4 className="media-heading">{this.props.model.get("title")}</h4>
							{this.props.model.get("artist")}
						</div>
					</div>

			</li>
		)
	}
});