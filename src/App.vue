
<template>
<div id="app">
        <router-view @authenticated="setAuthenticated"> 
           <div id="nav">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()"
            replace>Logout</router-link>
        </div>
        </router-view>
    </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      authenticated: false,
    user: {},
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: 'login' });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
};
</script>

<style>
html,body{
  height: 100%;
  background: #30A071;
  background-attachment: fixed;
}
.main{
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 500px;
  max-height: 80%;
  border-radius: 6px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>

