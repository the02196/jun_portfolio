import {configureStore, createSlice} from "@reduxjs/toolkit";
import data from "../src/data/data.json"

const animationSlice = createSlice({
  name: 'animation',
  initialState: true,
  reducers: {
    stopAnimation: (state, action) => action.payload
  }
});

const TriangleSlice = createSlice({
  name: 'triangle',
  initialState: true,
  reducers: {
    hideTriangle: (state, action) => action.payload
  }
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: 'All',
  reducers: {
    setFilter: (state, action) => action.payload
  }
});

const dataSlice = createSlice({
  name: 'data',
  initialState: [data.developer], 
  reducers: {
    setData: (state, action) => action.payload
  }
});

const isOpenSlice = createSlice({
  name: 'isOpen',
  initialState: false,
  reducers: {
    setIsOpen: (state, action) => action.payload
  }
});

const selectedValueSlice = createSlice({
  name: 'selectedValue',
  initialState: 'Project',
  reducers: {
    setSelectedValue: (state, action) => action.payload
  }
});

const selectedViewSlice = createSlice({
  name: 'selectedView',
  initialState: 'Gallery',
  reducers: {
    setSelectedView: (state, action) => action.payload
  }
});

const languageSlice = createSlice({
  name: 'language',
  initialState: 'ko',
  reducers: {
    setLanguage: (state, action) => action.payload
  }
});

const selectedLanguageSlice = createSlice({
  name: 'selectedLanguage',
  initialState: 1,
  reducers: {
    setSelectedLanguage: (state, action) => action.payload
  }
});

const toggleHorizonAndVertical = createSlice({
  name: 'toggleHorizonAndVertical',
  initialState: true,
  reducers: {
    setHorizonAndVertical: (state, action) => action.payload
  }
});

const developerMode = createSlice({
  name: 'developerMode',
  initialState: false,
  reducers: {
    setDeveloperMode: (state, action) => action.payload
  }
});

export const { hideTriangle } = TriangleSlice.actions;
export const { stopAnimation } = animationSlice.actions;
export const { setFilter } = filterSlice.actions;
export const { setData } = dataSlice.actions;
export const { setIsOpen } = isOpenSlice.actions;
export const { setSelectedValue } = selectedValueSlice.actions;
export const { setSelectedView } = selectedViewSlice.actions;
export const { setLanguage } = languageSlice.actions;
export const { setSelectedLanguage } = selectedLanguageSlice.actions;
export const { setHorizonAndVertical } = toggleHorizonAndVertical.actions;
export const { setDeveloperMode } = developerMode.actions;

export default configureStore({
  reducer:{
    triangle : TriangleSlice.reducer,
    animation : animationSlice.reducer,
    isOpen: isOpenSlice.reducer,
    selectedValue: selectedValueSlice.reducer,
    selectedView: selectedViewSlice.reducer,
    language: languageSlice.reducer,
    selectedLanguage: selectedLanguageSlice.reducer,
    HorizonAndVertical: toggleHorizonAndVertical.reducer,
    developerMode: developerMode.reducer,
    filter: filterSlice.reducer,
    data: dataSlice.reducer
  }
});