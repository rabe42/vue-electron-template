<template>
    <!-- Standard Vue example. This relies on the v-model binding. -->
    <div class="w3-container">
        <h1>Message: {{ message }}</h1>
        <input v-model="message">
        <input type="button" value="submit" v-if="message" @click="sayHello">

        <!-- Apply custom element -->
        <hello></hello>
    </div>
</template>

<script>
import hello from '../hello/hello'

export default {
    data () {
        return {
            message: 'Hello Vue!'
        }
    },
    methods: {
        sayHello: function() {
            alert("Submitting: '" + this.message + "'")
        }
    },
    components: {
        hello
    }
}
</script>