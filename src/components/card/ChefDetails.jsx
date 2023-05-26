/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaRegHandPointRight } from 'react-icons/fa';
import RecipesDetails from './RecipesDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefDetails = ({data}) => {
    const {chef_name,years_of_experience,num_recipes,like,recipes,chef_picture,bio} = data
    const [disabled , setDisabled] = useState(false)
    // const data =props.data
    // console.log(data)
    const handelToastyfy = () =>{
        setDisabled(true)
toast('Add to favorite')
    }
    if(!recipes){
        return   <div className='grid justify-center items-center m-10' role="status">
        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
    }
    return (
        <div className='container mx-auto'>
            <div className="max-w-sm md:max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div >
        <img className="rounded-t-lg" src={chef_picture} alt="" />
    </div>
    <div className="p-5">
       
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{chef_name}</h5>
        
        <div>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Years Of Experience : <span>{years_of_experience}</span></div>
        <div>Number Of Recipes : <span>{num_recipes}</span></div>
        </div>
        <div className='pb-3'>
            <h1 className='text-center font-black'>My Bio</h1>
            <p>{bio}</p>
        </div>
        <div className='flex justify-between'>
       <button onClick={handelToastyfy} disabled={disabled} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Favorite
            <ToastContainer></ToastContainer>
        </button>
        <div className='flex items-center justify-center'> <FaRegHandPointRight></FaRegHandPointRight><p>{like}</p></div>
        </div>
    </div>
</div>
<div className='my-5 px-5'>
    {
        recipes.map((recipe ,i) => <RecipesDetails
        key={i}
        data = {recipe}
        bio = {bio}
        ></RecipesDetails>)
    }
</div>
        </div>
    );
};

export default ChefDetails;