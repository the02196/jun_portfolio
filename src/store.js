
import {configureStore, createSlice} from "@reduxjs/toolkit" ;

const SET_IS_OPEN = 'SET_IS_OPEN';
const SET_SELECTED_VALUE = 'SET_SELECTED_VALUE';
const SET_SELECTED_VIEW = 'SET_SELECTED_VIEW';

const isOpenReducer = (state = false, action) => {
    switch (action.type) {
      case SET_IS_OPEN:
        return action.payload;
      default:
        return state;
    }
  };
  const selectedViewReducer = (state = 'Gallery', action) => {
    switch (action.type) {
      case SET_SELECTED_VIEW:
        return action.payload;
      default:
        return state;
    }
  };


  const selectedValueReducer = (state = 'Project', action) => {
    switch (action.type) {
      case SET_SELECTED_VALUE:
        return action.payload;
      default:
        return state;
    }
  };

export const setIsOpen = (isOpen) => ({ type: SET_IS_OPEN, payload: isOpen });
export const setSelectedValue = (selectedValue) => ({ type: SET_SELECTED_VALUE, payload: selectedValue });
export const setSelectedView= (selectedView) => ({ type: SET_SELECTED_VIEW, payload: selectedView });


export default configureStore({
    reducer:{
        isOpen: isOpenReducer,
        selectedValue: selectedValueReducer,
        selectedView: selectedViewReducer
    }
})

