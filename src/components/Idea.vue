<template >
	<div class="idea" >
		<h3 >{{item.title}}</h3 >
	</div >
</template >

<script >
    export default {
        name: 'Idea',
        props: {
            item: {
                type: Object,
                required: true,
            },
        },

    };
</script >

