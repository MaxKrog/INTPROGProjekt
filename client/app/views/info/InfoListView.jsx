var React = require("react");

//VIEWS:
var InfoListItemView = require("./InfoListItemView.jsx");

module.exports = React.createClass({

	propTypes: {
		collection: React.PropTypes.object.isRequired, //A Backbone-Collection
		title: React.PropTypes.string.isRequired
	},

	componentWillMount: function() {
		var _this = this;
		this.props.collection.on("all", function() {
			_this.forceUpdate();
		}, this);
	},

	render: function(){

		var rows = this.props.collection.models.map(function(model){
			return <InfoListItemView model={model} key={model.get("id")} />
		})

		return(
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 style={{margin: "10px"}}> {this.props.title} </h3>
				</div>
				<div className="list-group">
					{rows}
				</div>
			</div>
		)
	}
});