/* eslint-disable react/prop-types */
import React from 'react';
import { FaRegHandPointRight } from 'react-icons/fa';
import { NavLink} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Card = ({chefCard}) => {
    // const data = useLoaderData()
    // const {bio} = data
    // console.log(data[0].recipes[0].ingredients)
    const {id,chef_name,like,num_recipes,years_of_experience,chef_picture} = chefCard;
    console.log(id)
    return (
        <div className='container mx-auto '> 
            
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className='' >
        <img className="rounded-t-lg h-60 w-full" src={chef_picture} alt="" />
    </div>
    <div className="p-5">
       
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{chef_name}</h5>
        
        <div>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Years Of Experience : <span>{years_of_experience}</span></div>
        <div>Number Of Recipes : <span>{num_recipes}</span></div>
        </div>
        <div className='flex justify-between my-5'>
       <NavLink to={`/recipes/${id}`}> <button  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            view Recipes
        </button></NavLink>
        <div className='flex items-center justify-center'> <FaRegHandPointRight></FaRegHandPointRight><p>{like}</p></div>
        </div>
    </div>
</div>

        </div>
    );
};

export default Card;