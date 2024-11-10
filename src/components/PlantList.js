import React from "react";
import PlantCard from "./PlantCard";


function PlantList({plants,setPlants}) {
  return (
    <ul className="cards">{
      /* render PlantCards components in here */
      plants.map((plant)=>(
        <PlantCard key={plant.id} plant={plant} setPlants={setPlants}/>

      ))
      }</ul>
  );
}

export default PlantList;
