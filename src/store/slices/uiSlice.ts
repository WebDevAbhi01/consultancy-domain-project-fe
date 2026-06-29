import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  isMobileNavOpen: boolean;
  activeModalId: string | null;
}

const initialState: UiState = {
  isMobileNavOpen: false,
  activeModalId: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openMobileNav: (state) => {
      state.isMobileNavOpen = true;
    },

    closeMobileNav: (state) => {
      state.isMobileNavOpen = false;
    },

    toggleMobileNav: (state) => {
      state.isMobileNavOpen = !state.isMobileNavOpen;
    },

    openModal: (
      state,
      action: PayloadAction<string>
    ) => {
      state.activeModalId = action.payload;
    },

    closeModal: (state) => {
      state.activeModalId = null;
    },
  },
});

export const {
  openMobileNav,
  closeMobileNav,
  toggleMobileNav,
  openModal,
  closeModal,
} = uiSlice.actions;

export default uiSlice.reducer;