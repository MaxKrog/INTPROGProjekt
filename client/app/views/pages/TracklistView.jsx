var React = require("react");

//VIEWS:
var ButtonGroupView = require("../components/ButtonGroupView.jsx");
var InfoView = require("../info/InfoView.jsx");
var TracklistListView = require("../list/TracklistListView.jsx");

var AddTracksToTracklistView = require("../components/AddTracksToTracklistView.jsx");

module.exports = React.createClass({

	propTypes: {
		editing: React.PropTypes.bool.isRequired, 
		isNew: React.PropTypes.bool.isRequired,
		model: React.PropTypes.object.isRequired //A Backbone-Model
	},

	getInitialState: function() {
		return {
			editing: this.props.editing || false
		}
	},

	render: function(){ 
		var _this = this;
		var methods = {
			edit: this.edit,
			save: this.save,
			cancel: this.cancel
		};

		var model = this.props.model;


		return(
			<div>		
				<div className="panel panel-default">
				
					{this.props.model.createdByUser() ? <ButtonGroupView methods={methods} editing={this.state.editing}  /> : ""}

					<InfoView model={model} editing={this.state.editing} />

					<TracklistListView collection={model.tracks} editing={this.state.editing} />
				</div>

				{this.state.editing? <AddTracksToTracklistView collection={model.tracks}/> : ""}
			</div>
		)
	},

	edit: function() {
		console.log("Editing!");
		this.setState({editing: true});

	},

	cancel: function () {
		if( this.props.model.isNew()){
			console.log("SHOULD BACK TO LATEST URL");
		} else {
			this.props.model.resetToBackup();
			this.setState({
				editing: false
			});
		}
		
	},

	save: function() {
		var _this = this;

		this.props.model.save().done(function(){
			console.log("Saved!");
			_this.setState({
				editing: false
			});
		})
	}
});