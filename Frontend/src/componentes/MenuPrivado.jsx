import { NavLink, Outlet } from 'react-router-dom';
import { getUsuario, logout } from '../seguranca/Autenticacao';
import './menu-home.css';

const MenuPrivado = () => {
  const usuario = getUsuario();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" aria-current="page" exact="true" to="/privado">NeonFlix</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" exact="true" to="/privado">Home</NavLink>
              </li>
              {usuario && (
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Manutenções
                  </a>
                  <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                    <li><NavLink className="dropdown-item text-light" exact="true" to="generos">Gêneros</NavLink></li>
                    <li><NavLink className="dropdown-item text-light" exact="true" to="filmes">Filmes</NavLink></li>
                  </ul>
                </li>
              )}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {usuario ? "Usuário: " + usuario.nome : "Usuário"}
                </a>
                <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                  <li>
                    {usuario ? (
                      <NavLink className="dropdown-item text-light" exact="true" onClick={() => logout()} to="/">Logout</NavLink>
                    ) : (
                      <NavLink className="dropdown-item text-light" exact="true" to="/login">Login</NavLink>
                    )}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default MenuPrivado;
