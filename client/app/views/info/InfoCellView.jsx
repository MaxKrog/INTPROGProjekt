var React = require("react");
var Backbone = require("backbone");

module.exports = React.createClass({

	propTypes: {
		model: React.PropTypes.object.isRequired, //A Backbone-Model
		keyName: React.PropTypes.string.isRequired
	},

	componentWillMount: function(){

	},

	render: function() {

		var keyName = this.props.keyName;
		var value = this.props.model.get(this.props.keyName);

		return (
			<h2><small>{capitalize(keyName)}: </small>{value}</h2>
		)
	}

});



//HELPER FUNCTIONS
function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}