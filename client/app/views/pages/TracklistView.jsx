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

		var model = this.state.editing ? this.state.editModel : this.props.model;

		return(		
			<div>	
	        	<div className="row">
	        		<div className="col-md-3 col-md-offset-2">
	        				
	        		</div>
	        		<div className="col-md-5">
	        		<div className="panel panel-default">
							<InfoView model={model} editing={this.state.editing} />
							<div className="panel-footer">
								<ButtonGroupView methods={methods} editing={this.state.editing}  />
							</div>
							<ListView collection={model.get("tracks")} title={"hejsan"} editing={this.state.editing}/>
						</div>
	        			
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
			this.state.editModel.set(this.props.model.attributes);
			this.setState({
				editing: false
			});
		}
		
	},

	save: function() {
		var _this = this;
		this.props.model.save(this.state.editModel.attributes).done(function(){
			console.log("Saved!");
			_this.setState({
				editing: false
			});
		})
	}
});