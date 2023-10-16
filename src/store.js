import {configureStore, createSlice} from "@reduxjs/toolkit";

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

export const { setIsOpen } = isOpenSlice.actions;
export const { setSelectedValue } = selectedValueSlice.actions;
export const { setSelectedView } = selectedViewSlice.actions;
export const { setLanguage } = languageSlice.actions;
export const { setSelectedLanguage } = selectedLanguageSlice.actions;

export default configureStore({
  reducer:{
    isOpen: isOpenSlice.reducer,
    selectedValue: selectedValueSlice.reducer,
    selectedView: selectedViewSlice.reducer,
    language: languageSlice.reducer,
    selectedLanguage: selectedLanguageSlice.reducer
  }
});