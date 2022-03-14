import Contact from './components/Contacts/Contact';
import Contacts from './components/Contacts/Contacts';
import Navbar from './components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './components/Context';
import 'font-awesome/css/font-awesome.min.css';
import AddContact from './components/Contacts/AddContact';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import About from './components/Pages/About';
import './App.css';
import PageNotFound from './components/Pages/PageNotFound';
import EditContact from './components/Contacts/EditContact';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
          <Navbar title="Contact List"/>
          {/* <Contact name="Omar Zairh" phone="0677833006" email="zairhomar00@gmail.com"/>
          <Contact name="Chaimae Zairh" phone="0677833007" email="chaimaezairh04@gmail.com"/>
          <Contact name="Nezha Belahcen" phone="0677833008" email="nezhabelahcen@gmail.com"/> */}
          <Switch>
            <Route path="/" exact component={Contacts} />
            <Route path="/contact/add" exact component={AddContact} />
            <Route path="/contact/edit/:id" exact component={EditContact} />
            <Route path="/about/:id" exact component={About} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
