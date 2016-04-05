var React = require("react");

var FrontTrackListRow = React.createClass({

	render: function(){
		
		return (
			<tr>
				<td>{this.props.name}</td>
				<td></td>
			</tr>
		);
	}
});

module.exports =  React.createClass({

	componentWillMount: function() {
		var _this = this;
		this.props.tracklists.on("all", function() {
			_this.forceUpdate();
		}, this);
	},
	
	render: function(){
		var rows = [];

		this.props.tracklists.models.forEach(function(tracklist) {
			rows.push(<FrontTrackListRow name={tracklist.get("title")} />);
		});

		return (

			<table>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
})