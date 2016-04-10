var React = require("react");

var $ = require("jquery");

//MODELS:
var TrackModel = require("../../models/TrackModel.js");
//VIEWS:
var ListCellView = require("../list/ListCellView.jsx");
var TracklistListCellView = require("../list/TracklistListCellView.jsx");

var InfoView = require("../info/InfoView.jsx");


module.exports = React.createClass({

	propTypes: {
		collection: React.PropTypes.object.isRequired, //A Backbone-Collection of tracks
	},

	getInitialState: function(){
		return {
			trackModel: new TrackModel(),
			searchText: "",
			inputMode: "search" //Either "search" or "new"
		}
	},

	addToTracklist: function(track) {
		this.props.collection.add(track);
	},

	render: function(){

		if(this.state.inputMode === "new"){
			var button = <button onClick={this.addNewTrack} className="btn btn-success" type="button"> Save and add track </button>
		} else {
			var button = <button onClick={this.inputModeNew} className="btn btn-default" type="button"> Add a new Track</button>
		}
		return(
			<div className="panel panel-default">

				<div className="panel-heading" >
					<div className="input-group">
						<input onFocus={this.searchFocus} type="text" className="form-control" placeholder="Search for a track" />
						<span className="input-group-btn">
							{button}
						</span>
					</div>
				</div>
				{this.state.inputMode === "search" ? <div>search </div> : <InfoView model={this.state.trackModel} editing={true} />}
			</div>
		)
	},

	searchFocus: function() {
		this.setState({
			inputMode: "search"
		})
	},

	inputModeNew: function(){
		this.setState({
			inputMode: "new"
		});
	},

	addNewTrack: function(){
		console.log("Add new track!");
		var _this = this;
		this.state.trackModel.save().done(function(){
			_this.props.collection.add(_this.state.trackModel);
			_this.setState({
				inputMode: "search",
				trackModel: new TrackModel()
			});
		});

	}
});