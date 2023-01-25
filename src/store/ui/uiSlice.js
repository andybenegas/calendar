import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
   name: 'ui',
   initialState: {
       isDateModalOpen: false
   },
   reducers: {
       onOpenDateModal: (state) => {
        //Como estamos con Redux Toolkit podemos realizar este código mutante.
        state.isDateModalOpen = true;
        //Si estuviésemos trabajando con Redux normal, fuera de Toolkit, deberíamos hacer lo sgte:
        // return { 
        //     ...state,
        //     isDateModalOpen: true
        // }
       },

       onCloseDateModal: (state) => {
        state.isDateModalOpen = false;
       },
   }
});

// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;