import React from "react";
import "../styles/typo.css";
import "../components/components-styling/lecturers.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddLecturer() {
  const navigate = useNavigate();

  const [lecturerData, setLecturerData] = useState({
    id: Date.now(),
    name: "",
    surname: "",
    acad_degree: "",
    modules: [],
    date: formatDate(Date.now()),
  });

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
  
    return `${year}/${month}/${day} ${hours}:${minutes}`;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLecturerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleModuleSelect = (e) => {
    const selectedModules = Array.from(e.target.selectedOptions, (option) => option.value);

    setLecturerData((prevData) => ({
      ...prevData,
      modules: selectedModules,
    }));
  };

  const handleAddLecturer = (e) => {
    e.preventDefault();

    const storedData = localStorage.getItem("lecturers");
    const parsedData = storedData ? JSON.parse(storedData) : [];

    // Dodawanie nowego wykładowcy do tablicy
    const updatedLecturers = [...parsedData, lecturerData];

    // Zapisywanie danych w LocalStorage
    localStorage.setItem("lecturers", JSON.stringify(updatedLecturers));

    // Czyszczenie formularza po dodaniu wykładowcy
    setLecturerData({
      id: "",
      name: "",
      surname: "",
      acad_degree: "",
      modules: [],
      date: "",
    });

    navigate("/lecturers");
  };

  return (
    <>
      <h1>Dodawanie prowadzącego</h1>
      <p>
        Dodaj nowego prowadzącego do bazy danych. Aby <br />
        to zrobić wprowadź dane prowadzącego, wybierz <br />
        moduły które będzie mógł prowadzić.
      </p>

      <form onSubmit={handleAddLecturer}>
        <label>Moduły prowadzącego</label>
        <select
          multiple
          id="selectOption"
          name="modules"
          value={lecturerData.modules}
          onChange={handleModuleSelect}
        >
          <option value="Architektura systemów komputerowych">Architektura systemów komputerowych</option>
          <option value="Inżynieria oprogramowania">Inżynieria oprogramowania</option>
          <option value="Podstawy programowania">Podstawy programowania</option>
          <option value="Bazy danych">Bazy danych</option>
          <option value="Statystyka">Statystyka</option>
          <option value="Matematyka">Matematyka</option>
          <option value="Fizyka">Fizyka</option>
          <option value="Sieci komputerowe">Sieci komputerowe</option>
          <option value="Bezpieczeństwo informatyczne">Bezpieczeństwo informatyczne</option>
          <option value="Programowanie obiektowe">Programowanie obiektowe</option>
          <option value="Systemy operacyjne">Systemy operacyjne</option>
        </select>

        <input
          type="text"
          placeholder="Imię"
          name="name"
          value={lecturerData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Nazwisko"
          name="surname"
          value={lecturerData.surname}
          onChange={handleInputChange}
          required
        />
        <select
          id="selectOption"
          name="acad_degree"
          value={lecturerData.acad_degree}
          onChange={handleInputChange}
          required
        >
          <option value="">Wybierz...</option>
          <option value="magister">magister</option>
          <option value="profesor">profesor</option>
          <option value="doktor">doktor</option>
          <option value="inżynier">inżynier</option>
        </select>
        <button type="submit">
        Dodaj</button>
      </form>
    </>
  );
}

export default AddLecturer;
