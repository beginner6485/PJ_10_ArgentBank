import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: "",
  lastName: "",
  loading: "",
  token: "",
  isAuthenticated : false ,
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserToken(state, action) {
      state.token = action.payload;
    },
    setUserFirstName(state, action) {
      state.firstName = action.payload;
    },

    setUserLastName(state, action) {
      state.lastName = action.payload;
    },

    setAuthentication(state, action){
      state.isAuthenticated = action.payload;
    },

    logOutUser(state) {
      state.token = ''; // Réinitialiser le token lors de la déconnexion
      state.firstName = '';
      state.lastName = '';
      state.isAuthenticated = false ; 
    },
  },

});

export const { setUserToken, setUserFirstName, setUserLastName, setAuthentication, logOutUser} = userDataSlice.actions;

export default userDataSlice.reducer;
