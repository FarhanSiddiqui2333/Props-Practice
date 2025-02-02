import React from 'react'

const Card = (props) => {
    return (
        <div className='bg-white w-80 h-56 rounded-xl shadow-md shadow-white p-1'>
            <div className="img h-1/2 w-full rounded-xl px-2 py-1">
                <i class="fa-brands fa-instagram text-3xl text-white"></i>
                <img src={props.profilePhoto} alt="Profile Photo" className='h-24 w-24 rounded-full relative left-1/2 translate-y-2 -translate-x-1/2 border-2 border-white border-solid' />
            </div>
            <div className="content text-center pt-5 relative">
                <h1 className='text-slate-900 font-extrabold text-2xl mt-5'>{props.name}</h1>
                <p className='text-sm text-slate-700'>{props.username}</p>
                <button className='btn absolute right-1 bottom-0 translate-y-3 w-8 h-8 text-white rounded-md'><i class="fa-solid fa-plus"></i></button>
            </div>
        </div>
    )
}

export default Card
