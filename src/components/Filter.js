import React from "react";




function Filter({ value, onFilterChange }) {
  
  function onChecked(event) {
    onFilterChange(event.currentTarget.value);
  }

    return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={value === 'Price'}
          onChange={onChecked}
        />
        Price
      </label>
      <label>
        <input
          type="radio"
          value="Distance"
          name="sort"
          checked={value === 'Distance'}
          onChange={onChecked}
        />
        Distance
      </label>
      <label>
        <input
          type="radio"
          value="Alphabetical"
          name="sort"
          checked={value === 'Alphabetical'}
          onChange={onChecked}
        />
        Alphabetical
      </label>
      </div>
    )
}

export default Filter