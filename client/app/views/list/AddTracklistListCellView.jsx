var React = require("react");
var backboneMixin = require('backbone-react-component');
var $ = require("jquery");
//VIEWS:
var ListCellView = require("./ListCellView.jsx");
var TracklistListCellView = require("./TracklistListCellView.jsx");

var TrackCollection = require("../../collections/TrackCollection.js");

var AddTracklistListCellView = React.createClass({
	mixins: [backboneMixin],

	propTypes: {
		model: React.PropTypes.object.isRequired, //A Backbone-Collection of tracks
		onClick: React.PropTypes.func.isRequired
	},

	render: function(){

		return(
			<button onClick={this.onClick} className="list-group-item">
				<div className="row">
					<div className="col-md-1 col-xs-1">

					</div>
					<div className="col-md-7 col-xs-7">
						<h4>{this.props.model.get("title")} <small> {this.props.model.get("artist")}</small></h4>
					</div>
					<div className="col-md-4 col-xs-4">
					</div>
				</div>
			</button>
	)
	},

	onClick: function(model) {
		this.props.onClick(this.props.model);
	}


});

module.exports = AddTracklistListCellView;