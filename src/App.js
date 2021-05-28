import "./App.css";
import { Container } from "semantic-ui-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Title from "./Title";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
function App2() {
  return (
    <BrowserRouter>
      <Container>
        <Title />
        <Switch></Switch>

        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App2;

ReactDOM.render(<App2 />, rootElement);
