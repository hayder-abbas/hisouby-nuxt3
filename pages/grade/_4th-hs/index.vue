<script setup lang="ts">
	useHead({
		title: "الرابع اعدادي | حيسوبي",
	});

	// const { $userStore } = useNuxtApp();
	// const grades = computed(() => $userStore?.userInfo?.grades);
</script>

<template>
	<!-- All grade units -->
	<GradeArticle title="الصف الرابع اعدادي">
		<!-- Quiz Guideline -->
		<QuizGuideline />
		<!-- /Quiz Guideline -->

		<!-- Units -->
		<!-- It's a false until I start implementing it -->
		<section :class="{ 'grid lg:grid-cols-2 gap-6': false }">
			<Comingsoon />
			<!-- <UnitCard title="الفصل الاول">
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
			</UnitCard>

			<UnitCard title="الفصل الثاني">
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
			</UnitCard>

			<UnitCard title="الفصل الثالث">
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
			</UnitCard>

			<UnitCard title="الفصل الرابع">
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
			</UnitCard>

			<UnitCard title="الفصل الخامس">
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
			</UnitCard>

			<UnitCard title="الفصل السادس">
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
			</UnitCard>

			<UnitCard title="الفصل السابع">
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
			</UnitCard>

			<UnitCard title="الفصل الثامن">
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
			</UnitCard>

			<UnitCard title="الفصل التاسع">
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
				<QuizLink href="#" degree="" />
			</UnitCard> -->
		</section>
		<!-- /Units -->
	</GradeArticle>
	<!-- /All grade units -->
</template>
