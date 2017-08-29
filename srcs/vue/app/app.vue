<template>
    <!-- Standard Vue example. This relies on the v-model binding. -->
    <div class="w3-container">
        <h1>Message: {{ message }}</h1>
        <input v-model="message"/>
        <a class="w3-button w3-red" v-if="message" @click="sayHello"><i class="fa fa-paper-plane" aria-hidden="true"></i> Submit</a>

        <!-- Apply custom element -->
        <hello></hello>
    </div>
</template>

<script>
import hello from '../hello/hello' // Default Export
import {logger} from '../logger' // Explicit Export

export default {
    data () {
        return {
            message: 'Hello Vue!'
        }
    },
    methods: {
        sayHello: function() {
            alert("Submitting: '" + this.message + "'")
            logger.info("Submitted!")
        }
    },
    components: {
        hello
    }
}
</script>

<style>
    html,body,h1,h2,h3,h4,h5 {font-family: "RobotoDraft", "Roboto", sans-serif;}
    .w3-bar-block .w3-bar-item{padding:16px}
</style>