<template>
	<div class="w-full">
		<div class="pt-14 lg:w-2xl mx-auto">
			<div
				class="absolute w-28 p-3 -top-[75px] left-[50%] -translate-x-[50%] rounded-full border border-gray-500 bg-gray-50"
			>
				<img
					class="w-full lg:w-40"
					:src="userInfo?.avatar || '/images/no-image.png'"
					alt="User Avatar"
				/>
			</div>

			<div class="flex-2/3 flex flex-col items-center justify-center">
				<h2 class="text-center text-gray-900 font-semibold mb-4">
					{{ userInfo?.name || "بلا اسم" }}
				</h2>

				<UiEditProfileBtn />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		userInfo: any;
	}>();
</script>
