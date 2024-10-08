import React, {useState} from 'react'
import axios from 'axios';

const Food = () => {

    const [foodTitle, setFoodTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');

    const foodData = {
        foodTitle,
        description,
        img,
        price,
        category
    };

    const submitForm = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/foods/create-food', foodData);
            alert('Food item added successfully!');
            // Reset form fields after submission
            setFoodTitle('');
            setDescription('');
            setCategory('');
            setImg('');
            setPrice('');
        } catch (error) {
            console.error('There was an error adding the food item:', error);
            alert('Error: Could not add food item.');
        }
    }

    return (
        <form className="container mt-5 col-6" onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="foodTitle" className="form-label">Title</label>
          <input 
            type="text" 
            id="foodTitle" 
            className="form-control" 
            placeholder="Food name" 
            required 
            value={foodTitle} 
            onChange={(e) => setFoodTitle(e.target.value)} 
          />
        </div>
  
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input 
            type="text" 
            id="description" 
            className="form-control" 
            required 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>
  
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input 
            type="text" 
            id="category" 
            className="form-control" 
            required 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
          />
        </div>
  
        <div className="mb-3">
          <label htmlFor="img" className="form-label">Image</label>
          <input 
            type="text" 
            id="img" 
            className="form-control" 
            required 
            value={img} 
            onChange={(e) => setImg(e.target.value)} 
          />
        </div>
  
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input 
            type="number" 
            id="price" 
            className="form-control" 
            required 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
          />
        </div>
  
        <div className="mb-3 form-check">
          <input 
            type="checkbox" 
            id="terms" 
            className="form-check-input" 
            required 
          />
          <label htmlFor="terms" className="form-check-label">
            I agree with the <a href="#" className="link-primary">terms and conditions</a>
          </label>
        </div>
  
        <button 
          onClick={submitForm} 
          className="btn btn-primary"
        >
          Add New Food
        </button>
      </form>

      

    )
}

export default Food