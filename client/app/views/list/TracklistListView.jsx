var React = require("react");
var backboneMixin = require('backbone-react-component');
var $ = require("jquery");
//VIEWS:
var ListCellView = require("./ListCellView.jsx");
var TracklistListCellView = require("./TracklistListCellView.jsx");

module.exports = React.createClass({
	mixins: [backboneMixin],

	propTypes: {
		collection: React.PropTypes.object.isRequired, //A Backbone-Collection of tracks
		editing: React.PropTypes.bool.isRequired,
		onAddClick: React.PropTypes.func
	},


	render: function(){
		var _this = this;

		var rows = this.props.collection.models.map(function(model){
			return <TracklistListCellView model={model} key={model.id} editing={_this.props.editing} delete={_this.delete}/>
		})

		return(
			<div className="list-group">
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

		}
	}


});