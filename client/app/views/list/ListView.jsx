var React = require("react");

var $ = require("jquery");
//VIEWS:
var ListCellView = require("./ListCellView.jsx");
var TracklistListCellView = require("./TracklistListCellView.jsx");


module.exports = React.createClass({

	propTypes: {
		collection: React.PropTypes.object.isRequired, //A Backbone-Collection of tracks
		editing: React.PropTypes.bool.isRequired
	},

	render: function(){

		var dragMethods = {
			dragStart: this.dragStart,
			dragEnd: this.dragEnd,
			dragOver: this.dragOver
		}

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
			<div className="list-group" onDragOver={this.dragOver}>
				{rows}
			</div>
		)
	},

	dragStart: function(e) {
		this.dragged = $(e.currentTarget);
		//this.dragged.children().hide();
		this.fromIndex = this.dragged.index();
		console.log(this.fromIndex);
    	e.dataTransfer.effectAllowed = 'move';
	},

	dragEnd: function(e){

		console.log(e);
	},

	dragOver: function(e){
		e.preventDefault();
		//this.dragged.style.display = "none";
		this.overIndex = $(e.target).index();
		if(this.fromIndex !== this.overIndex){
			console.log("SWAPPING");
			
			this.props.collection.swapPlaces(this.fromIndex, this.overIndex);
			this.fromIndex = this.overIndex;
		} 
		this.forceUpdate();


		//console.log(e);
	}
});