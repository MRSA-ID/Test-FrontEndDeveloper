import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header";
import Navbar from "./component/navbar";
import MainContent from "./component/mainContent";
import Contact from "./component/form_contact";
import Footer from "./component/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <MainContent />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
