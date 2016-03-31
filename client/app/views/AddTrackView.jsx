var React = require("react");


module.exports = React.createClass({

	render: function(){
		
		var style = "padding:0;margin:0";
		return(
			<form className="form-horizontal">
				<div className="form-group col-xs-6" style={{style}}>
					<label  className="col-xs-4 control-label">Title</label>
					<div className="col-xs-8">
						<input type="text" className="form-control" placeholder="Title"/>
				</div>
				</div>
					<div className="form-group col-xs-6">
						<label className="col-xs-4 control-label">Artist</label>
						<div className="col-xs-8">
						<input type="text" className="form-control" placeholder="Artist" />
					</div>
				</div>
				<div className="form-group col-xs-6">
					<label  className="col-xs-4 control-label">Length</label>
					<div className="col-xs-8">
						<input type="text" className="form-control" placeholder="Length"/>
				</div>
				</div>
					<div className="form-group col-xs-6">
						<label className="col-xs-4 control-label">Label</label>
						<div className="col-xs-8">
						<input type="text" className="form-control" placeholder="Label" />
					</div>
				</div>
				<div className="form-group col-xs-6">
					<label  className="col-xs-4 control-label">Genre</label>
					<div className="col-xs-8">
						<input type="text" className="form-control" placeholder="Genre"/>
				</div>
				</div>
					<div className="form-group col-xs-6">
						<label className="col-xs-4 control-label">Year</label>
						<div className="col-xs-8">
						<input type="text" className="form-control" placeholder="Year" />
					</div>
				</div>
			</form>
		)
	}
});