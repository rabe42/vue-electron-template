// Make the resources of the front end available.
require("file-loader?name=[name].[ext]!../../index.html")

// Integrates the style sheet directly into the dom.
require("w3-css/w3.css")
require("font-awesome/css/font-awesome.min.css")

// Import the framework and the app
import Vue from 'vue'
import app from './app/app'

new Vue({
    el: '#app',
    components: {
        app
    }
})