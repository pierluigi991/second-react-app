import logo from "./logo.svg";
import "./App.css";
import Button from "./component/Button";
import Image from "./component/Image";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Image img="https://www.leccestore.com/wp-content/uploads/2022/04/Immagine-WhatsApp-2022-12-19-ore-18.40.31.jpg" />
        <Button testo="tesserati" />
      </header>
    </div>
  );
}

export default App;
