<template>
    <div id="homeForm">
        <form id="loginForm" method="post" action="/login">
            <input type="text" class="form-control" name="loginForm[email]">
            <input type="text" class="form-control" name="loginForm[password]">
            <p><button type="submit" class="btn btn-primary btn-lg" name="loginForm[login]">Login</button></p>
        </form>
        <form id="registerForm" method="post" action="/register">
            <input type="email" class="form-control" name="registrationForm[email]">
            <input type="password" class="form-control" name="registrationForm[password]">
            <input type="password" class="form-control" name="registrationForm[password2]">
            <p><button type="submit" class="btn btn-primary btn-lg" name="registrationForm[register]">Register</button></p>
        </form>
    </div>
</template>

<script>

import Login from '@/core/Login.js'
import Registration from '@/core/Registration.js'

export default {
  name: 'HomeForm',
  props: {
      data: 'sdfsdf'
  },
  data: () => ({
      loginForm: new Login
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input[type="text"], input[type="password"],  input[type="email"]{
    background-color: #efefef;
}
</style>
