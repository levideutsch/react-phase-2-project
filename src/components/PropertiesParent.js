import React, {useState, useEffect} from "react";
import AllProperties from "./AllProperties";
import SingleProperty from "./SingleProperty";


function PropertiesParent() {

    const [properties, setProperties] = useState([])

    useEffect(() => {
        fetch("http://localhost:3004/properties")
        .then(res => res.json())
        .then(properties => setProperties(properties))
    }, [])

    return (
        <div>
           
            {properties.map((property) => {
                return  <AllProperties key={property.id} photo={property.photo} location={property.location} price={property.price} miles={property.milesAway} property={property}/>
            })}
           
            <SingleProperty />
        </div>
    )
}
export default PropertiesParent