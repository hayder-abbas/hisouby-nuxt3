<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الخامس"
				question="السؤال الثاني"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent question="أستعمل الرموز =, >, < لأقارن بين العددين:">
				<div class="sm:w-lg mx-auto">
					<div class="flex gap-2 w-full justify-center items-center">
						<div class="text-2xl">٢٤٥٨</div>
						<div class="relative">
							<UiTextInput
								v-model="operator"
								class="w-16 h-10 text-2xl font-bold"
								:class="{
									'text-lime-600': operator === '=',
									'text-rose-600': operator === '<',
									'text-sky-600': operator === '>',
								}"
							/>
							<div
								@click="operatorDropdown = !operatorDropdown"
								class="w-full h-full rounded-lg absolute top-0 right-0 flex items-center"
							>
								<IconChevronDown
									class="w-6 h-6 duration-300"
									:class="{ 'rotate-180': operatorDropdown }"
								/>
							</div>
							<ul
								class="absolute text-center text-2xl font-bold top-10 left-0 border rounded-lg w-full bg-gray-50 border-gray-300"
								:class="{ hidden: !operatorDropdown }"
							>
								<li
									@click="
										(operator = '='), (operatorDropdown = !operatorDropdown)
									"
									class="py-1 hover:bg-lime-100 rounded-lg text-lime-600"
								>
									&equals;
								</li>
								<li
									@click="
										(operator = '<'), (operatorDropdown = !operatorDropdown)
									"
									class="py-1 hover:bg-rose-100 rounded-lg text-rose-600"
								>
									&lt;
								</li>
								<li
									@click="
										(operator = '>'), (operatorDropdown = !operatorDropdown)
									"
									class="py-1 hover:bg-blue-100 rounded-lg text-blue-600"
								>
									&gt;
								</li>
							</ul>
						</div>
						<div class="text-2xl">٢٤٥٩</div>
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

	const operator = ref("");
	const operatorDropdown = ref(false);

	function check(): void {
		if (operator.value === "<") {
			quiz.value.q2 = 1;
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz5/q3");
		} else {
			quiz.value.q2 = -1;
			$quizStore.setPopup("حاول مرة اخرى", false);
		}
	}

	function handelSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz5/q3");
	}

	function skipQuestion(): void {
		quiz.value.q2 = -1;
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
		operatorDropdown.value = false;
	});
</script>
