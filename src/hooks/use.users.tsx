import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { LocalStorage } from "../services/local.storage";

export function useUsers() {
  const dispatch = useDispatch<AppDispatch>();
  const repo = new UserRepo();
  const userStore = new LocalStorage<{ token: string }>('user');

  const register = (newUser: FormData) => {
    repo.createUser(newUser);
  };

  const login = (loginUser: LoginUser) => {
    dispatch(loginThunk({ loginUser, repo, userStore}));
  };

  const loginWithToken = () => {
    const userStoreData = userStore.get();
    if (userStoreData) {
      const token = userStoreData.token;
      dispatch(loginTokenThunk({ token, repo, userStore}));
    }
  };

  const logout = () => {
    dispatch(ac.logout());
    userStore.remove();
  };

  return {
    register,
    login,
    loginWithToken,
    logout,
  }
}
