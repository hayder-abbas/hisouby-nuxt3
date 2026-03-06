<template>
	<div
		class="w-full md:w-2xl lg:w-4xl xl:w-6xl mx-auto p-2 sm:px-4 md:px-0 pt-28"
	>
		<form
			@submit.prevent="submitUpdate"
			class="w-full md:w-96 mx-auto border-2 p-2 sm:p-4 border-gray-500 rounded-2xl"
		>
			<div class="relative h-16">
				<UiImageInput
					@click="avatarListDropDown = !avatarListDropDown"
					:src="form.avatar"
					alt="User avatar"
				/>
				<!-- List of avatars -->
				<ProfileAvatarList @passAvatar="changeAvatar($event)" />
			</div>

			<div class="mb-8">
				<UiTextInput
					class="block w-full p-3"
					v-model="form.name"
					placeholder="اكتب اسمك..."
				/>
			</div>
			<div class="flex flex-col gap-2 my-4">
				<UiPrimaryButton type="submit"> حفظ </UiPrimaryButton>
				<UiSecondaryButton type="button" @click="goBack">
					إلغاء
				</UiSecondaryButton>
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		middleware: "auth",
	});

	useHead({
		title: "تعديل الملف الشخصي",
	});

	const { $userStore } = useNuxtApp();
	const { avatarListDropDown, userInfo } = storeToRefs($userStore);

	const form = reactive({
		name: "",
		avatar: "",
	});

	onMounted(() => {
		form.name = userInfo?.value.name || "";
		form.avatar = userInfo?.value.avatar || "";
	});

	function changeAvatar(event: any) {
		form.avatar = `/images/avatars/${event}`;
	}

	function submitUpdate() {
		$userStore.updateUser({
			name: form.name,
			avatar: form.avatar,
		});
		navigateTo("/profile");
	}

	function goBack() {
		history.back();
	}

	onUnmounted(() => {
		avatarListDropDown.value = false;
	});
</script>
