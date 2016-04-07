var React = require("react");

//VIEWS:
var ListCellView = require("./ListCellView.jsx");

module.exports = React.createClass({

	propTypes: {
		collection: React.PropTypes.object.isRequired, //A Backbone-Collection of tracks
		title: React.PropTypes.string.isRequired
	},

	render: function(){

		var rows = this.props.collection.models.map(function(model){
			return <ListCellView model={model} key={model.get("id")} />
		})

		return(
			<div className="list-group">
				{rows}
			</div>
		)
	}
});