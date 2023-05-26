import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Card from '../card/Card';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <div className='md:flex container mx-auto justify-evenly items-center gradient p-10 '>
                <div className='p-5'>
                    <h1>DELICIOUS ASIAN CUISINE</h1>
                    <h1>Welcome to our site </h1>
                    <p>Test our recipe</p>
                </div>
                <div> <img src="/../../../pexels-photo-1267320.jpeg" alt="" /></div>
            </div>
            {/* <div> <NavLink to={'/card'}> card </NavLink>  </div> */}
            {/* <Card></Card> */}
            <div className=' container mx-auto gap-6 items-center justify-center grid  md:grid-cols-3'>
                {
                    data.map(chefCard => <Card
                        key={chefCard.id}
                        chefCard={chefCard}
                    ></Card>)
                }
            </div>
            <div className='container mx-auto md:flex gap-10 items-center justify-around m-10'>
                <div className='basis-1/2'>
                    <h1 className='text-center font-black text-2xl'>Meet our owner</h1>
                    <p className='text-center '>Name: S. M. Nahid Hasan</p>
                    <p className='text-center '>Email: example@email.com</p>

                </div>
                <div className='basis-1/2'>
                    <img className=' ' src="https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=1024x1024&w=is&k=20&c=N8tCKAiS77uX8ZGltdjkhzh5pXzvuNHg48acJETZfs8=" alt="" />
                </div>
            </div>
            <div>
                <div>
                    <h1 className='container mx-auto text-center font-black text-3xl m-3'>Our food collection</h1>
                </div>
                <div  className='container mx-auto md:flex gap-10 items-center justify-around m-10'>
                    <div className='my-2'>
                        <img className='h-60' src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className='my-2'>
                        <img className='h-60'  src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className='my-2'>
                        <img className='h-60'  src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;