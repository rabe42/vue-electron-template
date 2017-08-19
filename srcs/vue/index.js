// Make the resources of the front end available.
import 'file-loader?name=[name].[ext]!../../index.html'

// Integrates the style sheet directly into the dom.
import 'w3-css/w3.css'
import 'font-awesome/css/font-awesome.min.css'

// Import the framework and the app
import Vue from 'vue'
import app from './app/app'

new Vue({
    el: '#app',
    components: {
        app
    }
})