import hello from '../hello/hello.vue'

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
    },
    methods: {
        sayHello: () => {
            alert("Submitting " + app.message)
        }
    },
    components: {
        hello
    }
})
