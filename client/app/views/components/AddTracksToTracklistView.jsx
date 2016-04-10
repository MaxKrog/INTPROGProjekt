var React = require("react");

var $ = require("jquery");

//MODELS:
var TrackModel = require("../../models/TrackModel.js");

//COLLECTIONS:
var TrackCollection = require("../../collections/TrackCollection");
//VIEWS:
var ListView = require("../list/ListView.jsx");
var TracklistListCellView = require("../list/TracklistListCellView.jsx");

var InfoView = require("../info/InfoView.jsx");


module.exports = React.createClass({

	propTypes: {
		collection: React.PropTypes.object.isRequired, //A Backbone-Collection of tracks
	},

	getInitialState: function(){

		var trackCollection = new TrackCollection();
		trackCollection.fetch();
		return {
			trackModel: new TrackModel(),
			searchText: "",
			inputMode: "search", //Either "search" or "new"
			trackCollection: trackCollection
		}
	},

	addToTracklist: function(track) {
		this.props.collection.add(track);
	},

	render: function(){

		if(this.state.inputMode === "new"){
			var button = <button onClick={this.addNewTrack} className="btn btn-success" type="button"> Save and add track </button>
		} else if( this.state.inputMode === "search" ){
			var button = <button onClick={this.inputModeNew} className="btn btn-default" type="button"> Add a new Track</button>
		}

		var addNewTrackView = <InfoView model={this.state.trackModel} editing={true} />;
		var searchForTrackView = <ListView collection={this.state.trackCollection} editing={false} onAddClick={this.addToTracklist} />
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
				{this.state.inputMode === "search" ? searchForTrackView : addNewTrackView}
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

	addNewTrack: function( track ){ 
		console.log("Add new track!");
		var _this = this;

		if(this.state.inputMode === "new"){ //Add a new track to the tracklist-tracks.
			this.state.trackModel.save().done(function(){
				_this.props.collection.add(_this.state.trackModel);
				_this.setState({
					inputMode: "search",
					trackModel: new TrackModel()
				});
			});

		} else if (this.state.inputMode === "search"){ //Add an already existing track to tracklist-tracks.

		}


	}
});