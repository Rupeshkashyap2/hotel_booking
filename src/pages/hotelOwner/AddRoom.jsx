import React, { useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const AddRoom = () => {

    const [image, setImage] = useState({
        1: null,
        2: null,
        3: null,
        4: null,
    })

    const [input, setInput] = useState({
        roomType: "",
        pricePerNight: 0,
        amenities: {
            'Free Wi-Fi': false,
            'Air Conditioning': false,
            'Room Service': false,
            'Free Breakfast': false,
            'Mountain View': false,
            'pool Access': false,
            
        }
    })

    return (
        <form>
            <Title align='left' font='outfit' title='Add Room' subTitle='Fill in the 
            details carefully and accurate room details, pricing , and amenities, to 
            enhance the user booking experience'/>

            {/* Upload Image Section */}
            <p className="text-gray-800 mt-10">Images</p>
            <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
                {Object.keys(image).map((key) => (
                    <label htmlFor={`roomImage${key}`} key={key}>
                        <img className='max-h-13 cursor-pointer opacity-80'
                        src={image[key] ? URL.createObjectURL(image[key]) : assets.uploadArea} alt=""/>
                        <input type="file" accept="image/*" id={`roomImage${key}`} hidden
                        onChange={e=> setImage({...image, [key]: e.target.files[0]})}/>
                    </label>
                ))}
            </div>

            <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
                <div className="flex-1 max-w-48">
                    <p className="text-gray-800 mt-4">Room Type</p>
                    <select value={input.roomType} onChange={e=> setInput({...input, roomType: e.target.value})}
                    className="border border-gray-300 mt-1 rounded p-2 w-full text-gray-500">
                        <option value="">Select Room Type</option>
                        <option value="Single">Single</option>
                        <option value="Double">Double</option>
                        <option value="Suite">Suite</option>
                        <option value="Deluxe">Deluxe</option>
                    </select>
                </div>

                <div className="flex-1 max-w-48">
                    <p className="text-gray-800 mt-4">
                        Price <span className="text-xs">/ Night</span>
                    </p>
                    <input type="number" value={input.pricePerNight} onChange={e=> setInput({...input, pricePerNight: e.target.value})} 
                    className="border border-gray-300 mt-1 rounded p-2 w-full text-gray-500" placeholder="Enter Price"/>
                </div>

            </div>

            <p className="text-gray-800 mt-4">Amenities</p>
            <div className="flex flex-col flex-wrap mt-1 text-gray-500 max-w-sm">
                {Object.keys(input.amenities).map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={input.amenities[amenity]}
                            onChange={(e) =>
                                setInput({
                                    ...input,
                                    amenities: {
                                        ...input.amenities,
                                        [amenity]: e.target.checked
                                    }
                                })
                            }
                        />
                        <label className="text-gray-500">{amenity}</label>
                    </div>
                ))}

            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-6 hover:bg-blue-600 transition-colors">
                Add Room
            </button>
        </form>
    )
}

export default AddRoom