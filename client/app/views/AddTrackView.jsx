var React = require("react");

//VIEWS:
var FormInputView = require("./FormInputView.jsx");


module.exports = React.createClass({

	propTypes: {
		model: React.PropTypes.object.isRequired, //A Backbone-Model
		collection: React.PropTypes.object.isRequired, //A Backbone-Collection
		keys: React.PropTypes.array.isRequired
	},
	submit: function(e){
		e.preventDefault();
		console.log(this.props.model.toJSON());
		this.props.collection.create(this.props.model);
	},
	render: function(){
		var _this = this;

		var inputs = this.props.keys.map(function(key){
			return <FormInputView model={_this.props.model} key={key} keyName={key} />
		});

		return(
			<form className="form-horizontal">
				{inputs}

				<button className="btn btn-default" onClick={this.submit}> Submit </button>
			</form>
		)
	}
});