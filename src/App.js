import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 Bulunamad─▒</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
