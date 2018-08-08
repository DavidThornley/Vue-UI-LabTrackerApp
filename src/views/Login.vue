<template>
<div class="main">
    <div class="logo">
      <img class="zipcode" src="../assets/logo2.png"/>
    </div>
      <div class="magiclogin">
        <h1>Lab Tracker</h1>
        <div id="login">
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <br />
        <input type="text" name="email" v-model="input.email" placeholder="Email" />
        <br/>
        <button type="button" v-on:click="login(),getUser();">Login</button>
    </div>
        </div>
        <br>
      <div class= "git-started">
          Don't Have A Git.ZipCode.Rocks Account? <a href="https://git.zipcode.rocks">Git Started</a> Making Projects!
      </div>
</div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      input: {
        username: '',
        email: '',
      },
    };
  },
  methods: {
    getUser() {
      this.$http.get('https://zip-portal.herokuapp.com/user/'+this.input.username).then((result) => {
      this.$parent.user = result.body;
      console.log(this.$parent.user)
    }, (error) => {
      console.error(error);
    });
    login();
    },
    login() {
      if (this.input.username !== '' && this.input.email !== '') {
        if (this.input.username === this.$parent.user.username &&
        this.input.email === this.$parent.user.email) {
          this.$emit('authenticated', true);
          this.$router.replace({ name: 'user' });
        } else {
          console.log('The username and / or email is incorrect');
        }
      } else {
        console.log('A username and email must be present');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.magiclogin {
    position: static;
    padding: 100px;
    /*text-align: center;
    vertical-align: middle;
    line-height: 375px; */
    border: 4px solid #114458;
    border-radius: 8px;
}
.git-started {
  text-align: center;
  position: static;
  bottom: 75px;
}
.logo{
   vertical-align: middle;
  height: 30px;
  padding-right: 75px;
}
 #login {
        display:block;
        width: 300px;
        font-size: 20px;
        color: #114458;
        background-color: #30A071;
        border: 4px solid #114458;
        border-radius: 8px;
        margin: auto;
        margin-top: 100px;
        text-align: center;
        line-height: 50px;
        padding-top: 15px;
    }
 input[type=text] {
   border: 2px solid #114458;
   border-radius: 8px; 
    -webkit-box-shadow: 
      inset 0 0 8px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
    -moz-box-shadow: 
      inset 0 0 8px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
    box-shadow: 
      inset 0 0 8px  rgba(0,0,0,0.1),
            0 0 16px rgba(0,0,0,0.1); 
    padding: 15px;
    background: rgba(255,255,255,0.5);
    margin: 0 0 10px 0;
 }
 button {
    border: 2px solid #114458;
    border-radius: 2px;
    background: lightgray;
    color: #114458;
    font: bold 11px 'Trebuchet MS';
    padding: 4px;
    cursor: auto;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
  }
  h1 {
    color: #114458;
    font-size: 50px;
    font: bold 'Trebuchet MS';
    padding-top: 25px;
    text-align: center;
  }
</style>
