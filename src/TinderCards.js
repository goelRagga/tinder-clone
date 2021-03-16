
import React, { useEffect, useState } from 'react'

import TinkerCard from "react-tinder-card"
import './TinderCards.css'
import axios from './axios'

function TinderCards() {

    const [people,setPeople]=useState([]);

    useEffect(() =>{
        async function fetchData() {
            const req= await axios.get("/tinder/cards");
            setPeople(req.data);
        }
        fetchData();

        
    },[])
    console.log("Data",people);

    const swiped= (direction, nameToDelete) =>{
        console.log("removing: " + nameToDelete);
    };

    const outofFrame = (name) => {
        console.log(name+ "left the screen!");
    };

    return (
        <div className="tinkerCards">
            <div className="tinkerCards__cardContainer">
                {people.map((person) =>(
                      <TinkerCard 
                className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outofFrame(person.name)}
                >
                    <div style={{ backgroundImage: `url(${person.imgUrl})`}}
                        className="card">
                            <h3>{person.name}</h3>
                            
                        
                    </div>

                </TinkerCard>
                    
                ))}
              

        

            </div>
            
        

        </div>
    )
}

export default TinderCards
