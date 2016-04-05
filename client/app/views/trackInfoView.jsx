
var AppearsInRow = React.createClass({

	render: function(){
		
		return (
			<tr>
				<td>{this.props.name}</td>
			</tr>
		);
	}
});

// not finished
var TrackInfoCell = React.createClass({

	render: function(){

		return (
			<h4>{this.props.field}:</h4> {this.props.value}
		);
	}
});


// not finished, implementation unclear
var TrackInfo = React.createClass({

	render: function(){
		var infos = [];

		this.props.trackinfo.forEach(function(field){
			infos.push(field);
		});

		return (
			<TrackInfoCell />
		)
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
});