<template>
	<div class="w-full p-2 md:px-0 pt-24 md:w-2xl lg:w-3xl mx-auto">
		<!-- Notification -->
		<UiSuccessMsg v-show="$userStore.successMsg" :msg="$userStore.successMsg" />
		<!-- /Notification -->

		<div class="relative flex flex-col border-2 border-gray-500 rounded-2xl">
			<!-- User info -->
			<ProfileUserInfo :userInfo="userInfo" />
			<!-- /User info -->

			<!-- User achievements -->
			<ProfileUserAchievements>
				<template #progress_bar>
					<!-- Level Progress Bar -->
					<ProfileLevelProgressBar :userLevel="userLevel" />
					<!-- /Level Progress Bar -->

					<!-- Degree Counter -->
					<div class="p-4 flex">
						<ProfileDegreeCounter
							:degreeCount="excellent"
							title="ممتاز"
							degree="excellent"
						/>
						<ProfileDegreeCounter
							:degreeCount="good"
							title="جيد"
							degree="good"
						/>
						<ProfileDegreeCounter
							:degreeCount="poor"
							title="ضعيف"
							degree="poor"
						/>
					</div>
					<!-- /Degree Counter -->
				</template>

				<!-- Grads -->
				<ProfileGradesCard>
					<ProfileGradeList badgeImage="" title="الاول ابتدائية" />
					<ProfileGradeList badgeImage="" title="الثاني ابتدائية" />
					<ProfileGradeList badgeImage="" title="الثالث ابتدائية" />
					<ProfileGradeList badgeImage="" title="الرابع ابتدائية" />
					<ProfileGradeList badgeImage="" title="الخامس ابتدائية" />
					<ProfileGradeList badgeImage="" title="السادس ابتدائية" />
					<ProfileGradeList badgeImage="" title="الاول متوسطة" />
					<ProfileGradeList badgeImage="" title="الثاني متوسطة" />
					<ProfileGradeList badgeImage="" title="الثالث متوسطة" />
					<ProfileGradeList badgeImage="" title="الرابع اعدادي" />
					<ProfileGradeList badgeImage="" title="الخامس اعدادي" />
					<ProfileGradeList badgeImage="" title="السادس اعدادي" />
				</ProfileGradesCard>
				<!-- /Grads -->
			</ProfileUserAchievements>
			<!-- /User achievements -->
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ProfileUserInfo } from "#components";

	definePageMeta({
		middleware: "auth",
	});

	useHead({
		title: "الملف الشخصي",
	});

	const { $userStore } = useNuxtApp();

	let userInfo = ref<any>();
	let userLevel = ref<number>(0);
	let excellent = ref<number>(0);
	let good = ref<number>(0);
	let poor = ref<number>(0);

	onMounted(() => {
		userInfo.value = $userStore?.userInfo || null;
		userLevel.value = userInfo.value?.userLevel || 0;
		excellent.value = userInfo.value?.degreeCounter?.excellent || 0;
		good.value = userInfo.value?.degreeCounter?.good || 0;
		poor.value = userInfo.value?.degreeCounter?.poor || 0;
	});
</script>
