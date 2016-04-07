var React = require("react");

//VIEWS:
var InfoCellView = require("./InfoCellView.jsx");
var ButtonGroupView = require("../components/ButtonGroupView.jsx");

module.exports = React.createClass({

	propTypes: {
		model: React.PropTypes.object.isRequired, //A Backbone-Model
		keys: React.PropTypes.array.isRequired
	},

	getInitialState: function() {
		return {
			editing: false,
			editModel: this.props.model.clone()
		}
	},

	render: function(){ 
		var _this = this;
		var methods = {
			edit: this.edit,
			save: this.save,
			cancel: this.cancel
		}


		return(			
			<div className="panel panel-default">
				<div className="panel-heading clearfix">
					<h3 className="panel-title pull-left" style={{fontSize: "28px"}}> {this.props.title} </h3>
					<ButtonGroupView methods={methods} editing={this.state.editing} />
				</div>

				<div className="panel-body">
					<form className="form-horizontal">
						{this.props.keys.map(function(key){
							return <InfoCellView model={_this.state.editModel} key={key} keyName={key} editing={_this.state.editing}/>
						})}
					</form>
				</div>
			</div>
		)
	},

	edit: function() {
		this.setState({editing: true});
	},
	cancel: function () {
		this.state.editModel.set(this.props.model.toJSON());
		this.setState({
			editing: false
		});
	},
	save: function() {

		if(this.props.model.save(this.state.editModel.attributes)){
			this.setState({
				editing: false
			})
		} else {

		}


	},


	submit: function(e){
		e.preventDefault();
		console.log(this.props.model.toJSON());
		this.props.model.save();
	},
});