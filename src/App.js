import "./App.css";
import Person from "./components/Person";

export default function App() {
  return (
    <div className="App">
      <Person
        name="Leonardo"
        age={22}
        photo="https://via.placeholder.com/150"
        job="Desenvolvedor"
      />
    </div>
  );
}
