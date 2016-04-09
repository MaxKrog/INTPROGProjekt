var React = require("react");

var $ = require("jquery");
//VIEWS:
var ListCellView = require("./ListCellView.jsx");
var TracklistListCellView = require("./TracklistListCellView.jsx");
var DragController = require("../../controllers/DragController.js")

module.exports = React.createClass({

	propTypes: {
		collection: React.PropTypes.object.isRequired, //A Backbone-Collection of tracks
		editing: React.PropTypes.bool.isRequired
	},

	render: function(){
		var _this = this;

		var dragMethods = new DragController(this, this.props.collection);

		if(this.props.editing){
			var rows = this.props.collection.models.map(function(model){
				return <TracklistListCellView model={model} key={model.id} dragMethods={dragMethods}/>
			})
		} else {
			var rows = this.props.collection.models.map(function(model){
				return <ListCellView model={model} key={model.id} />
			})
		}


		return(
			<div className="list-group" onDragOver={dragMethods.dragOver}>
				{rows}
			</div>
		)
	},


});