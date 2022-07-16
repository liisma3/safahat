//import viewers from '@/pages/domain/viewers';
import React, { createContext, useReducer } from 'react';
import { SET_PROFILE, SET_COLLABORATORS, SET_PROFILE_AUTH, SET_PROFILE_NULL, ADD_VIEWER_TO_PROFILE } from '@/store/constants'
const initialProfile = {
  _id: null, login: null, biography: null, website: null,
  email: null, role: ['COLL'], avatar: { url: null, public_id: null },
  isAdmin: false, viewers: [''],
  address: null, city: null, country: null, zip: null, messages: [{ sender: 'qq1', content: 'aide achat' }, { sender: 'qq2', content: 'aide achat2' }]
}
const initialState = {
  state: { profile: initialProfile, collaborators: [initialProfile] },
  setProfileAuth: (arg: any) => { arg ? arg : null },
  setProfile: (arg: any) => { arg ? arg : null },
  setCollaborators: (arg: any) => { arg ? arg : null },
  addViewerToProfile: (arg: any) => { arg ? arg : null },

  signOut: () => { },
};

const profileReducer = (state = initialState.state, action: any) => {
  switch (action.type) {

    case SET_PROFILE_AUTH: {
      return { profile: { ...state.profile, ...action.payload.profile } }
    }

    case SET_PROFILE:
      return { profile: { ...state.profile, ...action.payload.profile } }

    case SET_COLLABORATORS:
      return { ...state, collaborators: [...action.payload.collaborators] }

    case SET_PROFILE_NULL:
      return { ...state, profile: { ...initialProfile } }
    case ADD_VIEWER_TO_PROFILE:
      return { profile: { ...state.profile, viewers: [...state.profile.viewers, action.payload.viewer] } }
    /* case GET_VIEWERS:
      return { ...state, profile: { ...initialProfile } } */

    default: {
      return state
    }
  }
}

export const profileContext = createContext(initialState);
export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(profileReducer, initialState.state)
  // const [profile, _setProfile] = useState<ProfileTypeData | any>(initialProfile);

  const setProfileAuth = ({ id, email, token }: { id: string, email: string, token: string }) => {

    dispatch({
      type: SET_PROFILE_AUTH, payload: { profile: { _id: id, email, token } }
    })
  }
  const setProfile = (profile: any) => {
    dispatch({
      type: SET_PROFILE, payload: { profile }
    })
  }
  const setCollaborators = (collaborators: any) => {
    dispatch({
      type: SET_PROFILE, payload: { collaborators }
    })
  }
  const addViewerToProfile = (username: any) => {
    dispatch({
      type: SET_PROFILE, payload: { username }
    })
  }
  function signOut() {
    dispatch({ type: SET_PROFILE_NULL });
  }

  return <profileContext.Provider value={{ state, setProfile, setCollaborators, setProfileAuth, signOut, addViewerToProfile }}>{children}</profileContext.Provider>;
}

