var React = require("react");

module.exports = React.createClass({

	render: function() {

		var methods = this.props.methods;

		if(this.props.editing){
			return (

				<div className="btn-group btn-group-justified">
					<a onClick={methods.cancel} className="btn btn-warning"> Cancel </a>
					<a onClick={methods.save} className="btn btn-success"> Save </a>
					<a onClick={methods.delete} className="btn btn-danger"> Delete </a>
				</div>
			)
		} else {
			return (
				<div className="btn-group btn-group-justified">
					<a onClick={methods.edit} className="btn btn-default "> Edit </a>
				</div>
				)
		}
	},

});
