import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore(
  "authStore",
  () => {
    const { $db, $firebaseApp, $userStore } = useNuxtApp();
    const auth = getAuth($firebaseApp);

    /** States **/
    const isLoggedIn = ref<boolean>(false);

    /** Actions **/
    async function signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        /**
         * Reference to the Firestore user document
         **/
        const userDocRef = doc($db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        /**
         * If user doesn't exist in Firestore, create them
         **/
        if (!userDocSnap.exists()) {
          await setDoc(userDocRef, {
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            avatar: "/images/no-image.png",
            grades: {
              g1: {
                done: false,
                unit1: {
                  quiz1: "",
                },
              },
            },
            degreeCounter: {
              excellent: 0,
              good: 0,
              poor: 0,
            },
            userLevel: 0,
            createdAt: Timestamp.fromDate(new Date()),
          });
          console.log("New user created");
        } else {
          console.log("User already exists");
        }

        isLoggedIn.value = true;
        navigateTo("/");
      } catch (error) {
        console.error("Google sign-in error", error);
      }
    }

    function handleSignOut() {
      signOut(auth).then(() => {
        isLoggedIn.value = false;
        $userStore.userInfo = null;
        navigateTo("/");
      });
    }

    return {
      isLoggedIn,
      signInWithGoogle,
      handleSignOut,
    };
  },
  { persist: true }
);
