import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {
	const rc = useRuntimeConfig();

	const firebaseConfig = {
		apiKey: rc.public.firebaseApiKey as string,
		authDomain: rc.public.firebaseAuthDomain as string,
		projectId: rc.public.firebaseProjectId as string,
		storageBucket: rc.public.firebaseStorageBucket as string,
		messagingSenderId: rc.public.firebaseMessagingSenderId as string,
		appId: rc.public.firebaseAppId as string,
	};

	const firebaseApp = initializeApp(firebaseConfig);
	const db = getFirestore(firebaseApp);

	return {
		provide: { db, firebaseApp },
	};
});
