<template>
  <div class="my-components">
    <h1>this is my first component</h1>
    <p>my name is {{ name }}</p>
  </div>
</template>

<script>
  export default {
    name: 'myComponents',
    data () {
      return {
        name: 'Edward'
      }
    }

  }

</script>

<style>

</style>
