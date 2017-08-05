// Make the resources of the front end available.
require("file-loader?name=[name].[ext]!../../index.html")
require("file-loader?name=[name].[ext]!w3-css/w3.css")
require("font-awesome-webpack")
//require("file-loader?name=[name].[ext]!")

// Import the framework and the app
import Vue from 'vue'
import app from './app/app'

new Vue({
    el: '#app',
    components: {
        app
    }
})