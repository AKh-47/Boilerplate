import React, { ReactElement, useContext, useState, useEffect } from "react";
import { auth, db } from "../utils/firebase";

import { v4 as uuid } from "uuid";

interface Props {
  children: ReactElement[] | ReactElement;
}

const AuthContext = React.createContext<any>({});

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: Props): ReactElement {
  const [currentUser, setCurrentUser] = useState<any>();

  const usersRef = db.collection("users");

  const signUp = async (email: string, password: string) => {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    usersRef.doc(user?.uid).set(
      {
        email: user?.email,
      },
      { merge: true }
    );
  };

  const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
