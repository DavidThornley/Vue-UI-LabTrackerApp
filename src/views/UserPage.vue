<template>
<div class="userPage">
    <header>
      <nav>
        <div>
        <ul class="nav-list">
          <li class="nav-item">Zip-Portal <img class="ziplogo" src="../assets/nav-logo.png"/> </li>
        <li class="nav-2"> Logout<router-link to="/"><img class="logout-icon" src="../assets/logout.png"/></router-link>
        </li>
        <li class="message">                                Labs for {{ this.$parent.user.username }}</li>
        </ul>
        </div>
      </nav>
    </header>
    <br>
    <br>
<div class="main">
    <div class="Assignments"> 
      <div class= "inProgress"> YOU'RE WORKING ON IT
       <div class="InProgress">
         <ul id ="In_Progress">
             <li v-for="assignment in assignments" :key="assignment.id">
                <a :href= assignment.assignmentUrl> {{ assignment.parent.name }} </a>   <div class="assigname">{{ assignment.assigned_on }}</div>
               </li>
           </ul>
       </div>
      </div>
      <div class="done"> YOU'RE DONE
        <div class="Completed">
           <ul id ="Completed_Id">
             <li v-for="assignment in completed" :key="assignment.id" >
                <a :href= assignment.assignmentUrl> {{ assignment.parent.name }} </a>
               </li>
           </ul>
       </div>
      </div>
    </div>
    <div id="buttonDiv">
    <button type="button" v-on:click="getAssignments(), getPrs();" class="reload">Reload Labs</button>
    </div>
</div>
</div>
</template>

<script>
import VueLink from 'vue-link'

export default {
  components: {
    VueLink
  },
  name: 'UserPage',
  data() {
    return {
      completed: [],
      assignments: [],
    };
  },
  computed: {
   
  },
  methods: {
   getAssignments() {
      this.$http.get('https://zip-portal.herokuapp.com/assignment/'+this.$parent.user.id).then((response) => {
      // get body data
      console.log(response.body);
      this.assignments = response.body;
    }, (response) => { // error callback });
   })
   },
   getPrs() {
    this.$http.get('https://zip-portal.herokuapp.com/pr/'+this.$parent.user.id).then((response)=> {
      console.log(response.body);
      this.completed = response.body;
    }, (response) => {
      // error callback });
    })
   },
  },
  created() {
    this.getPrs(),
    this.getAssignments()
  },
};

</script>

<style scoped>
.Assignments{
    margin: 0 auto;
  width: 1024px;
  min-height: 500px;
  max-height: 80%;
  border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 5px;
    grid-template-rows: 300px;
    grid-row-gap: 5px;
    font-size: 24px;
}
.Assignments ul li {
  font-size: 20px;
  display:inline-flex;
}
.Completed {
    height: 150%;
    width: 502px;
    display: block !important;
    text-align: center !important;
    border: 4px solid #114458;
    border-radius: 8px;
    color: #114458;
    overflow: scroll;
}
.InProgress {
    height: 150%;
     width: 502px;
    text-align: left !important;
   border: 4px solid #114458;
   border-radius: 8px;
   color: #114458;
   overflow: scroll;
}
.assigname {
  text-align: right !important;
}
header {
  background-color: #114458;
  width: 1024px;
  margin: 0 auto;
  border-radius: 6px;
}
header {
  background-color: #114458;
  width: 1084px;
  margin: 0 auto;
  border-radius: 6px;
}
ul {
  color: #114458;
}
li {
  display: inline-table;
  white-space: pre;
  color: #114458;
}
.nav{
  display: table;
}
.nav-item {
  display: inline;
  color: white;
  text-shadow: gray 2px 2px;
  /* padding: 6px 10px; */
  padding-bottom: 5px;
  font-size: 22px;
}
.nav-2 {
  display: inline;
  color: white;
  text-shadow: gray 2px 2px;
  /* padding: 6px 10px; */
  padding-bottom: 5px;
  font-size: 22px;
}
.nav li{
  display: inline;
}
router-link {
  color: white;
  text-shadow: gray 2px 2px;
}
.ziplogo {
  vertical-align: middle;
  height: 30px;
  border-right: 3px solid gray;
  padding-right: 10px;
  padding-left: 5px;
}
.logout-icon {
  vertical-align: middle;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  border-right: 3px solid gray;
}
.message {
position: static;
top: 10px;
text-align: right;
color: white;
text-shadow: gray 2px 2px;
font-size: 36px;
padding-right: 25px;
}
#Completed_Id {
width: 100%;
text-align: left;
list-style-type: disc;
}
.reload {
   border: 2px solid #114458;
    border-radius: 2px;
    background: lightgray;
    color: #114458;
    font: bold 11px 'Trebuchet MS';
    padding: 4px;
    cursor: auto;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    display: flex;
  align-items: center;
  justify-content: center;
}
.done {
  text-align: center;
}
.inProgress {
  text-align: center;
}
</style>
