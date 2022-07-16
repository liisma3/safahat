import React, { useState, useEffect, createContext, ReactNode } from 'react';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/lib/db/firebase-auth';
import { toast } from 'react-toastify';
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/lib/db/firebase-auth'
import { useRouter } from 'next/router'
import { signOut as authSignOut } from 'firebase/auth'
import useProfile from '../hooks/useProfile';
//import { ProfileType } from '@/api/profile/profile.types'
//import { removeTokenCoookies, setTokenCookie } from '@/lib/utils/tokenCookies';
const initialState = {
  authenticated: { email: '', token: '', _id: '' },
  signOutAuth: () => { },
  setAuth: (args: any) => {
    args ? args : args
  },
};
export const ProfileAuthContext = createContext(initialState);

export function ProfileAuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [authenticated, _setAuth] = useState({ email: '', token: '', _id: '' });
  const { setProfileAuth } = useProfile()
  //const [loading, setLoading] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const uid = await user.uid;
          // const token = await user.getIdToken();
          user
            .getIdTokenResult()
            .then(async (idTokenResult) => {
              await localStorage.setItem('token', idTokenResult.token);

              _setAuth({ email: user?.email ? user?.email : '', token: idTokenResult.token, _id: uid });
              //              setProfile({ email: user?.email ? user?.email : '', token: idTokenResult.token, _id: uid });
            })
            .catch((error) => {
              toast.error(`${error?.message} cant get token authentication `);
            });
        } catch (error: any) {
          throw new Error(error);
        }
      } else {
        router.push('/');
        _setAuth({ email: '', token: '', _id: '' });
      }
    });
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    setProfileAuth({ _id: authenticated._id, email: authenticated.email, token: authenticated.token })
  }, [authenticated])
  // SIGNOUT
  async function signOutAuth() {
    try {

      await updateDoc(doc(db, 'profiles', authenticated._id), {
        isOnLine: false
      }),
        await authSignOut(auth)
      _setAuth({ email: '', token: '', _id: '' });
      router.replace('/')
    } catch (error) {

    }
  }
  function setAuth({ email, token, id }: { email: string; token: string; id: string }) {

    _setAuth({ email, token, _id: id });
  }

  const authenticatedValue = {
    authenticated,
    signOutAuth,
    setAuth,
  };
  return <ProfileAuthContext.Provider value={authenticatedValue}>{children}</ProfileAuthContext.Provider>;
}
