var React = require("react");
var DragController = require("../../controllers/DragController.js");
//VIEWS:
var InfoSocialView = require("../info/InfoSocialView.jsx");

var OrderedListCellView = React.createClass({

	propTypes: {
		model: React.PropTypes.object.isRequired, //A Backbone-Model
		dragController: React.PropTypes.object.isRequired,
		onDeleteClick: React.PropTypes.func.isRequired
	},

	getInitialState: function() {

		return {}
	},

	render: function(){


		var dragController = this.props.dragController;

		var style = {
			display: "relative",
			margin: "0px 0px"
		}
		return(
			<button onClick={this.navigate} className="list-group-item" draggable="true"  onDragStart={dragController.dragStart} onDragEnd={dragController.dragEnd}>
				<div className="row">
					<div className="col-md-1 col-xs-1">
						<h4> #{this.props.model.indexInCollection()} </h4>
					</div>
					<div className="col-md-7 col-xs-7">
						<h4>{this.props.model.get("title")} <small> {this.props.model.get("artist")}</small></h4>
					</div>
					<div className="col-md-4 col-xs-4">
						<InfoSocialView model={this.props.model} marginRight={"2px"} />
					</div>
				</div>
			</button>
		)
	},

	navigate: function(){
		window.location.hash = "#/" + this.props.model.get("type") + "/" + this.props.model.id;
	},

	onClick: function(){
		this.props.onDeleteClick(this.props.model);
	}
});

module.exports = OrderedListCellView;

/*

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

*/