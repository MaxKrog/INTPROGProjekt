
var TrackListRow = React.createClass({

	render: function(){
		
		return (
			<tr>
				<td>{icon}</td>
				<td>{this.props.name}</td>
			</tr>
		);
	}
});

var TrackListTable = React.createClass({
	
	render: function(){
		var rows = [];

		this.props.tracklists.forEach(function(tracklist) {
			rows.push(<FrontTrackListRow name={tracklist.name} />);
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