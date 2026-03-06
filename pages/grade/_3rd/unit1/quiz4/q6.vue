<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الرابع"
				question="السؤال السادس"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent question="اكتب العدد بجدول القيمة المكانية:">
				<div class="grid sm:grid-cols-2 gap-4 md:w-xl mx-auto">
					<div class="flex items-center justify-center sm:p-4">
						<p class="text-4xl underline">٢٠١٠</p>
					</div>

					<div class="w-full flex justify-center p-4">
						<QuizTable :tHeads="['احاد', 'عشرات', 'مئات', 'الوف']">
							<tr>
								<td class="border-1 border-gray-400">
									<UiTextInput
										class="w-full p-2 border-none focus:outline-0"
										v-model="ones"
									/>
								</td>
								<td class="border-1 border-gray-400">
									<UiTextInput
										class="w-full p-2 border-none focus:outline-0"
										v-model="tens"
									/>
								</td>
								<td class="border-1 border-gray-400">
									<UiTextInput
										class="w-full p-2 border-none focus:outline-0"
										v-model="hundreds"
									/>
								</td>
								<td class="border-1 border-gray-400">
									<UiTextInput
										class="w-full p-2 border-none focus:outline-0"
										v-model="thousands"
									/>
								</td>
							</tr>
						</QuizTable>
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

	const thousands = ref("");
	const hundreds = ref("");
	const tens = ref("");
	const ones = ref("");

	const checkResults = (): boolean => {
		if (
			thousands.value === "2" &&
			hundreds.value === "0" &&
			tens.value === "1" &&
			ones.value === "0"
		) {
			return true;
		}
		return false;
	};
	// In case user enters Arabic numbers
	const checkArResults = (): boolean => {
		if (
			thousands.value === "٢" &&
			hundreds.value === "٠" &&
			tens.value === "١" &&
			ones.value === "٠"
		) {
			return true;
		}
		return false;
	};

	function check(): void {
		if (checkResults() || checkArResults()) {
			quiz.value.q6 = 1;
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz4/q7");
		} else {
			quiz.value.q6 = -1;
			$quizStore.setPopup("حاول مرة اخرى", false, "");
		}
	}

	function handelSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz4/q7");
	}

	function skipQuestion(): void {
		quiz.value.q6 = -1;
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
	});
</script>
