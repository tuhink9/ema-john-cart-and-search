import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';
const ReviewItem = (props) => {
    const {product, handleRemoveItem} = props;
    const {name, img, price, shipping, quantity} = product;
    return (
        <div className='review-container'>
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
            <div className='info-container'>
                <h1 title={name}>{name.length > 20 ? name.slice(0, 18) + '...' : name}</h1>
                <p><small>Price: ${price}</small></p>
                <p><small>Shipping: ${shipping}</small></p>
                <p><small>Quantity: {quantity}</small></p>
            </div>
            <div className='dlt-container'>
                <button className='dlt-btn' onClick={()=>handleRemoveItem(product)}><FontAwesomeIcon className='dlt-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default ReviewItem;