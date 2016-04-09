var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jquery");



module.exports = function(view, collection) {

    console.log(collection);
    return {

        dragStart: function(e) {
            this.dragged = $(e.currentTarget);
            //this.dragged.children().hide();
            this.fromIndex = this.dragged.index();
            console.log(this.fromIndex);
            e.dataTransfer.effectAllowed = 'move';
        },

        dragEnd: function(e){

            console.log(e);
        },

        dragOver: function(e){
            e.preventDefault();
            //this.dragged.style.display = "none";
            this.overIndex = $(e.target).index();
            if(this.fromIndex !== this.overIndex){
                console.log("SWAPPING");
                
                
                collection.swapPlaces(this.fromIndex, this.overIndex);
                this.fromIndex = this.overIndex;
            } 
            view.forceUpdate();


            //console.log(e);
        }
    };
};