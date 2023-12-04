import { RootState } from "../../store/store";

export function UserButtons() {

     useSelector((state: RootState))   

  return (
    <section>
      <button>Register</button>
      <button>Login</button>
      <button>Logout</button>
    </section>
  );

}
