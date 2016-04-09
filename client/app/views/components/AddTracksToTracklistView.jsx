var React = require("react");

var $ = require("jquery");
//VIEWS:
var ListCellView = require("../list/ListCellView.jsx");
var TracklistListCellView = require("../list/TracklistListCellView.jsx");

var InfoView = require("../info/InfoView.jsx");


module.exports = React.createClass({

	propTypes: {
		collection: React.PropTypes.object.isRequired, //A Backbone-Collection of tracks
	},

	render: function(){

		var dragMethods = {
			dragStart: this.dragStart,
			dragEnd: this.dragEnd,
			dragOver: this.dragOver
		}

		return(
			<div className="panel panel-default">
				<div className="panel-heading" onDragOver={this.dragOver}>
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Search for a track" />
						<span className="input-group-btn">
							<button className="btn btn-default" type="button"> Add a new Track </button>
						</span>
					</div>
				</div>
				<InfoView model={this.props.collection.at(0)} editing={true} />
			</div>
		)
	}
});