// Make the resources of the front end available.
import "file-loader?name=[name].[ext]!../../index.html"

// Integrates the style sheet directly into the dom.
import "w3-css/w3.css"
import "font-awesome/css/font-awesome.min.css"

// Import the framework and the app
import Vue from "vue"
import app from "./app/app"
import {logger} from "./logger"

/**
 * The root of the vue application will be anchored at the #app id in the index.html file.
 */
new Vue({
    el: "#app",
    components: {
        app
    }
})

logger.info("UI initialized.")
