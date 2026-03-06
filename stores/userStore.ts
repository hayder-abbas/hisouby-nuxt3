import {
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore(
  "userStore",
  () => {
    /** Firebase **/
    const { $db, $firebaseApp } = useNuxtApp();
    const auth = getAuth($firebaseApp);

    /** States **/
    let userInfo = ref<any>(null);
    let successMsg = ref<string | null>("");
    let avatarListDropDown = ref<boolean>(false);

    /** Actions **/
    function updateUser(data: any) {
      let uid = auth.currentUser?.uid as string;
      let userDocRef = doc($db, "users", uid);
      updateDoc(userDocRef, data);
      fetchUserInfo(uid);
      successMsg.value = "تم تحديث المعلومات";
      setTimeout(() => {
        successMsg.value = "";
      }, 3000);
    }

    function getUserLevel(units: any, numOfUnits: number): number {
      let doneCounter = 0;
      if (!units || numOfUnits === 0) return 0; // Avoid division by zero
      for (let u in units) {
        if (u === "done") continue;
        for (let q in units[u]) {
          if (q === "done") continue;
          if (units[u][q] === "") return 0; // Avoid incomplete unit
        }
        if (units[u].done) doneCounter++;
      }
      return Math.ceil((100 / numOfUnits) * doneCounter);
    }

    function setUserLevel(units: any, numOfUnits: number) {
      let level = getUserLevel(units, numOfUnits);
      if (level <= 0) return;
      let uid = auth.currentUser?.uid as string;
      let userDocRef = doc($db, "users", uid);
      updateDoc(userDocRef, {
        userLevel: level,
      });
      fetchUserInfo(uid);
    }

    function fetchUserInfo(userId: string) {
      let data: any = {};
      let q = query(collection($db, "users"), where("uid", "==", userId));
      onSnapshot(q, (querySnapshot) => {
        userInfo.value = querySnapshot.docs[0].data();
        data = userInfo.value;
      });
      return { data };
    }

    return {
      userInfo,
      successMsg,
      avatarListDropDown,
      updateUser,
      setUserLevel,
      fetchUserInfo,
    };
  },
  {
    persist: true,
  }
);
