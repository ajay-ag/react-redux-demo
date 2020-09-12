import React, { useState, useEffect } from 'react'

function HookPage() {

    const [count, setCount] = useState(5)
    const [userCount, setUserCountCount] = useState(5)


    useEffect(() => {
        setCount(count => count + 1)
    }, [userCount]);


    useEffect(() => {
        console.log('tst - ');
    }, []);



    return (


        <div className="flex flex-wrap -mx-4 overflow-hidden px-4">

            <div className="my-4 px-4 w-1/2 overflow-hidden text-center">

                <p className="font-normal text-4xl mb-5 ">{count}</p>

                <button
                    onClick={() => setCount(count => count + 1)}
                    className="bg-blue-500 mr-5  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Increment
                </button>

                <button
                    onClick={() => setCount(count => count - 1)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Decrement
                </button>

            </div>

            <div className="my-4 px-4 w-1/2 overflow-hidden text-center">
                <p className="font-normal text-4xl mb-5 "> User Count {userCount} </p>
                <button
                    onClick={() => setUserCountCount(count => count + 1)}
                    className="bg-blue-500 mr-5  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Increment
                </button>
                <button
                    onClick={() => setUserCountCount(count => count - 1)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Decrement
                </button>
            </div>

        </div>


    )
}

export default HookPage
