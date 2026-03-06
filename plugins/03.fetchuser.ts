import { getAuth, onAuthStateChanged } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
  const authStore = useAuthStore();
  const userStore = useUserStore();

  if (import.meta.client) {
    const { $firebaseApp }: any = nuxtApp;
    // Ensure Firebase app exists
    if (!$firebaseApp) {
      console.error("Firebase app not initialized");
      return;
    }
    const auth = getAuth($firebaseApp);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        authStore.isLoggedIn = true;

        try {
          const { data } = userStore.fetchUserInfo(user?.uid);
          userStore.userInfo = data;
        } catch (error) {
          console.error("Error fetching user info:", error);
          userStore.userInfo = null;
        }
      } else {
        authStore.isLoggedIn = false;
        userStore.userInfo = null;
      }
    });
  }

  return {
    provide: {
      userInfo: computed(() => useUserStore().userInfo),
    },
  };
});
