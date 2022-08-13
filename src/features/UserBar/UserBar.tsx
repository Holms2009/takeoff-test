import block from "bem-cn";
import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../shared/store/hooks";
import { setIsAuth } from "../../shared/store/slices/AuthForm";
import { Button } from "../../shared/ui";

import './UserBar.scss';

let b = block('UserBar');

function UserBar() {
  let dispatch = useAppDispatch();

  function handleClick(evt: React.MouseEvent) {
    dispatch(setIsAuth(false));
    sessionStorage.testIsAuth = 'loggedOut';
  }

  return (
    <div className={b()}>
      <h2 className={b('title')}>Welcome stranger!</h2>
      <p className={b('text')}>
        You can now visit the contacts page!
      </p>
      <div className={b('buttons')}>
        <Link className={b('link')} to="/contacts">Visit</Link>
        <Button text="Log out" onClick={handleClick} />
      </div>
    </div>
  )
}

export { UserBar };