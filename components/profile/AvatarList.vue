<template>
	<ul
		class="absolute top-10 left-[50%] -translate-x-[50%] duration-300 grid grid-cols-2 bg-gray-100 p-4 rounded-xl w-72 shadow-xl"
		:class="avatarListDropDown ? 'rotate-y-0' : 'rotate-y-90'"
	>
		<ProfileAvatarListItem
			v-for="(avatar, index) in avatars"
			:key="index"
			:avatar="avatar"
			@click.stop="$emit('passAvatar', avatar), closeList()"
		/>
	</ul>
</template>

<script setup lang="ts">
	const { $userStore } = useNuxtApp();
	const { avatarListDropDown } = storeToRefs($userStore);
	const avatars = reactive<string[]>([
		"penguin.png",
		"bullfinch.png",
		"butterfly.png",
		"clown-fish.png",
		"ladybug.png",
		"lion.png",
		"owl.png",
		"panda.png",
		"spider.png",
	]);

	function closeList() {
		avatarListDropDown.value = false;
	}
</script>
