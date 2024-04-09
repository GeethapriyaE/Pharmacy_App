import React from 'react';

const HomeSectionCard = ({ product }) => {
    // Function to truncate the description
    const truncateDescription = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substr(0, maxLength) + '...';
    };

    return (
        <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden mx-3 my-4 border">
            <div className='h-[13rem] w-[10rem] flex items-center justify-center'>
                <img 
                    className='object-cover w-full h-full' 
                    src={product.imageURL} 
                    alt="" 
                    style={{ objectFit: 'contain' }} 
                />
            </div>
            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>{product.title}</h3>
                {/* Display truncated description */}
                <p className='mt-2 text-sm text-gray-500'>
                    {truncateDescription(product.description, 100)} {/* Limiting to 100 characters */}
                </p>
            </div>
        </div>
    );
};

export default HomeSectionCard;
