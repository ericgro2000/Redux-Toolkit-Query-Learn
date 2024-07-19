import { AppDispatch, RootState} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";

interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch
  rejectValue: string;
}

export const fetchUsers: AsyncThunk<IUser[], void, AsyncThunkConfig> = createAsyncThunk<IUser[], void, AsyncThunkConfig>(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("could not load users");
    }
  }
);