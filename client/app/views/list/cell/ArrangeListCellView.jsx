var React = require("react");

var ArrangeListCellView = React.createClass({
    
    propTypes: {
        model: React.PropTypes.object.isRequired //Backbone.Model:
    },
    
    render: function(){
        var model = this.props.model;
        var canMoveUp = model.indexInCollection() > 0 ? true : false;
        var canMoveDown = model.indexInCollection() + 1 < model.collection.length ? true : false;
        return (
            <div className="list-group-item" >
                <div className="row">
                    <div className="col-md-1 col-xs-1" onClick={this.moveUp}>
                        <h4> {canMoveUp ? "UP" : ""} </h4>
                    </div>
                    <div className="col-md-1 col-xs-1" onClick={this.moveDown}>
                        <h4> {canMoveDown ? "DOWN" : ""}</h4>
                    </div>
                    <div className="col-md-6 col-xs-6">
                        <h4>{this.props.model.get("title")} <small> {this.props.model.get("artist")}</small></h4>
                    </div>
                    <div className="col-md-4 col-xs-4">
                        <img onClick={this.remove} className="pull-right" src="./img/icons/delete_x.png" width="32" height="32"/>
                    </div>
                </div>
            </div>
        );
    },
    
    moveUp: function(){
        this.props.model.collection.moveUp(this.props.model)    
    },
    
    moveDown: function() {
        this.props.model.collection.moveDown(this.props.model);
    },
    
    remove: function(){
        this.props.model.collection.remove(this.props.model);
    }
});

module.exports = ArrangeListCellView;