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
		type: React.PropTypes.string.isRequired //"unordered" or "ordered". To know in what context the list is displayed.
	},


	render: function(){
		var _this = this;

		if(this.props.type === "ordered"){
			var rows = this.props.collection.models.map(function(model){
				return <TracklistListCellView model={model} key={model.id} />
			})
		} else if(this.props.type == "unordered") {
			var rows = this.props.collection.models.map(function(model){
				return <ListCellView model={model} key={model.id} />
			})
		}

		return(
			<div className="list-group">
				{rows}
			</div>
		)
	}


});