import React, { useEffect, useState } from 'react'
import Chatmessage from './Chatmessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from './utils/ChatSlice';
import { useSearchParams } from 'react-router-dom';
import { generateRandomName, makeRandomString } from './utils/helper';

const LiveChat = () => {
    const [LiveMessage, setLiveMessage] = useState()
    const chatMessage = useSelector(store => store.chat.message)
    const dispatch = useDispatch();
    useEffect(() => {
        const i = setInterval(() => {
            console.log("Api Polling")
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomString(30) + "😊😊❤️❤️😍😍"

            }))
        }, 500);
        return () => clearInterval(i)
    }, [])


    return (
        <>        <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>

            {chatMessage.map((mssg, i) => {
                return <Chatmessage key={i} name={mssg.name} message={mssg.message} />

            })}



        </div>
            <form className='w-full p-2 ml-2 border border-black rounded-md' onSubmit={(e) => {
                e.preventDefault()
                dispatch(addMessage({
                    name: "Hansal",
                    message: LiveMessage
                }))
                setLiveMessage("")
            }}>
                <input type="text" className='w-96 p-3 border border-black'
                    value={LiveMessage}
                    onChange={(e) => {
                        setLiveMessage(e.target.value)
                    }} />
                <button className='px-2 mx-2 font-mono font-bold bg-red-500 hover:text-white hover:scale-105 rounded-2xl  p-3 w-48'>Send</button>
            </form >
        </>

    )
}

export default LiveChat