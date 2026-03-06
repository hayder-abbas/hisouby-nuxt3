<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الثالث"
				question="السؤال الثاني"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent
				question="اكتب اسم مرتبة الرقم الذي تحته خط ثم احدد قيمة المكانية:"
			>
				<div class="grid sm:grid-cols-2 gap-4 w-xs sm:w-md mx-auto">
					<div class="flex items-center justify-center p-4 text-4xl">
						<p>٣<span class="text-rose-500 underline">٦</span>٨٨</p>
					</div>

					<div class="grid grid-cols-2 sm:grid-cols-1 p-4">
						<div class="p-4">
							<UiDotedInput
								v-model="placeValue"
								class="w-full"
								placeholder="المرتبة"
							/>
						</div>

						<div class="p-4">
							<UiDotedInput
								v-model="digitPlace"
								class="w-full"
								placeholder="القيمة"
							/>
						</div>
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

	const placeValue = ref("");
	const digitPlace = ref("");

	const checkResults = (): boolean => {
		if (placeValue.value === "مئات" && digitPlace.value === "600") {
			return true;
		}
		return false;
	};
	// In case user enters Arabic numbers
	const checkArResults = (): boolean => {
		if (placeValue.value === "مئات" && digitPlace.value === "٦٠٠") {
			return true;
		}
		return false;
	};

	function check(): void {
		if (checkResults() || checkArResults()) {
			quiz.value.q2 = 1;
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz3/q3");
		} else {
			quiz.value.q2 = -1;
			$quizStore.setPopup("حاول مرة اخرى", false, "");
		}
	}

	function handelSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz3/q3");
	}

	function skipQuestion(): void {
		quiz.value.q2 = -1;
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
	});
</script>
