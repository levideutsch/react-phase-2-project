import React, { useState, useEffect } from "react";
import { Button, Form, Select, Transition } from 'semantic-ui-react'

function Add({ onAdd }) {

    const [formData, setFormData] = useState({
        id: 0,
        photo: "",
        location: "",
        price: 0,
        milesAway: 0
    })
    const [cities, setCities] = useState([])
    // const [formKey, setFormKey] = useState(5)
    // setFormKey(formKey + 1)

    function handleChange(_, { name, value }) {
        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        fetch("http://localhost:3004/properties", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: formData.id,
            photo: formData.photo,
            location: formData.location,
            price: parseInt(formData.price),
            milesAway: parseInt(formData.milesAway),
        })
        })
        .then((response) => response.json())
        .then((newItem) => onAdd(newItem))
    }

    useEffect(() => {
        fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
        .then(response => response.json())
        .then((cities) => setCities(cities.data))
    }, [])
    // console.log(cities)

    const cityList = cities.map((city, index) => {
        return { key: index, value: `${city.city}, ${city.country}`, text: `${city.city}, ${city.country}`}
    })
// console.log(cityList)
    return (
        <div>
            <h1 id="add-new-property">Add New Property</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group unstackable widths={2}>
                <Form.Input label='Url' name="photo" placeholder='Enter Image Url' value={formData.photo} onChange={handleChange} />
                {/* <Form.Input label='Location' name="location" placeholder='Add Location' value={formData.location} onChange={handleChange}/> */}
                <Form.Select name="location" label="Location"
                    placeholder="Select your location"
                    onChange={handleChange}
                    value={formData.location}
                    options={cityList} />
                </Form.Group>
                <Form.Group widths={2}>
                <Form.Input label='Price' name="price" placeholder='Add Price' value={formData.price} onChange={handleChange}/>
                <Form.Input label='Distance' name="milesAway" placeholder='Add Distance' value={formData.milesAway} onChange={handleChange}/>
                </Form.Group>
                <Button id="submit-button" type='submit'>Submit</Button>
            </Form>
          
            <h1 id="new-item">New Items Will Be Addeed To Home Page</h1>
          
        </div>
    )
}
export default Add