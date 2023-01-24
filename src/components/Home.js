import React, { useState } from "react";
import Filter from "./Filter";
import Property from './Property'

function Home({ properties, handleMove, handleDelete }) {

  const [filter, setFilter] = useState('');

  const sorted = properties.sort((a, b) => {
    if (filter === "Price") {
        return a.price - b.price
    } else if (filter === "Distance") {
        return a.milesAway - b.milesAway
    } else if (filter === "Alphabetical") {
        return a.location > b.location ? 1 : -1
    }
  })

  // console.log('Filter: ', filter)

    return (
      <>
        <Filter value={filter} onFilterChange={setFilter} />
        {sorted.map(property => <Property key={property.id} property={property} handleMove={handleMove} handleDelete={handleDelete}/>)}
      </>
    )
}
export default Home



