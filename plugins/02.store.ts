export default defineNuxtPlugin(() => {
	const authStore = useAuthStore();
	const userStore = useUserStore();
	const quizStore = useQuizStore();

	return {
		provide: {
			authStore,
			userStore,
			quizStore,
		},
	};
});
