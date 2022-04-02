import React from 'react';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import useCart from '../useProducts/useCart';
import useProducts from '../useProducts/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts([]);
    const [cart, setCart] = useCart([]);

    const handleRemoveItem = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
    }
    return (
        <div className='shop-container'>
            <div className="producs-container">
                {
                    products.map(product=><ReviewItem 
                        key={product.id}
                        handleRemoveItem={handleRemoveItem}
                        product={product}
                        ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};


export default Orders;