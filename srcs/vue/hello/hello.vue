<!-- An example for an very basic vue component, which works like a HTML component in the application. -->
<template>
    <div class="w3-bar-block w3-center w3-blue w3-hover-indigo">Hello {{ vueMessage }} with webpack!</div>
</template>

<<script>
export default {
  data () {
      return {
          // Component data goes here!
          vueMessage: 'Vue component'
      }
  }
}
</script>