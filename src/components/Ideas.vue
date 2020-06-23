<template >
	<div class="ideas mt-5" >
		<div class="row" >

			<div class="col-4" >
				<h3 >
					<strong >Courses</strong >
				</h3 >
				<draggable class="ideas"
				           group="ideas"
				           v-model="courses" >
					<Idea :item="course"
					      :key="course.id"
					      class="pt-2"
					      v-for="course in courses" />
				</draggable >
			</div >
			<div class="col-4" >
				<h3 >
					<strong >Idea's</strong >
				</h3 >
				<draggable class="ideas"
				           group="ideas"
				           v-model="allIdeas" >
					<Idea :item="idea"
					      :key="idea.id"
					      class="pt-2"
					      v-for="idea in allIdeas" />
				</draggable >
			</div >
			<div class="col-4" >
				<h3 >
					<strong >Papers Work</strong >
				</h3 >
				<draggable class="ideas"
				           group="ideas"
				           v-model="paperWork" >
					<Idea :item="pw"
					      :key="pw.id"
					      class="pt-2"
					      v-for="pw in paperWork" />
				</draggable >
			</div >
		</div >
	</div >
</template >

<script >
    import draggable from 'vuedraggable';
    import Idea from './Idea';

    export default {
        components: {
            draggable,
            Idea,
        },
        computed: {
            allIdeas: {
                // On récupère le getter allIdeas pour faire le v-for
                get() {
                    return this.$store.getters.allIdeas;
                },
                // Permet de modifier l'ordre des items
                set(value) {
                    console.log(value);
                    this.$store.dispatch('saveIdeasOrdering', value);
                },
            },
            courses: {
                get() {
                    return this.$store.getters.courses;
                },
                set(value) {
                    this.$store.dispatch('saveCoursesOrdering', value);
                },
            },
            paperWork: {
                get() {
                    return this.$store.getters.paperWork;
                },
                set(value) {
                    this.$store.dispatch('savePWOrdering', value);
                },
            },
        },
    };
</script >
<style >

</style >
