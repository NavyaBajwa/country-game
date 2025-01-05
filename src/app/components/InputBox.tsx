import React from 'react'

const InputBox = () => {
    return (
        <input 
            type="text"
            name="enter country"
            placeholder='Enter a country'
            className='rounded px-4 py-3 w-half max-w-[500px] w-full text-black font-paragraph border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tiffany'
        />
    );
};

export default InputBox;