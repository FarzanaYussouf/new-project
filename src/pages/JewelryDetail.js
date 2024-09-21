import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const JewelryDetail = () => {
    const { id } = useParams(); // Get the jewelry ID from the URL
    const [jewelry, setJewelry] = useState(null);
    const [showModal, setShowModal] = useState(false); // State to toggle modal visibility
    const [updatedJewelry, setUpdatedJewelry] = useState({
        jewelryTitle: '',
        description: '',
        img: '',
        price: '',
        category: ''
    });

    useEffect(() => {
        const fetchJewelryDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/jewelry/jewelry-detail/${id}`);
                setJewelry(response.data);
                setUpdatedJewelry(response.data); // Set the updated jewelry data with the fetched data
            } catch (error) {
                console.log(error);
            }
        };

        fetchJewelryDetail();
    }, [id]);

    const navigate = useNavigate();

    // Function to handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedJewelry((prevJewelry) => ({
            ...prevJewelry,
            [name]: value
        }));
    };

    // Function to handle the update
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/jewelry/update-jewelry/${id}`, updatedJewelry);
            alert('Jewelry item updated successfully');
            setShowModal(false); // Close modal after successful update
            navigate('/'); // Redirect to the home page or desired page
        } catch (error) {
            console.log(error);
        }
    };

    // Function to delete the jewelry item
    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this jewelry item?')) {
            try {
                await axios.delete(`http://localhost:8000/api/jewelry/delete-jewelry/${id}`);
                alert('Jewelry item deleted successfully');
                navigate('/'); // Redirect to the home page after deletion
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="container my-5">
            {jewelry && (
                <div className="card mb-4 shadow-sm">
                    <img src={jewelry.img} alt={jewelry.jewelryTitle} className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} />
                    <div className="card-body">
                        <h1 className="card-title display-4 mb-4">{jewelry.jewelryTitle}</h1>
                        <p className="card-text text-muted mb-4">{jewelry.description}</p>
                        <p className="h5 font-weight-bold text-primary mb-2">Price: ${jewelry.price}</p>
                        <p className="text-muted">Category: {jewelry.category}</p>

                        {/* Buttons for Update and Delete */}
                        <div className="d-flex justify-content-between mt-4">
                            <button
                                onClick={() => setShowModal(true)}
                                className="btn btn-primary"
                            >
                                Update
                            </button>
                            <button
                                onClick={handleDelete}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal for Update */}
            {showModal && (
                <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Update Jewelry Item</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleUpdate}>
                                    <div className="mb-3">
                                        <label className="form-label">Title</label>
                                        <input
                                            type="text"
                                            name="jewelryTitle"
                                            value={updatedJewelry.jewelryTitle}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <input
                                            type="text"
                                            name="description"
                                            value={updatedJewelry.description}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Category</label>
                                        <input
                                            type="text"
                                            name="category"
                                            value={updatedJewelry.category}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Image URL</label>
                                        <input
                                            type="text"
                                            name="img"
                                            value={updatedJewelry.img}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Price</label>
                                        <input
                                            type="number"
                                            name="price"
                                            value={updatedJewelry.price}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                            className="btn btn-secondary me-2"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JewelryDetail;
