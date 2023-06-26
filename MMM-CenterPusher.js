Module.register("MMM-CenterPusher", {
    // Define module defaults
    defaults: {
        width: "50%",
        height: "100px",
        backgroundColor: "#000000",
        marginLeft: "10%",
        marginRight: "10%"
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

        // Add some visible content
        var content = document.createElement("p");
        content.style.color = "#FFFFFF";
        content.innerText = "";
        wrapper.appendChild(content);

        return wrapper;
    },
});
