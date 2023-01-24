import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Add from "./Add";
// import Favorites from "./Favorites";
import NavBar from "./NavBar"
// import Filter from "./Filter";


function App() {
    const [properties, setProperties] = useState([])
    const [delisted, setDelisted] = useState([])

    useEffect(() => {
        fetch("http://localhost:3004/properties")
        .then(res => res.json())
        .then(properties => {
          // split our response into two pages
          setProperties(properties.filter(p => !p.delisted))
          setDelisted(properties.filter(p => p.delisted))
        })
    }, [])

    function handleDelist(property) {
      setProperties(properties.filter(p => p.id != property.id))
      setDelisted([ ...delisted, property ])
    }

    function handleRelist(property) {
      setDelisted(delisted.filter(p => p.id != property.id))
      setProperties([ ...properties, property ])
    }

    function handleAdd(property) {
      setProperties([ ...properties, property ])
    }

    function handleDelete(property) {
      const deletedItem = properties.map(item => item.id !== property.id)
      setProperties(deletedItem)
    }

  return (
    <Router>
      <h1 id="not-air-bb">Not AirB&B </h1>
      <NavBar/>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home properties={properties}
                  handleMove={handleDelist} 
                  handleDelete={handleDelete}/>
          </Route>
          <Route exact path="/add">
            <Add onAdd={handleAdd}/>
          </Route>
          <Route exact path="/delisted">
            <Home properties={delisted}
                  handleMove={handleRelist} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
