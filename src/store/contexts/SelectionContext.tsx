import { createContext, useReducer } from 'react'

import {
  SET_PAGE_INDEX,
  SET_SELECTIONS_PENDING,
  SET_SELECTIONS_SUCCESS,
  SET_SELECTIONS_FAILURE,
  SET_SELF_SELECTIONS,
  ADD_SELF_SELECTION,
  SET_CONTEXT_SELECTION,
  PROMOTE_SELECTION

} from "@/store/constants";

const initialState = {
  isLoading: false,
  error: { message: null },
  pageIndex: 0,
  selections: [],
  selfSelections: [],
  titleSlug: '',
  viewersPromote: [{
    login: '',
    titleSlug: ''
  }]
};
const initialContext = {
  state: initialState,
  setContextSelections: (selections: any) => (selections ? selections : null),
  setContextSelection: (selection: any) => (selection ? selection : null),
  setContextSelfSelections: (selections: any) => (selections ? selections : null),
  addContextSelfSelection: (selection: any) => (selection ? selection : null),
  setContextSelectionFailure: (error: any) => (error ? error : null),
  setPageIndex: (index: any) => (index ? index : null),
  setPromoteSelection: (login: any) => (login ? login : null)
}
const selectionsReducer = (state = initialState, { type, payload }: { type: string, payload: any }) => {
  switch (type) {
    case SET_SELECTIONS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_SELECTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selections: payload.selections,
      };
    case SET_CONTEXT_SELECTION:
      return {
        ...state,
        isLoading: false,
        titleSlug: payload.titleSlug
      };
    case SET_SELF_SELECTIONS:
      return {
        ...state,
        isLoading: false,
        selfSelections: payload.selections,
      };
    case PROMOTE_SELECTION:
      return {
        ...state,
        viewersPromote: [...state.viewersPromote, { login: payload.login, titleSlug: payload.titleSlug }],

      };
    case ADD_SELF_SELECTION:
      return {
        ...state,
        isLoading: false,
        selfSelections: [...state.selfSelections, payload.selection],
      };
    case SET_SELECTIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case SET_PAGE_INDEX:
      return {
        ...state,
        pageIndex: payload.index,
      };
    default:
      return state;
  }
};


export const SelectionContext = createContext(initialContext);

export const SelectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(selectionsReducer, initialState)

  const setContextSelections = (selections: any) => {

    dispatch({ type: SET_SELECTIONS_SUCCESS, payload: { selections } })
  }
  const setContextSelfSelections = (selections: any) => {

    dispatch({ type: SET_SELF_SELECTIONS, payload: { selections } })
  }
  const addContextSelfSelection = (selection: any) => {

    dispatch({ type: ADD_SELF_SELECTION, payload: { selection } })
  }

  const setContextSelection = (titleSlug: any) => {
    dispatch({ type: SET_CONTEXT_SELECTION, payload: { titleSlug } })
  }
  const setContextSelectionFailure = (error: any) => {
    dispatch({ type: SET_SELECTIONS_FAILURE, payload: { error } })
  }

  const setPageIndex = (index: any) => {
    dispatch({ type: SET_PAGE_INDEX, payload: { index } })
  }

  const setPromoteSelection = ({ login, titleSlug }: { login: string, titleSlug: string }) => {
    dispatch({ type: PROMOTE_SELECTION, payload: { login, titleSlug } })
  }


  return (
    <SelectionContext.Provider value={{
      state, setContextSelections, setContextSelfSelections, setContextSelection, addContextSelfSelection,
      setContextSelectionFailure, setPageIndex, setPromoteSelection
    }}> {children}</SelectionContext.Provider>
  )

}
