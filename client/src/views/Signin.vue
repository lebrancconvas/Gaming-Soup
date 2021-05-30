<template>
    <div>
       <h1>Sign in</h1>
       <br><hr><br>
       <form>
            <div class="input-group mb-3" id="username">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Username</span>
                </div>
                <input
                    type="text"
                    class="form-control"
                    v-model="usernamedata"
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
                    v-model="passworddata"
                    placeholder="Enter Your Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                />
            </div>
            <input type="submit" @click="clicksubmit" class="btn btn-primary" value="Submit" />
        </form>
        </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: "Signin",
    setup() {
        let usernamedata = ref("")
        let passworddata = ref("")
        let clicksubmit = () => {
            if(usernamedata.value !== "" && passworddata.value){
                alert(`Username: ${usernamedata.value}\nPassword: ${passworddata.value}`)
            } else {
                alert("Please Enter Your Username and/or Your Password.") 
            }
        } 
        return { clicksubmit, usernamedata, passworddata }
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
#username, #password {
    width: 50%;
    margin: 0 auto;
}
</style>