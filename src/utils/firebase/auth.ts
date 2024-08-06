import { getFirebaseApp } from "./app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
  Auth,
} from "firebase/auth";

const getFirebaseAuth = (): Auth => {
  const app = getFirebaseApp();
  return getAuth(app);
};

const loginWithPassword = async (
  email: string,
  password: string,
): Promise<{ user: User | null; err: Error | null }> => {
  const auth = getFirebaseAuth();

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return { user: res.user, err: null };
  } catch (e) {
    return { user: null, err: e as Error };
  }
};

const signUpWithPassword = async (
  email: string,
  password: string,
): Promise<{ user: User | null; err: Error | null }> => {
  const auth = getFirebaseAuth();

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return { user: res.user, err: null };
  } catch (e) {
    return { user: null, err: e as Error };
  }
};

export { getFirebaseAuth, loginWithPassword, signUpWithPassword };
