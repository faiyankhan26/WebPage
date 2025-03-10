import React from 'react'
import { WEBSITE_NAME, WEBSITE_DESCRIPTION, BUTTON, TITLE, CARD_DESCRIPTION } from './config';
import Card from "./Component/Card";

function App() {
    return (
        <div>
            <div className='flex justify-center mt-20'>
                <h1 className=' my-5 mx-10 font-bold text-5xl'>
                    {WEBSITE_NAME}
                </h1>
            </div>

            <p className=' mx-10 my-1 font-normal text-xl text-center'>
                {WEBSITE_DESCRIPTION}
            </p>

            <div className='flex justify-center'>
                <button className='bg-blue-500 m-5 px-5 py-2 text-white rounded-md'>
                    {BUTTON}
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-10">
                <Card
                    title={TITLE}
                    description={CARD_DESCRIPTION}
                />
                <Card
                    title="Adventure Awaits"
                    description="Discover new experiences and travel the world."
                />
                <Card
                    title="City Lights"
                    description="Experience the vibrant nightlife of metropolitan cities."
                />
            </div>

        </div>
    )
}

export default App