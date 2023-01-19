import React from "react";
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react'


function AllProperties({ photo, location, price, miles}) {

    return (
        <div>
            <Card>
                <Image src={photo}/>
                <Card.Content>
                    <Card.Header>{location}</Card.Header>
                    <Card.Meta> <span className='date'>{miles} Miles Away</span></Card.Meta>
                    <Button primary>Price Per Night ${price}</Button>
                    <Button secondary>Book!</Button>
                </Card.Content>
            </Card> 
         </div>
    )
}
export default AllProperties



