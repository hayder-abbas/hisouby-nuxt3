<script setup lang="ts">
	definePageMeta({
		layout: "3rd-grade",
	});

	useHead({
		title: "الثالث الابتدائية | حيسوبي",
	});

	const { $userStore } = useNuxtApp();
	const grades = computed(() => $userStore?.userInfo?.grades);
</script>

<template>
	<GradeArticle title="الفصل الاول: الأعداد حتى ٩٩٩٩">
		<!-- Quiz Guideline -->
		<QuizGuideline />
		<!-- /Quiz Guideline -->

		<section class="w-full xl:w-3xl mx-auto p-4 mb-12">
			<QuizUnitCard>
				<QuizCard
					title="مفهوم الألف والعد بالألوف"
					link="/grade/_3rd/unit1/quiz1/q1"
					:degree="grades?.g3?.unit1?.quiz1"
				/>
				<QuizCard
					title="الأعداد من ١٠٠٠ الى ٩٩٩٩"
					link="/grade/_3rd/unit1/quiz2/q1"
					:degree="grades?.g3?.unit1?.quiz2"
				/>
				<QuizCard
					title="القيمة المكانية للأعداد حتى ٩٩٩٩"
					link="/grade/_3rd/unit1/quiz3/q1"
					:degree="grades?.g3?.unit1?.quiz3"
				/>
				<QuizCard
					title="قراءة العدد وكتابته"
					link="/grade/_3rd/unit1/quiz4/q1"
					:degree="grades?.g3?.unit1?.quiz4"
				/>
				<QuizCard
					title="مقارنة الأعداد"
					link="/grade/_3rd/unit1/quiz5/q1"
					:degree="grades?.g3?.unit1?.quiz5"
				/>
				<QuizCard
					title="ترتيب الأعداد"
					link="/grade/_3rd/unit1/quiz6/q1"
					:degree="grades?.g3?.unit1?.quiz6"
				/>
				<QuizCard
					title="التقريب الى أقرب عشرة والى أقرب مئة"
					link="/grade/_3rd/unit1/quiz7/q1"
					:degree="grades?.g3?.unit1?.quiz7"
				/>
				<QuizCard
					title="خطة حل المسألة ( أنشىء جدولاً )"
					link="/grade/_3rd/unit1/quiz8/q1"
					:degree="grades?.g3?.unit1?.quiz8"
				/>
			</QuizUnitCard>
		</section>
	</GradeArticle>
</template>
