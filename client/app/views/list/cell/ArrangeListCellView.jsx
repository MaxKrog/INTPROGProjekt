var React = require("react");

var ArrangeListCellView = React.createClass({
    
    propTypes: {
        model: React.PropTypes.object.isRequired //Backbone.Model:
    },
    
    render: function(){
        var model = this.props.model;
        var canMoveUp = model.indexInCollection() > 0 ? true : false;
        var canMoveDown = model.indexInCollection() + 1 < model.collection.length ? true : false;
        var style = {
            cursor: "pointer",
            fontSize: "20px"
        };

        return (
            <div>
                <div className="list-group-item" >
                    <div className="row">
                        <div className="col-md-1 col-xs-1">
                            <div className="row">
                                <div className="col-md-1 col-xs-1" onClick={this.moveUp}>
                                    <span className={canMoveUp ? "glyphicon glyphicon-menu-up" : ""}
                                        style={style}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-1 col-xs-1" onClick={this.moveDown}>
                                    <span className={canMoveDown ? "glyphicon glyphicon-menu-down" : ""}
                                        style={style}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-xs-9" style={{borderBottom:"5px"}}>
                            <h4>{this.props.model.get("title")} <small> {this.props.model.get("artist")}</small></h4>
                        </div>
                        <div className="col-md-2 col-xs-2">
                            <a onClick={this.remove}>
                                <h4 className="remove text-center">
                                    <span className="glyphicon glyphicon-remove"/>
                                </h4>
                            </a>
                        </div>
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