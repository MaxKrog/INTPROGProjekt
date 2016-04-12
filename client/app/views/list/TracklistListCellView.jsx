var React = require("react");
var DragController = require("../../controllers/DragController.js");
//VIEWS:
module.exports = React.createClass({

	propTypes: {
		model: React.PropTypes.object.isRequired, //A Backbone-Model
		dragController: React.PropTypes.object.isRequired,
		onDeleteClick: React.PropTypes.func.isRequired
	},

	getInitialState: function() {
		var state = {};

		state.imgUrl = this.props.model.get("type") === "track" ? "./img/track.jpeg" : "./img/tracklist.jpeg";

		return state
	},

	render: function(){


		var dragController = this.props.dragController;
		return(
			<li className="list-group-item" draggable="true"  onDragStart={dragController.dragStart} onDragEnd={dragController.dragEnd} >
					<div className="media">
						<div className="media-left">
							<span className="badge" style={{width:"50px"}}><h4> 10 </h4></span>
						</div>
						<div className="media-body">
							<table width="100%">
								<tr>
									<td><h4 className="media-heading">{this.props.model.get("title")}</h4></td>
									<td width="32" onClick={this.onClick}><a href="#"><img src="./img/icons/delete_x.png" width="32" height="32"/></a></td>
								</tr>
							</table>

							{this.props.model.get("artist")}
						</div>
					</div>

			</li>
		)
	},

	onClick: function(){
		this.props.onDeleteClick(this.props.model);
	}
});