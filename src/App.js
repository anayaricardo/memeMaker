//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  }

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  }

  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  }

  const onClickExport = function (evento) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
    var img = canvas.toDataURL("image/png", 0, 0);
    var link = document.createElement('a');
    link.href = img;
    link.download = 'meme.png';
    link.click();
  });
  }

  return (
    <div className="App">
      <h1>Creador de Memes</h1>
      <p>Selecciona una de las siguientes imágenes y añade el texto en las lineas 1 y 2.</p>
      
      {/* Select picker de memes */}
      <select onChange={onChangeImagen}>
        <option value="Default">Creador de Memes</option>
        <option value="Latrell Spencer">Latrell Spencer</option>
        <option value="Jerry">Jerry</option>
        <option value="Dog">Dog</option>
        <option value="Batman & Robin">Batman & Robin</option>
        <option value="Nerd Guy">Nerd Guy</option>
        <option value="Disaster Girl">Disaster Girl</option>
        <option value="Shrek">Shrek</option>
      </select>
      
      {/* Input text - Primer linea */}
      <input onChange={onChangeLinea1} type ="text" placeholder="Linea 1" />

      {/* Input text - Segunda linea */}
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2"/>

      <div className="meme" id="meme">
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} alt="Selecciona una imagen" />
      </div>
      
      {/* Boton exportar */}
      <button onClick={onClickExport}>Descargar</button>
      <footer>
        <p>Creado por <a href="https://www.linkedin.com/in/ricardoanaya/" target="_blank" rel="noopener noreferrer">Ricardo</a></p>
        <p></p>
      </footer>
    </div>
  );
}

export default App;
