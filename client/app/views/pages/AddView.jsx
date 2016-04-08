var React = require("react");

//VIEWS:
var ButtonGroupView = require("../components/ButtonGroupView.jsx");
var InfoView = require("../info/InfoView.jsx");
var ListView = require("../list/ListView.jsx");


var TrackModel = require("../../models/TrackModel.js");
var TracklistModel = require("../../models/TracklistModel.js");

module.exports = React.createClass({

	render: function(){ 


		var model = new TrackModel();
		return(		
			<div>	
	        	<div className="row">
	        		<div className="col-md-8 col-md-offset-2">
	        			<div className="panel-body">
	        				<h3>What would you like to add?</h3>
	        				<div className="col-xs-6">
	        					<button type="button" className="btn btn-default btn-block">Track</button>
	        				</div>
	        				<div className="col-xs-6">
	        					<button type="button" className="btn btn-default btn-block">Tracklist</button>
	        				</div>
	        			</div>
	        			

	        			<div className="row">
	        				<InfoView model={model} editing={true} />
	        			</div>
		        		<div className="panel panel-default">
		        			<div className="panel-footer">
								
							</div>
						</div>
	        			
	        		</div>
	        	</div>
	        </div>
		)
	}
});