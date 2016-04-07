var React = require("react");

//VIEWS:
var InfoCellView = require("./InfoCellView.jsx");
var ButtonGroupView = require("../components/ButtonGroupView.jsx");

var InfoView = React.createClass({

	propTypes: {
		model: React.PropTypes.object.isRequired, //A Backbone-Model
		keys: React.PropTypes.array.isRequired,
		editing: React.PropTypes.bool.isRequired
	},

	getInitialState: function() {
		return {};
	},

	render: function(){ 
		var _this = this;

		return(			
			<form className="form-horizontal">
				{this.props.keys.map(function(key){
					return <InfoCellView model={_this.props.model} key={key} keyName={key} editing={_this.props.editing}/>
				})}
			</form>
		)
	}
});

module.exports = InfoView;