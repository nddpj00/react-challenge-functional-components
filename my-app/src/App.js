import css from "./App.module.css";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
// import Content from "./components/Content";
import ContentHooks from "./components/ContentHooks"
// import NavBarSimple from "./components/NavBarSimple";

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      <NavBarForm />
      {/* <Content /> */}
      <ContentHooks />
      {/* <NavBarSimple /> */}
    </div>
  );
}

export default App;
