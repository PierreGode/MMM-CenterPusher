Module.register("MMM-CenterPusher", {
    // Override dom generator.
    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.className = "center-pusher";
        return wrapper;
    },
});
