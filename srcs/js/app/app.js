import hello from '../hello/hello'

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
    },
    methods: {
        sayHello: () => {
            alert("Submitting " + app.message)
        }
    }
})
