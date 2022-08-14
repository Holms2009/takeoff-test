import { Navigate, Route } from 'react-router-dom';

import { useAppSelector } from '../../store/hooks';
import { getIsAuth } from '../../store/slices/AuthForm';

function PrivateRoute({ children }: { children: JSX.Element }) {
  let isAuth = useAppSelector(getIsAuth);

  if (!isAuth) {
    return <Navigate to='/' replace />
  }

  return children;
}

export { PrivateRoute };