var React = require("react");
var backboneMixin = require('backbone-react-component');
var $ = require("jquery");
//VIEWS:
var ListCellView = require("./ListCellView.jsx");
var TracklistListCellView = require("./TracklistListCellView.jsx");
var DragController = require("../../controllers/DragController.js")

module.exports = React.createClass({
	mixins: [backboneMixin],

	propTypes: {
		collection: React.PropTypes.object.isRequired, //A Backbone-Collection of tracks
		editing: React.PropTypes.bool.isRequired,
		onAddClick: React.PropTypes.func
	},


	render: function(){
		var _this = this;

		var dragMethods = new DragController(this, this.props.collection);

		if(this.props.editing){
			var rows = this.props.collection.models.map(function(model){
				return <TracklistListCellView model={model} key={model.id} dragMethods={dragMethods} onClick={_this.onClick} onDeleteClick={_this.delete}/>
			})
		} else {
			var rows = this.props.collection.models.map(function(model){
				return <ListCellView model={model} key={model.id} onClick={_this.onClick}/>
			})
		}

		return(
			<div className="list-group" onDragOver={dragMethods.dragOver}>
				{rows}
			</div>
		)
	},

	delete: function(track){
		this.props.collection.remove(track);
	},


	onClick: function(model) {
		if(this.props.onAddClick){ //If called with this.props.onAddClick supplied.
			this.props.onAddClick(model)

		} else { //Called without onClick prop. Just navigate to the item.
			window.location.hash = "#/" + model.get("type") + "/" + model.id;
		}
	}


});