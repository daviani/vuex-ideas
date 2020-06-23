<template >
	<div class="IdeaCreate" >
		<form @submit.prevent="create" >
			<div class="form-group row" >
				<label class="col-form-label"
				       for="idea-title" >
					:: Ideas's Title ::
				</label >
				<div class="col-10" >
					<input class="form-control"
					       id="idea-title"
					       placeholder="Type your Idea"
					       type="text"
					       v-model="title" >
				</div >
			</div >

			<button class="btn"
			        type="submit" >
				<strong >Create</strong >
			</button >
		</form >
	</div >
</template >

<script >
    export default {
        name: 'IdeaCreate',
        data() {
            return {
                title: '',
            };
        },
        methods: {
            create() {
                const idea = {
                    createAt: new Date(),
                    title: this.title,
                };
                // Au lieux de commit une action on dispatch une actionb
                // this.$store.commit('CREATE_IDEAS', idea);
                this.$store.dispatch('createIdea', idea);
                this.title = '';
            },
        },
    };
</script >
<style >


</style >
