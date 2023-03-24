import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

const Navbar = () => {
  return (

    <nav>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>

  );
};

const Home = () => {
  return <h1>Welcome to my website!</h1>;
};

const About = () => {
  return <h1>About page</h1>;
};

const Contact = () => {
  return <h1>Contact page</h1>;
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
