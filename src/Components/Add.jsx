import React, { useState } from "react";
import axios from "axios";
const Add = () => {
  const [query, setQuery] = useState(""); // query useState'ini kullandık (e) input'un bir özelliği
  const [results, setResults] = useState([]);

  function onChange(e) {
    setQuery(e.target.value);

    axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=3f07b70ca2f276f05519205855a206b8&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
    .then((data) => setResults(data.results)); // setResults içerisine gir, data'nın içerisindeki results'ı al. artık bu state'in içine atmış oldum bunu içersinde isimleri döndürcem.
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img
            src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg"
            alt="img"
          />
          <div className="titles">
            <h1>Hoş Geldiniz.</h1>
            <h2>
              Milyonlarca film, TV şovu, yerli ve yabancı 10.000 saatten fazla
              içerik ayda sadece ₺15.90 Şimdi keşfedin.
            </h2>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              onChange={onChange} // query useState'ini kullandık (e) input'un bir özelliği
              placeholder="Film,dizi,kişi ara..."
            />
          </div>

          {results.map((movie) => (
            <h1>{movie.title}</h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Add;
