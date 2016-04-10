var React = require("react");

module.exports = React.createClass({

	render: function() {

		var methods = this.props.methods;

		if(this.props.editing){
			return (

				<div className="btn-group">
					<button onClick={methods.cancel} className="btn btn-default"> Cancel </button>
					<button onClick={methods.save} className="btn btn-default"> Save </button>
					<button onClick={methods.delete} className="btn btn-danger"> Delete </button>
				</div>
			)
		} else {
			return (
				<div className="btn-group ">
					<button onClick={methods.edit} className="btn btn-default "> Edit </button>
				</div>
				)
		}
	},

});
