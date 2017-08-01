import Vue from 'vue'
import hello from '../hello/hello'

let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
    },
    methods: {
        sayHello: () => {
            alert("Submitting: '" + app.message + "'")
        }
    },
    components: {
        hello
    }
})
