import React, { useState } from "react";

const Add = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" />
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
              onChange={(e) => setQuery(e.target.value)} // query useState'ini kullandık (e) input'un bir özelliği
              placeholder="Film,dizi,kişi ara..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;