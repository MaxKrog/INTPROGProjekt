var React = require("react");
var backboneMixin = require('backbone-react-component');
var $ = require("jquery");
//VIEWS:
var ListCellView = require("./ListCellView.jsx");
var AddTracklistListCellView = require("./AddTracklistListCellView.jsx");

var TrackCollection = require("../../collections/TrackCollection.js");

var AddTracklistListView = React.createClass({
	mixins: [backboneMixin],

	propTypes: {
		collection: React.PropTypes.object.isRequired, //A Backbone-Collection of tracks
		filterString: React.PropTypes.string
	},

	getInitialState: function() {
		var trackCollection = new TrackCollection();
		trackCollection.fetch();

		return {
			trackCollection: trackCollection
		}
	},

	componentWillMount: function() {
		this.state.trackCollection.on("all", function() {
			this.forceUpdate();
		}, this);
	},

	componentWillUnmount: function() {
		this.state.trackCollection.off();
	},


	render: function(){
		var _this = this;

		var rows = this.state.trackCollection.models.map(function(model){
			return <AddTracklistListCellView model={model} key={model.id} onClick={_this.onClick} />
		})

		return(
			<div className="list-group" >
				{rows}
			</div>
		)
	},

	onClick: function(model) {
		console.log(model);
		this.props.collection.add(model);
	}


});

module.exports = AddTracklistListView;