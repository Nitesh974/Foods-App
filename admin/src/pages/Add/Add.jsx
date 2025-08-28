import React, { useState } from 'react';
import './Add.css';
import { assets, url } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Starters' 
    });

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (!image) {
            toast.error('Image not selected');
            return;
        }

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', Number(data.price));
        formData.append('category', data.category);
        formData.append('image', image);

        try {
            const response = await axios.post(`${url}/api/food/add`, formData);
            if (response.data.success) {
                toast.success(response.data.message);
                setData({
                    name: '',
                    description: '',
                    price: '',
                    category: 'Starters'
                });
                setImage(null);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error adding food item:', error);
            toast.error('Failed to add food item');
        }
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className="add">
            <form className="flex-col" onSubmit={onSubmitHandler}>
                <div className="add-img-upload flex-col">
                    <p>Upload image</p>
                    <input
                        onChange={(e) => { setImage(e.target.files[0]); e.target.value = ''; }}
                        type="file"
                        accept="image/*"
                        id="image"
                        hidden
                    />
                    <label htmlFor="image">
                        <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
                    </label>
                </div>
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input
                        name="name"
                        onChange={onChangeHandler}
                        value={data.name}
                        type="text"
                        placeholder="Type here"
                        required
                    />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product description</p>
                    <textarea
                        name="description"
                        onChange={onChangeHandler}
                        value={data.description}
                        type="text"
                        rows={6}
                        placeholder="Write content here"
                        required
                    />
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product category</p>
                        <select name="category" onChange={onChangeHandler} value={data.category}>
                            <option value="Starters">Starters</option>
                            <option value="Main Course">Main Course</option>
                            <option value="Breads/Rotis">Breads/Rotis</option>
                            <option value="Rice Dishes">Rice Dishes</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sides">Sides</option>
                            <option value="South Indian">South Indian</option>
                            <option value="Fast Food">Fast Food</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product Price</p>
                        <input
                            type="Number"
                            name="price"
                            onChange={onChangeHandler}
                            value={data.price}
                            placeholder="₹"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="add-btn">ADD</button>
            </form>
        </div>
    );
};

export default Add;
