Module.register("MMM-CenterPusher", {
    // Define module defaults
    defaults: {
        width: "50%",
        height: "100px",
        marginLeft: "10%",
        marginRight: "10%",
        backgroundColor: "#008000" 
    },

    // Override dom generator
    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.className = "center-pusher";
        wrapper.style.width = this.config.width;
        wrapper.style.height = this.config.height;
        wrapper.style.backgroundColor = this.config.backgroundColor;
        wrapper.style.marginLeft = this.config.marginLeft;
        wrapper.style.marginRight = this.config.marginRight;
        return wrapper;
    },
});
