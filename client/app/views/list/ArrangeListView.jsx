var React = require("react");
var backboneMixin = require('backbone-react-component');


//VIEWS:
var ArrangeListCellView = require("./cell/ArrangeListCellView.jsx");

var ArrangeListView = React.createClass({
	mixins: [backboneMixin],

	propTypes: {
		collection: React.PropTypes.object.isRequired //A Backbone-Collection of tracks
	},

	render: function(){
		var _this = this;

		var rows = this.props.collection.map(function(model){
			return <ArrangeListCellView model={model} collection={_this.props.collection } key={model.id} />
		})

		return(
			<div className="list-group">
				{rows}
			</div>
		)
	}

});

module.exports = ArrangeListView;