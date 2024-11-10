import React from "react";

function NewPlantForm({handleAddPlant}) {
  const[formData,setFormData]=React.useState({
    name:"",
    image:"",
    price:""
  })

  function handleChange(event){
    setFormData({
      ...formData,
      [event.target.name]:event.target.value
    })
  }

  const newPlant={
    name:formData.name,
    image:formData.image,
    price:parseFloat(formData.price),
  }
  function handleSubmit(event){
    event.preventDefault();
    fetch("http://localhost:6001/plants",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(newPlant)
    })
    .then((res)=>res.json())
    .then((addedPlant)=>handleAddPlant(addedPlant))

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
