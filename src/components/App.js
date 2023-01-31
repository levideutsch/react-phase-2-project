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
    const [reload, setReload] = useState("")

    useEffect(() => {
        fetch("http://localhost:3004/properties")
        .then(res => res.json())
        .then(properties => {
          // split our response into two pages
          setProperties(properties.filter(p => !p.delisted))
          setDelisted(properties.filter(p => p.delisted))
        })
    }, [reload])

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

    function handleDelete(deletedProperty) {
      const updatedItems = properties.filter(item => item.id !== deletedProperty.id)
      const updatedDelisted = delisted.filter(item => item.id !== deletedProperty.id)
      setProperties(updatedItems)
      setDelisted(updatedDelisted)
    }

  return (
    <Router>
      <h1 id="not"> Not
        <img id="not-air-bb" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"}></img>
      </h1>
      <NavBar/>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home properties={properties}
                  handleMove={handleDelist} 
                  handleDelete={handleDelete}
                  setReload={setReload}
                  />
          </Route>
          <Route exact path="/add">
            <Add onAdd={handleAdd}/>
          </Route>
          <Route exact path="/delisted">
            <Home properties={delisted}
                  handleMove={handleRelist} 
                  handleDelete={handleDelete}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
