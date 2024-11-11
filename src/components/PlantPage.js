import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[plants ,setPlants]=React.useState([]);
  const[search,setSearch]=React.useState("");


  function handleAddPlant(newPlant){
    return setPlants([...plants,newPlant])

  }

  const filterPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase());
  });

  
  React.useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then((res)=>res.json())
    .then((data)=>setPlants(data))
  },[])

  
  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant} />
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={filterPlants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
