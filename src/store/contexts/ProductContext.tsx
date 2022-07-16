import { createContext, useReducer, useEffect } from 'react'
import { ProductTypeData } from '@/api/product/product.types'
import {
  SET_PAGE_INDEX,
  SET_PRODUCTS_PENDING,
  SET_PRODUCTS_SUCCESS,
  SET_PRODUCTS_FAILURE,
  SET_SELF_PRODUCTS,
  SET_CONTEXT_PRODUCT, SET_SEARCH_RESULT,
  ADD_SELF_PRODUCT, SET_OPEN_MENU,
  SET_INTERVAL_FILTER, SET_ALL_PRODUCTS, SET_PROMOTE
} from "@/store/constants";
import { ProductStatus } from '@/api/product/product.types'


const initialState = {
  searchResult: [{
    title: '',
    titleSlug: '',
    description: '',
    price: 0,
    offerPrice: 0,
    image: {
      url: '',
      public_id: ''
    },
    selection: '',
    status: ProductStatus.FRO,
    stock: 0,
  }],
  isLoading: false,
  error: null,
  pageIndex: 0,
  products: [],
  allProducts: [],
  selfProducts: [],
  titleSlug: null,
  intervalFilter: [0, 0],
  rate: 0,
  promote: ['']
};
const initialContext = {
  state: initialState,
  setContextProducts: (products: any) => { products ? products : null },
  setAllProducts: (products: any) => { products ? products : null },
  setSearchResult: (products: any) => { products ? products : null },
  setContextSelfProduct: (titleSlug: any) => { titleSlug ? titleSlug : null },
  setContextProductFailure: (error: any) => { error ? error : null },
  setPageIndex: (index: any) => { index ? index : null },
  setContextSelfProducts: (products: any) => { products ? products : null },
  addContextSelfProduct: (product: any) => { product ? product : null },
  setIntervalFilter: (values: any) => { values ? values : null },
  setPromote: (values: any) => { values ? values : null },
  setOpenMenu: (bool: boolean) => { bool ? bool : false },
}
const productsReducer = (state = initialState, { type, payload }: { type: string, payload: any }) => {
  switch (type) {
    case SET_PRODUCTS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: payload.products,
      };
    case SET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload.products,
      };
    case SET_PROMOTE:
      return {
        ...state,
        promote: [...state.promote, payload.login],

      };
    case SET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: payload.searchResult,

      };


    case SET_CONTEXT_PRODUCT:
      return {
        ...state,
        isLoading: false,
        titleSlug: payload.titleSlug,
      };
    case SET_SELF_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        selfProducts: payload.products,
      };
    case ADD_SELF_PRODUCT:
      return {
        ...state,
        isLoading: false,
        selfProducts: [...state.selfProducts, payload.product],
      };
    case SET_PRODUCTS_FAILURE:
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
    case SET_INTERVAL_FILTER:
      return {
        ...state,
        intervalFilter: payload.intervalFilter,
      };
    case SET_OPEN_MENU:
      return {
        ...state,
        openMenu: payload.openMenu,
      };

    default:
      return state;
  }
};


export const ProductContext = createContext(initialContext);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState)

  const setContextProducts = (products: any) => {
    dispatch({ type: SET_PRODUCTS_SUCCESS, payload: { products } })
  }
  const setAllProducts = (products: ProductTypeData[]) => {

    dispatch({ type: SET_ALL_PRODUCTS, payload: { products } })
  }
  const setSearchResult = (searchResult: ProductTypeData[]) => {
    console.log({ searchResult })
    dispatch({ type: SET_SEARCH_RESULT, payload: { searchResult } })
  }


  const setContextProductFailure = (error: any) => {
    dispatch({ type: SET_PRODUCTS_FAILURE, payload: { error } })
  }

  const setPageIndex = (index: any) => {
    dispatch({ type: SET_PAGE_INDEX, payload: { index } })
  }

  const setContextSelfProducts = (products: Array<ProductTypeData>) => {
    //console.log({ setSelfProducts: products })
    dispatch({ type: SET_SELF_PRODUCTS, payload: { products } })
  }
  const addContextSelfProduct = (product: string) => {
    console.log({ addSelfProducts: product })
    dispatch({ type: ADD_SELF_PRODUCT, payload: { product } })
  }
  const setContextSelfProduct = ((titleSlug: string) => {
    //console.log({ setSelfProducts: products })
    dispatch({ type: SET_CONTEXT_PRODUCT, payload: { titleSlug } })
  })
  const setIntervalFilter = ((intervalFilter: [number, number]) => {
    console.log({ setIntervalFilter: intervalFilter })
    dispatch({ type: SET_CONTEXT_PRODUCT, payload: { intervalFilter } })
  })
  const setOpenMenu = (bool: boolean) => {
    console.log({ setOpenMenu: bool })
    dispatch({ type: SET_OPEN_MENU, payload: { bool } })
  }

  const setPromote = ({ login }: { login: string }) => {
    console.log({ login })
    dispatch({ type: SET_PROMOTE, payload: { login } })
  }


  return (
    <ProductContext.Provider value={{
      state, setContextProducts, setContextSelfProduct, setAllProducts, addContextSelfProduct, setContextProductFailure,
      setPageIndex, setContextSelfProducts, setIntervalFilter, setSearchResult,
      setPromote, setOpenMenu
    }}> {children}</ProductContext.Provider>
  )

}
