import { createSlice } from "@reduxjs/toolkit";

const initialToggleState = { toggleShow: false, notification: null };
const toggleSlice = createSlice({
  name: "toggle",
  initialState: initialToggleState,
  reducers: {
    toggle(state) {
      state.toggleShow = !state.toggleShow;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export default toggleSlice;
