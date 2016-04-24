var React = require("react");
var backboneMixin = require('backbone-react-component');

//STORES:
var TrackStore = require("../../stores/TrackStore.js");

//VIEWS:
var SelectListCellView = require("./cell/SelectListCellView.jsx");

var SelectListView = React.createClass({
	mixins: [backboneMixin],

	propTypes: {
		collection: React.PropTypes.object.isRequired //A Backbone-Collection of tracks. Sitting on TracklistModel.tracks
	},
	
	getInitialState: function() {
		return {
			trackCollection: TrackStore.getAll()
		}
	},

	render: function(){
		var _this = this;

		var rows = this.state.trackCollection.models.map(function(model){
			return <SelectListCellView model={model} key={model.id} collection={_this.props.collection}/>
		})

		return(
			<div className="list-group">
				{rows}
			</div>
		)
	}


});

module.exports = SelectListView;