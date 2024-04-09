import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className='productcard w-[15rem] transition-all cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden mx-3 my-4 border'>
      <div className='h-[13rem] w-[10rem] flex items-center justify-center'>
        <img 
          className='object-cover w-full h-full' 
          src={product.imageURL} 
          alt="" 
          style={{ objectFit: 'contain' }} 
        />
      </div>
      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold opacity-60'>{product.title}</p>
          <p className=''>{product.Manufacturer}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p className='font-semibold'>₹{product.discountedPrice}</p>
          <p className='line-through opacity-50'>₹{product.price}</p>
          <p className='text-green-600 font-semibold'>{product.discountPercent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
