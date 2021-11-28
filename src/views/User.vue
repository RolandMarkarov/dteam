<template>
	<div class="about">
		<h1>This is an about page</h1>
		<b-form @submit.prevent="updateUser">
			<custom-input type="text" label="Username" v-model="user.username"/>
			<custom-input type="email" label="Email" v-model="user.email"/>
			<b-button type="submit">Update</b-button>
		</b-form>
	</div>
</template>
<script>
  import FormComponent from "../components/FormComponent";
  import CustomInput from "../components/CustomInput";

  export default {
    components: {CustomInput, FormComponent},
    computed: {
      user() {
        return this.$store.getters.getUser
      }
    },
    methods: {
      updateUser() {
        this.user.updated = new Date()
				this.$store.dispatch('UPDATE_USER', this.user)
        this.$router.push('/')
      }
    }
  }
</script>