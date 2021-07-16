import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Board from "./exercises/GuessGame/Board";
import Water from "./exercises/StateMatter/Water";
import ToDoList from "./exercises/ToDoList/ToDoList";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <section className="app">
        <Navbar />
        <Container>
          <Switch>
            <Route path="/water">
              <Water />
            </Route>
            <Route path="/game">
              <Board />
            </Route>
            <Route path="/todo">
              <ToDoList />
            </Route>
          </Switch>
        </Container>
      </section>
    </Router>
  );
}
