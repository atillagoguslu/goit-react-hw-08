import "./App.css";
import ContactList from "./components/ContactList.jsx";
import SearchBox from "./components/SearchBox.jsx";
import ContactForm from "./components/ContactForm.jsx";

function App() {
  return (
    <div className="container">
      <h1 className="phonebook-title">Phonebook with MockAPI</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
