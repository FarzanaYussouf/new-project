import React, { useState } from 'react';
import axios from 'axios';

const Jewelry = () => {
    const [jewelryTitle, setJewelryTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');

    const jewelryData = {
        jewelryTitle,
        description,
        img,
        price,
        category
    };

    const submitForm = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/jewelrys/create-jewelry', jewelryData);
            alert('Jewelry item added successfully!');
            // Reset form fields after submission
            setJewelryTitle('');
            setDescription('');
            setCategory('');
            setImg('');
            setPrice('');
        } catch (error) {
            console.error('There was an error adding the jewelry item:', error);
            alert('Error: Could not add jewelry item.');
        }
    };

    return (
        <form className="container mt-5 col-6" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
                <label htmlFor="jewelryTitle" className="form-label">Title</label>
                <input 
                    type="text" 
                    id="jewelryTitle" 
                    className="form-control" 
                    placeholder="Jewelry name" 
                    required 
                    value={jewelryTitle} 
                    onChange={(e) => setJewelryTitle(e.target.value)} 
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
                Add New Jewelry
            </button>
        </form>
    );
};

export default Jewelry;
