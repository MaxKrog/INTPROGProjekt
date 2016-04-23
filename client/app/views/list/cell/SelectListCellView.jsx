var React = require("react");

var SelectListCellView = React.createClass({
    
    render: function() {
        return (
            <button className="list-group-item">
                <div className="row">
                    <div className="col-md-1 col-xs-1">
                        <h4><span className="glyphicon glyphicon-plus" style={{color:"green"}}/></h4>
                    </div>
                    <div className="col-md-7 col-xs-7">
                        <h4>{this.props.model.get("title")} <small>  {this.props.model.get("artist")}</small></h4>
                    </div>
                    <div className="col-md-4 col-xs-4">

                    </div>
                </div>
            </button>
        )
    }
});

module.exports = SelectListCellView;