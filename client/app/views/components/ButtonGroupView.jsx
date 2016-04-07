var React = require("react");

module.exports = React.createClass({

	render: function() {

		var methods = this.props.methods;

		if(this.props.editing){
			return (

				<div className="btn-group pull-right">
					<button onClick={methods.cancel} className="btn btn-default"> Cancel </button>
					<button onClick={methods.save} className="btn btn-default"> Save </button>
				</div>
			)
		} else {
			return (
				<div className="btn-group pull-right">
					<button onClick={methods.edit} className="btn btn-default pull-right"> Edit </button>
				</div>
				)
		}
	},

});
