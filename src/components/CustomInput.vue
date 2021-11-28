<template>
	<b-form-group
		:label="label"
	>
		<b-form-input :type="type" v-if="type === 'text'"
									:placeholder="placeholder || label"
									:value="value"
									@input="updateInput"/>

		<b-form-input :type="type" v-if="type === 'email'"
									:placeholder="placeholder || label"
									:value="value"
									@input="updateInput"/>

		<b-form-input :type="type" v-if="type === 'password'"
									:placeholder="placeholder || label"
									:value="value"
									@input="updateInput"/>

		<b-form-input :type="type" v-if="type === 'number'"
									:placeholder="placeholder || label"
									:min="min"
									:max="max"
									:value="value"
									@input="updateInput"/>

		<b-form-datepicker id="example-datepicker" class="mb-2"
											 @input="updateInput"
											 v-if="type === 'datepicker'"></b-form-datepicker>
	</b-form-group>
</template>

<script>
  export default {
    props: {
      value:{},
      type: {
        type: String,
        default: 'text'
      },
      label: {
        type: String,
        default: 'Label Required...'
      },
      placeholder: {
        type: String,
        default: ''
      },
    },
    name: "CustomInput",
    methods: {
      updateInput(val) {
        this.$emit('input', val)
      },
    }
  }
</script>

<style scoped>

</style>