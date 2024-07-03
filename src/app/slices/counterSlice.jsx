import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'saveButton',
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, payload) => {
      state.value.push({
        tupe: payload.payload.tupe,
        id: payload.payload.id,
      })
      console.log(payload.payload);
    },
    removeItem: (state, payload) => {
      let getItemIndex
      
      state.value.forEach( (item, inex) => {
        if ( item.tupe === payload.payload.tupe && item.id === payload.payload.id ) {
          getItemIndex=inex
        }
      })
    }
    
  },
})

// Action creators are generated for each case reducer function 
export const { addItem, removeItem, initialState } = counterSlice.actions

export default counterSlice.reducer