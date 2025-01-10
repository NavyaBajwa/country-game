"use client";

import React, { useState } from 'react'

interface InputBoxProps {
    addCountry: (country: { name: string; flag: string }) => void;
    existingCountries: string[];
  }

  const InputBox: React.FC<InputBoxProps> = ({ addCountry, existingCountries }) => {
    const [input, setInput] = useState("")

    const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            console.log(event.currentTarget.value);

            const countryName = input.trim();

            if (countryName === "" || existingCountries.includes(countryName.toLowerCase())) {
                return;
            }    // return empty inputs

            try {
                const response = await fetch("https://countriesnow.space/api/v0.1/countries/flag/unicode", {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ country: countryName }),
                });

                const data = await response.json()

                if (data.error) {
                    return;
                } else {
                    const country = {
                        name: countryName,
                        flag: data.data.unicodeFlag,
                    }

                    addCountry(country);
                    setInput("")
                    console.log(data.data.unicodeFlag);

                };

            } catch (error) {
                console.error("Error fetching country data:", error);
                alert("An error occured. Please try again.");
            }
        }
        
    }
    return (
        <input 
            type="text"
            name="enter country"
            value={input}
            placeholder='Enter a country...'
            className='placeholder:italic rounded px-4 py-3 w-half max-w-[500px] w-full text-black font-paragraph border-4 border-black focus:outline-none focus:ring-2 focus:ring-tiffany'
            onKeyDown={handleKeyDown}
            onChange={(e) => setInput(e.target.value)}
        />
    );
};

export default InputBox;