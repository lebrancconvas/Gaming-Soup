<template>
  <div>
    <div>
      <p class="text-center h1" id="topic">Register</p>
      <br><hr><br>
      <div class="input-group mb-3" id="username">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Username</span>
        </div>
        <input
          type="text"
          class="form-control"
          v-model="username"
          placeholder="Enter Your Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="input-group mb-3" id="password">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Password</span>
        </div>
        <input
          type="password"
          class="form-control"
          v-model="password"
          placeholder="Enter Your Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="input-group mb-3" id="confirmpassword">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Confirm Password</span>
        </div>
        <input
          type="password"
          class="form-control"
          v-model="confirmpassword"
          placeholder="Confirm Your Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
      </div>
      <input type="submit" class="btn btn-warning" @click="clicksubmit" value="Submit">
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: "Register",
    setup() {
        let password = ref("")
        let confirmpassword = ref("")
        let clicksubmit = () => {
            if(password.value !== confirmpassword.value) {
                alert("Password can't confirm.")
            }
        }
        return {password, confirmpassword, clicksubmit}
    }
}
</script>

<style scoped>
#topic {
    margin: 20px 0px 0px 0px;
}
#username, #password, #confirmpassword, hr {
    width: 50%;
    margin: 0 auto;
}
</style>