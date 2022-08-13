import block from "bem-cn";

import './LoginPage.scss';

import { AuthForm } from '../../entities';
import { useAppSelector } from "../../shared/store/hooks";
import { getIsAuth } from "../../shared/store/slices/AuthForm";
import { UserBar } from "../../features/UserBar/UserBar";

let b = block('LoginPage');

function LoginPage() {
  let isAuth = useAppSelector(getIsAuth);

  return (
    <div className={b()}>
      <div className={b('wrapper')}>
        {isAuth ? <UserBar /> : <AuthForm />}
      </div>
    </div>
  )
}

export { LoginPage };