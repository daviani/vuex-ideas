<template >
	<div class="home" >
		<h1 class="display-3" >Welcom Ideas.io</h1 >
		<hr >
		<div class="container" >
			<IdeaCreate />
			<Ideas />
		</div >
	</div >
</template >
<script >
    // @ is an alias to /src
    import IdeaCreate from '../components/IdeaCreate';
    import Ideas from '../components/Ideas';

    export default {
        name: 'Home',
        components: {
            IdeaCreate,
            Ideas,
        },
    };
</script >
<style >


</style >
