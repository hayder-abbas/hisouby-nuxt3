import { defineStore } from "pinia";
import { getAuth } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

type Degree = {
	excellent: number;
	good: number;
	poor: number;
};

type Quiz = {
	q1: number;
	q2: number;
	q3: number;
	q4: number;
	q5: number;
	q6: number;
	q7: number;
	q8: number;
};

type Popup = {
	open: boolean;
	resetQuiz: boolean;
	next: string;
};

type ResuiltPopup = Popup & {
	successBtn: boolean;
	popupTitle: string;
	popupBtnText: string;
};

type SkipPopup = Popup & {
	skip: boolean;
};

export const useQuizStore = defineStore(
	"quizStore",
	() => {
		/** Firebase **/
		const db = computed(() => useNuxtApp().$db);
		const firebaseApp = computed(() => useNuxtApp().$firebaseApp);

		/** Stores **/
		const userStore = useUserStore();
		const { userInfo } = storeToRefs(userStore);

		/** States **/
		const grades = ref(userInfo.value?.grades);
		const NUMBER_OF_UNITS = ref<number>(0);
		const degreesCounter = ref<Degree>({
			excellent: 0,
			good: 0,
			poor: 0,
		});
		const popup = ref<ResuiltPopup>({
			open: false,
			resetQuiz: false,
			successBtn: false,
			popupTitle: "",
			popupBtnText: "",
			next: "",
		});
		const skipPopup = ref<SkipPopup>({
			next: "",
			open: false,
			skip: false,
			resetQuiz: false,
		});
		const quiz = ref<Quiz>({
			q1: 0,
			q2: 0,
			q3: 0,
			q4: 0,
			q5: 0,
			q6: 0,
			q7: 0,
			q8: 0,
		});

		/** Actions **/
		function setDegreesCounter(units: any): void {
			resetDegreesCounter();
			for (const u in units) {
				// Skip the 'done' property
				if (u === "done") continue;
				for (const q in units[u]) {
					// Skip the 'done' property
					if (q === "done") continue;
					switch (units[u][q]) {
						case "excellent":
							degreesCounter.value.excellent++;
							break;
						case "good":
							degreesCounter.value.good++;
							break;
						case "poor":
							degreesCounter.value.poor++;
							break;
						default:
							break;
					}
				}
			}
		}

		function getDegree(): string {
			const sum = sumQuestions();
			if (sum === 8) {
				return "excellent";
			} else if (sum < 8 && sum >= 4) {
				return "good";
			} else if (sum < 4) {
				return "poor";
			}
			return "";
		}

		function sumQuestions(): number {
			return Object.values(quiz.value).reduce(
				(a: number, b: number) => a + b,
				0
			);
		}

		function resetDegreesCounter(): void {
			(Object.keys(degreesCounter.value) as (keyof Degree)[]).forEach(
				(degree) => {
					degreesCounter.value[degree] = 0;
				}
			);
		}

		function resetQuiz(): void {
			(Object.keys(quiz.value) as (keyof Quiz)[]).forEach((key) => {
				quiz.value[key] = 0;
			});
		}

		function updateQuiz(grade: any): void {
			const auth = getAuth(firebaseApp.value);
			const uid = auth.currentUser?.uid as string;
			const userDocRef = doc(db.value, "users", uid);
			updateDoc(userDocRef, {
				grades: {
					...grades.value,
					...grade,
				},
				degreeCounter: {
					...degreesCounter.value,
				},
			});
		}

		function setPopup(
			title: string,
			successBtn: boolean,
			next: string = "",
			resQuiz: boolean = false
		): void {
			popup.value.popupTitle = title;
			popup.value.successBtn = successBtn;
			popup.value.next = next;
			popup.value.open = true;
			popup.value.resetQuiz = resQuiz;
		}

		function setSkipPopup(nextUrl: string, resQuiz: boolean = false): void {
			skipPopup.value.next = nextUrl;
			skipPopup.value.resetQuiz = resQuiz;
			skipPopup.value.open = true;
		}

		return {
			NUMBER_OF_UNITS,
			degreesCounter,
			quiz,
			popup,
			skipPopup,
			setDegreesCounter,
			sumQuestions,
			resetQuiz,
			getDegree,
			updateQuiz,
			setPopup,
			setSkipPopup,
		};
	},
	{
		persist: true,
	}
);
