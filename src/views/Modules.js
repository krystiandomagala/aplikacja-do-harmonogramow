import React from "react";
import { Link } from "react-router-dom";

function Modules() {

    const modules = [];

  return (
    <>
      <h1>Lista modułów</h1>
      <p>
        Zarządzaj prowadzącymi lub <br /> dodaj nowego.
      </p>
      <button>Importuj</button>

      <button>
        <Link to="/modules/add">+ Dodaj nowego prowadzącego</Link>
      </button>
      <div className="lecturers-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Imię i nazwisko</th>
              <th>Stopień naukowy</th>
              <th>Moduły prowadzącego</th>
              <th>Data dodania</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((element) => (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>
                  <b>
                    {element.name} {element.surname}
                  </b>
                </td>
                <td>{element.acad_degree}</td>
                <td>
                  {Array.isArray(element.modules) &&
                  element.modules.length > 0 ? (
                    element.modules.map((name) => (
                      <span key={name} className="module-item">
                        {" "}
                        {name}
                      </span>
                    ))
                  ) : (
                    <span className="no-data">Brak informacji o modułach</span>
                  )}
                </td>
                <td>{element.date}</td>
                <td>
                  <button>...</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Modules;
