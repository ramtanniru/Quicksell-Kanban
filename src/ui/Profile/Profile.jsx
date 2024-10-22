import React from 'react'
import './Profile.css'

export default function Profile({name,activityStatus}) {
  return (
    <div className='usericon-cotainer'>
        <div className='usericon'>
            {name}
        </div>
        <div className={`user-status ${activityStatus && "available"}`}></div>
    </div>
  )
}
