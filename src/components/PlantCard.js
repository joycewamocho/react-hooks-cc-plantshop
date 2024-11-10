import React from "react";

function PlantCard({plant, setPlants}) {
  const[instock,setInstock]=React.useState(true)
  const[newPrice,setNewPrice]=React.useState(plant.price)

  function handleStockChange(){
    setInstock((prevStatus)=> !prevStatus)
  }

  function handlePriceChange(event){
    setNewPrice(event.target.value)

  }

  //update price

  function handleUpdatePrice(){
    const updatePrice = parseFloat(newPrice)

    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({price:updatePrice})
    })
    .then((res)=> res.json())
    .then((updatedPlant)=>{
      setPlants((prevPlants)=>(
        prevPlants.map((prevP)=>(prevP.id === plant.id ? updatedPlant:prevP))
      ))
        
    })

  }
  //delete plant
  
  function handleDeletePlant(){
    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method:"DELETE",
    })
    .then(()=>{
      setPlants((prevPlants)=> 
        prevPlants.filter((prevP)=>prevP.id !== plant.id))
    })
  }


  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {/* input to update price */}
      <input type="number" name="price" value={newPrice}step="0.01" placeholder="Update Price" onChange={handlePriceChange}/>
      <button onClick={handleUpdatePrice}>Update Price</button>
      <button onClick={handleDeletePlant}>Delete Plant</button><br></br>
      
      {instock ? (
        <button className="primary" onClick={handleStockChange}>In Stock</button>
      ) : (
        <button onClick={handleStockChange}>Out of Stock</button>
      )}
      
    </li>
  );
}

export default PlantCard;
