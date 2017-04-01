<template>
	<div class="viking-home">
		<img src="../assets/img/home/home_bg.gif" class="home-bg">
		<!-- <img src="../assets/img/home/arrow.gif" class="home-arrow"> -->
	</div>
</template>
<script>
	export default {
		name: 'viking-home',
		data () {
		    return {
		      	homeBgSrc: '',
		    }
		}		
	}
</script>
<style lang="scss" scoped>
	.viking-home {
		position: relative;
		height: 100%;
		width: 100%;
		text-align: center;
		overflow:hidden;
		background-color: #2d72a1;
		.home-bg {
			position: absolute;
			min-height: 100%;
			min-width:100%;
			margin: 0 auto;
			top: 0;
			left: 50%;
			transform: translate(-50%, 0);
		}
		.home-arrow {
			position:absolute;
			bottom: 1rem;
			top: auto;
			left: 50%;
			transform: translate(-50%,0);
			height: 1.65rem;
			width: 1.62rem;
			z-index: 100;
		}
	}
</style>