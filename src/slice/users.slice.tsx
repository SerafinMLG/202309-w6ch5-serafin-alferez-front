import { User } from "../entities/user";

type LoginState = {
  loggedUser: User | null;
  loginLoadState: LoginState;
  token: string;
}

const initialState: UsersState = {
  loggedUser: null,
  loginLoadState: 'idle',
  token: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logout: (state: UsersState) => {
      state.loggedUser = null;
      state.token;
    }
  }

  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state: UsersState) => {
      state.leginLoadState = 'loggin';
    });
    builder.addCase(
      
    )
  }
})
