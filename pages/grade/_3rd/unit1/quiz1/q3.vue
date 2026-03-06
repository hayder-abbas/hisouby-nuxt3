<template>
	<NuxtLayout name="quiz">
		<template #quiz_article>
			<!-- Bread crump -->
			<QuizBreadCrumb
				unit="الفصل الأول"
				quize="الدرس الأول"
				question="السؤال الثالث"
				href="/grade/_3rd"
			/>
			<!-- /Bread crump -->

			<!-- Question Content -->
			<QuizQuestionContent question="أعد الألوف, ثم أكتب العدد في صورة احادٍ:">
				<div class="md:flex md:flex-row-reverse w-full mx-auto mb-6">
					<div class="flex items-center justify-center basis-1/2 gap-2">
						<span> = </span>
						<UiDotedInput type="text" v-model="thousands.value" class="w-16" />
						<span>الوف = </span>
						<UiDotedInput type="text" v-model="ones" class="w-16" />
						<span>آحاد</span>
					</div>
					<div class="w-full flex justify-center basis-1/2 my-12 md:my-0">
						<div class="grid grid-cols-3 gap-2 w-fit">
							<QuizGuideImg
								v-for="(th, index) in thousands.repeatImg"
								:key="index"
								:imgSrc="thousands.imgSrc"
								:imgAlt="thousands.imgAlt"
								class="w-16"
							/>
						</div>
					</div>
				</div>
			</QuizQuestionContent>
			<!-- Question Content -->
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

	const thousands = reactive<{
		value: string;
		imgSrc: string;
		imgAlt: string;
		repeatImg: number;
	}>({
		value: "",
		imgSrc: "/images/quiz/thousands.webp",
		imgAlt: "Thousands",
		repeatImg: 6,
	});
	const ones = ref<string>("");

	function check(): void {
		if (
			(thousands.value === "6" && ones.value === "6000") ||
			(thousands.value === "٦" && ones.value === "٦٠٠٠")
		) {
			quiz.value.q3 = 1;
			$quizStore.setPopup("احسنت", true, "/grade/_3rd/unit1/quiz1/q4");
		} else {
			quiz.value.q3 = -1;
			$quizStore.setPopup("حاول مرة اخرى", false, "");
		}
	}

	function handelSkip(): void {
		popup.value.open = false;
		$quizStore.setSkipPopup("/grade/_3rd/unit1/quiz1/q4");
	}

	function skipQuestion(): void {
		quiz.value.q3 = -1;
	}

	onUnmounted(() => {
		popup.value.open = false;
		skipPopup.value.open = false;
	});
</script>
