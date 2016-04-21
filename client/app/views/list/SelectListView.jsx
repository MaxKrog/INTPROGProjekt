var React = require("react");
var backboneMixin = require('backbone-react-component');

//VIEWS:
var SelectListCellView = require("./cell/SelectListCellView.jsx");

var SelectListView = React.createClass({
	mixins: [backboneMixin],

	propTypes: {
		collection: React.PropTypes.object.isRequired //A Backbone-Collection of tracks
	},

	render: function(){
		var _this = this;

		var rows = this.state.trackCollection.models.map(function(model){
			return <SelectListCellView model={model} key={model.id} onClick={_this.onClick} />
		})

		return(
			<div className="list-group">
				{rows}
			</div>
		)
	},

	onClick: function(model) {
		console.log(model);
		this.props.collection.add(model);
	}


});

module.exports = SelectListView;