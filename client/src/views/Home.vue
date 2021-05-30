<template>
  <div>
    <div class="align-middle">
      <h1>Gaming Soup</h1>
      <br><hr><br>
      <h2>Login to join The Quiz Show</h2>
      <router-link to="/signin">
        <button class="btn btn-success">Sign in</button>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
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
