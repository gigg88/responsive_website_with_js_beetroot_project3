import * as React from "react";
import { Link } from "react-router-dom";

export default function Header () {
    return (


 <nav className="d-inline-flex mt-2 pt-4 mx-md-auto">
  <Link to={'/'} className="me-3 py-2 link-body-emphasis text-decoration-none">Home</Link>
  <Link to={'CurrencyInfo'} className="me-3 py-2 link-body-emphasis text-decoration-none">Currencies</Link>
  <Link to={'Converter'} className="me-3 py-2 link-body-emphasis text-decoration-none">Converter</Link>
</nav>
    );

}




