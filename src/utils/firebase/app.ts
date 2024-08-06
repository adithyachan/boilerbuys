import { initializeApp, getApps, getApp } from "firebase/app";
import { firebaseConfig } from "./config";

const getFirebaseApp = () => {
  if (getApps().length == 0) {
    return initializeApp(firebaseConfig);
  }
  return getApp();
};

export { getFirebaseApp };
