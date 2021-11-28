<template>
	<div class="bg-light p-4 col-lg-8 m-auto">
		<b-table hover :items="users" :fields="fields">
			<template #cell(action)="data">
				<div class="d-flex justify-content-around">

					<b-button size="sm" variant="outline-success" @click="editUser(data.item)">Edit</b-button>
					<b-button size="sm" variant="outline-warning" @click="deleteUser(data.item)">Delete</b-button>
				</div>

			</template>
			<template #cell(updated)="data">

				<span v-if="data.item.updated">{{ data.item.updated | moment("dddd, MMMM, h:mm:ss a") }}</span>
			</template>
			<template #cell(created_at)="data">
				<span >{{ data.item.created_at | moment("dddd, MMMM, h:mm:ss a") }}</span>
			</template>
		</b-table>
	</div>
</template>

<script>
  export default {
    name: "Users",
    data() {
      return {
        fields: ['id', 'username', 'email', 'created_at', 'updated', 'action'],
      }
    },
    computed: {
      users() {
        return this.$store.getters.getUsers
      }
    },
    methods: {
      deleteUser(val) {
        this.$store.dispatch("DELETE_USER", val.id)
      },
      editUser(val) {
        this.$store.commit('setUser', val)
        this.$router.push({path: `/user/${val.id}`, params: {id: val.id}})
      }
    }
  }
</script>

<style scoped>

</style>