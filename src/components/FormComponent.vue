<template>
	<div class="bg-light p-4 col-lg-6 m-auto">
		<b-form>
			<custom-input type="text" label="Username" v-model="username" placeholder="Enter Username..."/>
			<custom-input type="email" label="Email" v-model="email" placeholder="Enter Email..."/>
			<custom-input type="datepicker" label="DOB" v-model="dob" placeholder="Enter DoB..."/>
			<div class="d-flex justify-content-between">
				<slot></slot>
				<b-button @click.prevent="setUserHandler" :disabled="disableButton" variant="primary">Create User</b-button>
			</div>
		</b-form>
	</div>
</template>

<script>
  import CustomInput from "./CustomInput";

  export default {
    name: "FormComponent",
    components: {CustomInput},
    data() {
      return {
        username: "",
        email: "",
        dob: ''
      }
    },
    computed: {
      disableButton() {
        return !(this.username.length && this.email.length && this.dob.length);
      }
    },
    methods: {
      setUserHandler() {
        let created_at = new Date()
        let {username, email, dob} = this.$data
        let id = Date.now()

        let user = {
          username, email, dob, created_at, id
        }
        this.$store.dispatch("SET_USERS", user)
        this.$emit('newUser', false)
      }
    },
  }
</script>

<style scoped>

</style>