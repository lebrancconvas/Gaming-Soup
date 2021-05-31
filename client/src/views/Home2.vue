<template>
  <div>
    <div class="align-middle">
        <h1>Gaming Soup</h1>
        <br><hr><br>
        <h2>Hello, {{$store.state.username}}</h2>
        <h3>Please Join Our Game</h3>
        <router-link to="/gameplay">
            <button type="button" class="btn btn-primary">Join Game</button>
        </router-link>
        <button @click="change" type="button" class="btn btn-secondary">Test</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home2',
  setup() {
   let change = () => {
     this.$store.dispatch('changeUsername')
   } 
   return {change}
  }
}
</script>

<style scoped>
h1 {
  margin: 20px 0px 0px 0px;
}
hr {
  width: 50%;
  margin: 0 auto;
}
</style>
