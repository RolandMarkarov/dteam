<template>
	<div class="home">
		<Users v-if="!newUser"/>


		<form-component v-if="newUser" @newUser="switchNewUser">
			<b-button @click="newUser = false">Cancel</b-button>
		</form-component>

		<b-button @click="newUser = true" v-if="!newUser"> Create New User</b-button>
	</div>
</template>

<script>
  // @ is an alias to /src
  import FormComponent from "../components/FormComponent";
  import Users from "./Users";

  export default {
    name: 'Home',
    components: {
      Users,
      FormComponent
    },
    data() {
      return {
        newUser: false
      }
    },
    methods: {
      switchNewUser(val) {
        this.newUser = val
        console.log(val)
      }
    }
  }
</script>
