var React = require("react");
var backboneMixin = require('backbone-react-component');

//VIEWS:
var SimpleListOrderedCellView = require("./cell/SimpleListOrderedCellView.jsx");
var SimpleListUnorderedCellView = require("./cell/SimpleListUnorderedCellView.jsx");

var SimpleListView = React.createClass({

	propTypes: {
		collection: React.PropTypes.object.isRequired, //A Backbone-Collection of tracks
		type: React.PropTypes.string.isRequired //"unordered" or "ordered". 
	},


	render: function(){

		if(this.props.type === "unordered"){
			var rows = this.props.collection.models.map(function(model){
				return <SimpleListUnorderedCellView model={model} key={model.id} />
			})
		} else {
			var rows = this.props.collection.models.map(function(model){
				return <SimpleListOrderedCellView model={model} key={model.id} />
			})
		}

		return (
			<div className="list-group">
				{rows}
			</div>
		)
	}
});

module.exports = SimpleListView;