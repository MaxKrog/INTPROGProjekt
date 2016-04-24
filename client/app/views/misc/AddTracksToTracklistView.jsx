var React = require("react");

//MODELS:
var TrackModel = require("../../models/TrackModel.js");

//COLLECTIONS:
var TrackCollection = require("../../collections/TrackCollection");

//VIEWS:
var InfoView = require("../info/InfoView.jsx");
var SelectListView = require("../list/SelectListView.jsx");


module.exports = React.createClass({

	propTypes: {
		collection: React.PropTypes.object.isRequired, // Backbone.Collection: TracklistModel.tracks
	},

	getInitialState: function(){

		return {
			trackModel: new TrackModel(),
			inputMode: "search", //"search" or "new"
		}
	},

	render: function(){

		return(
			<div>
				<div>
					<p className="text-center">
						{this.state.inputMode === "new" && <button onClick={this.toggleInputMode} className="btn btn-warning go inline" type="button"> Cancel </button>}
						{this.state.inputMode === "new" && <button onClick={this.addNewTrack} className="btn btn-success go inline" type="button"> Save and add track </button>}
						{this.state.inputMode === "search" && <button onClick={this.toggleInputMode} className="btn btn-default go inline" type="button"> Create a new Track</button>}
					</p>
				</div>

				{this.state.inputMode === "new " && <InfoView model={this.state.trackModel} editing={true} />}
				{this.state.inputMode === "search" && <SelectListView collection={this.props.collection} />}
			</div>
		)
	},

	searchFocus: function() {
		this.setState({
			inputMode: "search"
		})
	},

	toggleInputMode: function(){
		this.setState({
			inputMode: (this.state.inputMode === "search" ? "new" : "search")
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
	},

	handleFilterChange: function(e){
		this.setState({
			filterString: e.target.value
		});
	}
});