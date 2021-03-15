import { createSlice } from '@reduxjs/toolkit';

export interface SliceTypes{
    firstName?: string,
    lastName?: string,
    taxYear?: string,
}

const rootSlice = createSlice({
    name: 'root',
    initialState:{
        firstName: 'John',
        lastName: 'Smith',
        taxYear: '2020'
    },
    reducers:{
        chooseFirstName: (state, action) => {state.firstName = action.payload},
        chooseLastName: (state, action) => {state.lastName = action.payload},
        chooseTaxYear: ( state,action) => {state.taxYear = action.payload}
    }
})

export const reducer = rootSlice.reducer;

export const { chooseFirstName, chooseLastName, chooseTaxYear} = rootSlice.actions