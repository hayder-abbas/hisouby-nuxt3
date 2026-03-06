<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الرابع"
				question="السؤال الأول"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent question="اكتب العدد بالأرقام:">
				<div class="grid sm:grid-cols-3 gap-4 sm:w-lg mx-auto">
					<div class="col-span-2 flex items-center justify-center sm:p-4">
						<p class="text-sm md:text-base font-semibold">
							خمسة الاف وأربعمئة وثمانية
						</p>
					</div>

					<div class="flex justify-center p-4">
						<UiDotedInput
							v-model="digits"
							class="w-1/2 sm:w-full"
							placeholder="العدد بالأرقام"
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

	const digits = ref("");

	const checkResults = (): boolean => {
		if (digits.value === "5408") {
			return true;
		}
		return false;
	};
	// In case user enters Arabic numbers
	const checkArResults = (): boolean => {
		if (digits.value === "٥٤٠٨") {
			return true;
		}
		return false;
	};

	function check(): void {
		if (checkResults() || checkArResults()) {
			quiz.value.q1 = 1;
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz4/q2");
		} else {
			quiz.value.q1 = -1;
			$quizStore.setPopup("حاول مرة اخرى", false, "");
		}
	}

	function handelSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz4/q2");
	}

	function skipQuestion(): void {
		quiz.value.q1 = -1;
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
	});
</script>
