import block from "bem-cn";

import './LoginPage.scss';

import { AuthForm } from '../../features';
import { useAppSelector } from "../../shared/store/hooks";
import { getIsAuth } from "../../features/AuthForm/config/AuthForm.slice";

let b = block('LoginPage');

function LoginPage() {
  let isAuth = useAppSelector(getIsAuth);
  
  return (
    <div className={b()}>
      <div className={b('wrapper')}>
        <AuthForm />
      </div>
    </div>
  )
}

export { LoginPage };