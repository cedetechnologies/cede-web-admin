'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DELETE_BLOG_REDUCER_PATH } from '@/constant/appConstants';

export const DELETE_BLOG_DELETE_STAGE = 'deleteBlog' as const;
export const DELETE_BLOG_SUCCESS_STAGE = 'deleteBlogSucess' as const;

export interface deleteBlogState {
  stage: typeof DELETE_BLOG_DELETE_STAGE | typeof DELETE_BLOG_SUCCESS_STAGE;
}

export const initialState: deleteBlogState = {
  stage: 'deleteBlog',
};

export const deleteBlogSlice = createSlice({
  name: DELETE_BLOG_REDUCER_PATH,
  initialState,
  reducers: {
    setDeleteBlogStage: (
      state,
      action: PayloadAction<deleteBlogState['stage']>
    ) => {
      return { ...state, stage: action.payload };
    },

    resetDeleteBlogStage: () => {
      return initialState;
    },
  },
});

export const { setDeleteBlogStage, resetDeleteBlogStage } =
  deleteBlogSlice.actions;

export const deleteBlogReducer = deleteBlogSlice.reducer;
