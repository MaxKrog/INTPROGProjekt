var React = require("react");

//VIEWS:
var ButtonGroupView = require("../components/ButtonGroupView.jsx");
var InfoView = require("../info/InfoView.jsx");
var ListView = require("../list/ListView.jsx");


module.exports = React.createClass({

	propTypes: {
		editing: React.PropTypes.bool.isRequired, 
		isNew: React.PropTypes.bool.isRequired,
		model: React.PropTypes.object.isRequired //A Backbone-Model
	},

	getInitialState: function() {
		return {
			editing: this.props.editing || false,
			editModel: this.props.model.clone()
		}
	},

	render: function(){ 
		var _this = this;
		var methods = {
			edit: this.edit,
			save: this.save,
			cancel: this.cancel
		};
		var keys = ["title", "artist", "genre", "length", "spotify", "soundcloud", "youtube"];

		var model = this.props.model;

		return(		
			<div>	
	        	<div className="row">
	        		<div className="col-md-3 col-md-offset-2">
	        			<div className="row">
							<div className="panel panel-default">
							<div className="panel-body">
								<h2><small>Title:</small> Kakvogel </h2>
								<h2><small>Artist:</small> Solomun </h2>
								<h2><small>Genre:</small> Tech House</h2>
								<h2><small>Length:</small> 8:05</h2>
							</div>
							<div className="panel-footer">
								<ButtonGroupView methods={methods} editing={this.state.editing}  />
							</div>
							</div>
	        				
	        			</div>
	        		</div>
	        		<div className="col-md-5">
	        			<ListView collection={model.get("tracks")} />
	        		</div>
	        	</div>
	        </div>
		)
	},

	edit: function() {
		this.setState({editing: true});
	},

	cancel: function () {
		if( this.props.model.isNew()){
			console.log("SHOULD BACK TO LATEST URL");
		} else {
			this.state.editModel.set(this.props.model.attributes);
			this.setState({
				editing: false
			});
		}
		
	},

	save: function() {

		if(this.props.model.save(this.state.editModel.attributes)){
			this.setState({
				editing: false
			})
		} else {

		}
	}
});