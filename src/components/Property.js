import React, { useState } from "react";
import { Card, Image, Button } from 'semantic-ui-react'


function Property({ property, handleMove, handleDelete }) {
  const { id, photo, location, price, milesAway, delisted } = property

  function handleListChange() {
    fetch(`http://localhost:3004/properties/${id}`, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ delisted: !delisted })
    })
    .then(res => res.json())
    .then(() => handleMove({...property, delisted: !delisted}))
  }

    function handleDeleteClick() {
        fetch(`http://localhost:3004/properties/${property.id}`, {
          method: "DELETE",
        })
        .then((response) => response.json())
        .then(() => handleDelete(property))
      }
     






    
    return (
        <div id="li-card">
            {/* <Filter onChecked={handleChecked}/> */}
            <br></br>

            <ul>
                {/* {itemsToDisplay} */}
                <li>
             <Card>
                    <Image src={photo}/>
                    <Card.Content>
                    <Card.Header>{location}</Card.Header>
                    <Card.Meta> <span className='date'>{milesAway} Miles Away</span></Card.Meta>
                    <Button primary>Price Per Night ${price}</Button>
                    <Button secondary onClick={handleListChange}>{delisted ? 'Re-List' : 'De-List'}</Button>
                    <Button secondary onClick={handleDeleteClick}>Delete</Button>
                    </Card.Content>
            </Card> 
            </li>
            </ul>
         </div>
    )
}

export default Property
