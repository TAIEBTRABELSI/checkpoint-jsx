import "./App.css";
import tibo from "./tibo.jpg";
import "./styles.css";

function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title red">Taieb</h1>

      <img src={tibo} className= "Photo" alt="" width="320" height="240"/>
      <br />
      <img src="tibo2.jpg" className="Photo" alt="" width="320" height="240"/>
      <br />
      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
