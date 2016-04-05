var React = require("react");


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
			<h4>{this.props.field}:{this.props.value}</h4> 
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

module.exports = React.createClass({
	
	render: function(){
		var rows = [];

		this.props.tracklists.forEach(function(tracklist) {
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
});