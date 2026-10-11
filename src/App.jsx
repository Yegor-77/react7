
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>Contact Book</h1>
        <p>Manage your contacts in one place</p>
      </header>

      <ContactForm />
      <ContactList />
    </main>
  );
}

export default App;
