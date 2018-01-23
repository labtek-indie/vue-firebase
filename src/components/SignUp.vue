<template>
  <div class="SignUp">
      <p>Create new Account</p>
      <input type="text" placeholder="Email" v-model="email"><br>
      <input type="password" placeholder="Password" v-model="password"><br>
      <button v-on:click="signUp"> Sign Up </button>
      <span> or GO BACK TO <router-link to="/login">LOGIN</router-link> PAGE!!!</span>
  </div>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase'
export default {
  name: 'signUp',
  data: function () {
      return{
          email: '',
          password: ''
      }
  },
  methods:{
      signUp: function () {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
              function (user) {
                alert('your account has been created')
              },
              function (err) {
                alert('Oops, '+ err.message)
              }
          );
      }
  }
}
</script>

<style scoped>
    .signUp {
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button {
        margin-top: 10px;
        width: 10%;
        cursor: pointer;
    }
    span {
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>