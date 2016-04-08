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
	        	<div className="row">
	        		<div className="col-md-3 col-md-offset-2">
						<div className="panel panel-default">

							<InfoView model={model} editing={this.state.editing} />
							<div className="panel-footer">
								<button type="button" className="btn btn-primary btn-block">Add Tracks</button>
								<ButtonGroupView methods={methods} editing={this.state.editing}  />
							</div>
							
						</div>
	        		</div>
	        		<div className="col-md-5">
						<ListView collection={model.tracks} editing={this.state.editing}/>
	        		</div>
	        	</div>
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

		console.log(this.props.model);
		console.log(this.state.editModel);
		
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