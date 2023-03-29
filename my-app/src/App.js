import css from "./App.module.css";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
// import NavBarSimple from "./components/NavBarSimple";

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      <NavBarForm />
      {/* <NavBarSimple /> */}
    </div>
  );
}

export default App;
