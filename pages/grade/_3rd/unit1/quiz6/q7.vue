<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس السادس"
				question="السؤال السابع"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent
				question="ادخرت الاء ٦٥٠٠ ديناراً في الأسبوع الأول ٥٥٠٠ في الأسبوع الثاني ٤٠٠٠ في الأسبوع الثالث. أرتب مدخرات الاء من الأصغر الى الأكبر."
			>
				<div class="md:w-xl mx-auto">
					<div class="w-full flex justify-center items-center gap-4 p-4">
						<UiDotedInput
							v-model="num1"
							class="w-16 sm:w-20 border-b-rose-500 text-rose-500"
						/>
						<div class="flex items-center text-xl">&lt;</div>
						<UiDotedInput
							v-model="num2"
							class="w-16 sm:w-20 border-b-lime-500 text-lime-500"
						/>
						<div class="flex items-center text-xl">&lt;</div>
						<UiDotedInput
							v-model="num3"
							class="w-16 sm:w-20 border-b-blue-500 text-sky-500"
						/>
					</div>
				</div>
			</QuizQuestionContent>
			<!-- /Question Content -->
		</template>

		<!-- Quize footer -->
		<template #quiz_footer>
			<QuizFooter
				class="sticky bottom-0 w-full h-24 p-4 flex justify-between gap-2 border-t-1 border-gray-400"
			>
				<!-- Actions -->
				<div class="flex items-center gap-2">
					<UiPrimaryButton @click="check">النتيجة</UiPrimaryButton>
					<UiSecondaryButton @click="handelSkip"> مرر </UiSecondaryButton>
				</div>
				<!-- /Actions -->

				<QuizIndicator :quiz="quiz" />
				<QuizPopup :popup="popup" />
				<QuizSkipPopup :skipPopup="skipPopup" @skipQuestion="skipQuestion" />
			</QuizFooter>
		</template>
		<!-- /Quize footer -->
	</NuxtLayout>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: false,
	});

	useHead({
		title: "الثالث الابتدائية - الفصل الأول",
	});

	const { $quizStore } = useNuxtApp();
	const { skipPopup, popup, quiz } = storeToRefs($quizStore);

	const num1 = ref("");
	const num2 = ref("");
	const num3 = ref("");

	function checkResults(): boolean {
		if (
			num1.value === "4000" &&
			num2.value === "5500" &&
			num3.value === "6500"
		) {
			return true;
		}
		return false;
	}
	// In case user enters arabic numbers
	function checkArResults(): boolean {
		if (
			num1.value === "٤٠٠٠" &&
			num2.value === "٥٥٠٠" &&
			num3.value === "٦٥٠٠"
		) {
			return true;
		}
		return false;
	}

	function check(): void {
		if (checkResults() || checkArResults()) {
			quiz.value.q7 = 1;
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz6/q8");
		} else {
			quiz.value.q7 = -1;
			$quizStore.setPopup("حاول مرة اخرى", false);
		}
	}

	function handelSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz6/q8");
	}

	function skipQuestion(): void {
		quiz.value.q7 = -1;
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
	});
</script>
