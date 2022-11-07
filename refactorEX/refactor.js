//refactor this code to have individual state  for title, actors and locations


import React, { useState } from "react";

function Musical() {
   const [state, setState] = useState({
    title: "Best Musical Ever",
    actors: ["George Wilson", "Tim Hughes", "Larry Clements"],
    locations: {
      Chicago: {
        dates: ["1/1", "2/2"], 
        address: "chicago theater"}, 
      SanFrancisco: {
        dates: ["5/2"], 
        address: "sf theater"
      }
    }
  })
 }

// as above refactored

function MusicalRefactored() {
    const [title, setTitle] = useState( {
        title: "Best Musical Ever"
    })
    const [actors, setActors] = useSTate ({
        actors: ["George Wilson", "Tim Hughes", "Larry Clements"]
    })
    const [locations, setLocations] = useState( {
        Chicago: {
            dates: ["1/1", "2/2"],
            address: "chigago theater"
        },
        sanFrancisco: {
            dates: ["5/2"],
            address: "sf theater"
        }
    })
  
}
