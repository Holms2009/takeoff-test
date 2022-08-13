import { useState } from "react";
import block from "bem-cn";

import './AuthForm.scss';
import { Button, Input } from "../../shared/ui";
import { fetchAuthDataThunk } from "./api/asyncActions";
import { useAppDispatch } from "../../shared/store/hooks";
import { setIsAuth } from "../../shared/store/slices/AuthForm";

let b = block('AuthForm');

function AuthForm() {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [authError, setAuthError] = useState('');
  let [pending, setPending] = useState(false);

  let dispatch = useAppDispatch();

  function handleSubmit(evt: React.FormEvent) {
    let loginData: TAuthData = { email, password };
    dispatch(fetchAuthDataThunk())
      .unwrap()
      .then((authData: TAuthData[]) => {
        if (authData[0].email === loginData.email && authData[0].password === loginData.password) {
          dispatch(setIsAuth(true));
          setAuthError('');
          sessionStorage.testIsAuth = 'isAuth';
        } else {
          setAuthError('Wrong email or password!')
        }
      })

    evt.preventDefault();
  }

  return (
    <form className={b()} onSubmit={handleSubmit}>
      <h2 className={b('title')}>Login</h2>
      <div className={b('wrapper')}>
        <Input
          label="Email"
          value={email}
          inputHandler={setEmail}
          placeholder={'example@mail.com'}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          inputHandler={setPassword}
          placeholder={'Enter your password here'}
        />
      </div>
      {authError.length ? <span className={b('error')}>{authError}</span> : null}
      <div className={b('button-wrapper')}>
        <Button text="Submit" type="submit" />
      </div>
    </form>
  )
}

export { AuthForm };