var React = require("react");

//VIEWS:
var ButtonGroupView = require("../components/ButtonGroupView.jsx");
var InfoView = require("../info/InfoView.jsx");
var ListView = require("../list/ListView.jsx");


var TrackModel = require("../../models/TrackModel.js");
var TracklistModel = require("../../models/TracklistModel.js");

var TrackCollection = require("../../collections/TrackCollection.js");

module.exports = React.createClass({

	componentWillMount: function(){
		this.state.collection.on("all", this.forceUpdate, this);

	},

	getInitialState: function(){

		var collection = new TrackCollection();
		collection.fetch();

		return ({
			type: "none",
			model: new TrackModel(),
			collection: collection,
			type: "none",
			adding: true,
		})
	},

	render: function(){ 


		var model = new TrackModel();
		return(		
			<div>	
	        	<div className="row">
	        		<div className="col-md-8 col-md-offset-2">
		        		<div className="panel panel-default">

		        			<div className="panel-heading">
		        				<div className="btn-group btn-group-justified">
		        					<a type="button" className="btn btn-default btn-block">Track</a>
		        					<a type="button" className="btn btn-default active btn-block">Tracklist</a>
		        				</div>
		        			</div>
		        			<div className="panel-heading">
		        				<div className="btn-group btn-group-justified">
		        					<a type="button" className="btn btn-default active btn-block">Metadata</a>
		        					<a type="button" className="btn btn-default btn-block">Tracks</a>
		        				</div>
		        			</div>
		        			
							<InfoView model={model} editing={true}>
							</InfoView>
		        			<div className="panel-heading">
		        				<button type="button pull-right" className="btn btn-default">Right</button>
							</div>

		        			<ListView collection={this.state.collection} editing={true} />

		        		</div>
	        		</div>
	        	</div>
	        </div>
		)
	}
});