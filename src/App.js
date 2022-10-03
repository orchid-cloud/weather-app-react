import "./App.css";
import DataStorage from "./DataStorage";

export default function App() {
  return (
    <div className="App">
      <DataStorage />
      <p className="gitlink">
        <a
          href="https://github.com/orchid-cloud/weather-app-react.git"
          target="blank"
        >
          Open source code
        </a>
      </p>
    </div>
  );
}
