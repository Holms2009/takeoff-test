import block from "bem-cn";
import { Link } from "react-router-dom";

import './Header.scss';

let b = block('Header');

function Header() {
  return (
    <header className={b()}>
      <span className={b('logo')}>Takeoff Staff</span>
      <div className={b('menu')}>
        <Link className={b('link')} to="/">Home</Link>
        <Link className={b('link')} to="/contacts">Contacts</Link>
      </div>
    </header>
  )
}

export { Header };