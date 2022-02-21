import React from "react";

import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <div className="notFound">
        <div className="notFound__content">
          <h1>404</h1>
          <p>Oups ! La page que vous demandez n'existe pas!</p>
          <Link to="/" className="btn-404">
            Retourner sur la page d'accueil
          </Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
