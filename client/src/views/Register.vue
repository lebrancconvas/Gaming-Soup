<template>
    <div>
        <form>
           <h2>Register</h2>
           <div class="input-group mb-3">
               <div class="input-group-prepend">
                   <span class="input-group-prepend" id="basic-addon1">
                        Username
                   </span> 
                   <input type="text" class="form-control" placeholder="Enter Your Username" aria-label="Username" aria-describedby="basic-addon1">
               </div> 
           </div>
           <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-prepend" id="basic-addon1">
                        Password
                    </span>
                    <input type="password" class="form-control" placeholder="Enter Your Password" aria-label="Password" aria-describedby="basic-addon1">
                </div>
           </div>
           <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-prepend">
                        Confirm Password 
                    </span>
                    <input type="password" class="form-control" placeholder="Confirm Your Password" aria-label="Password" aria-describedby="basic-addon1">
                </div>
           </div>     
        </form> 
    </div>
</template>

<script>
export default {
    name: "Register"
}
</script>

<style scoped>

</style>