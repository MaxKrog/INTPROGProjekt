var React = require("react");
var Backbone = require("backbone");

module.exports = React.createClass({

	propTypes: {
		model: React.PropTypes.object.isRequired, //A Backbone-Model
		keyName: React.PropTypes.string.isRequired,
		editing: React.PropTypes.bool.isRequired
	},

	componentWillMount: function(){
		console.log("MOUNTED!");

		var _this = this;
		this.props.model.on("change:" + this.props.keyName, function(){
			console.log("Changed");
			_this.forceUpdate()
		});
	},

	render: function() {

		var model = this.props.model;
		var keyName = this.props.keyName;

		var value = this.props.model.get(this.props.keyName);
		if( this.props.editing) {
			var text = <input value={value} onChange={this.onChange} type="text" className="form-control" placeholder={"Enter the " + keyName + " here."}/>
		} else {
			var text = <p> {value} </p> 
		}

		return (
			<div className="form-group col-xs-6">
				<label  className="col-xs-4 control-label">{capitalize(keyName)}</label>
				<div className="col-xs-8">
					{text}
				</div>
			</div>
		)
	},

	onChange: function(event) {
		this.props.model.set(this.props.keyName, event.target.value);
	},


});



//HELPER FUNCTIONS
function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}