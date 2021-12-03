import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface InitialValues {
  user: { userName: string; email: string; profileURL: string } | null;
  token: string | null;
  login: boolean;
  userLoading: boolean;
  userError: string | null;
}

interface responseValues {
  user: { userName: string; email: string; profileURL: string } | null;
  accessToken: string | null;
}
let initialState: InitialValues = {
  user: null,
  token: null,
  login: true,
  userLoading: false,
  userError: null,
};
interface User {
  userName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
const URL = process.env.backendURL;

export const signUp = createAsyncThunk<void, User, { rejectValue: string }>(
  "auth/register",
  async ({ userName, email, password, confirmPassword }, thunkAPI) => {
    try {
      const response = await axios.post(`http://localhost:5000/create`, {
        userName,
        email,
        password,
        confirmPassword,
      });
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue("registration failed");
    }
  }
);

export const signIn = createAsyncThunk<
  responseValues,
  User,
  { rejectValue: string }
>("auth/login", async ({ email, password }, thunkAPI) => {
  try {
    const response = await axios.post("http://localhost:5000/login", {
      email,
      password,
    });

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue("login failed");
  }
});

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      {
        state.userError = null;

        state.login = true;
      }
    });
    builder.addCase(signUp.rejected, (state, { payload }) => {
      {
        if (payload) {
          state.userError = payload;
        }
      }
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.userError = null;
      state.user = payload.user;
      state.token = payload.accessToken;

      console.log(payload);
    });
    builder.addCase(signIn.rejected, (state, { payload }) => {
      {
        if (payload) {
          state.userError = payload;
        }
      }
    });
  },
});

export const authActions = userSlice.actions;

export default userSlice.reducer;
