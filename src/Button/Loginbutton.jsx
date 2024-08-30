import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faRightToBracket,faUserPlus } from '@fortawesome/free-solid-svg-icons'

function Loginbutton({word,iconname}) {
  return (
    <>
        <div className={"flex w-full md:ml-0 justify-end md:justify-between group "}>
        <button className="tracking-wider hidden md:ml-4 md:block text-lg font-normal text-slate-300 cursor-pointer group-hover:text-white  ">{word}</button>
        <FontAwesomeIcon icon={iconname}  className=" h-6 w-6 text-red-600 hover:text-white cursor-pointer "/>
        </div>
    </>
  )
}

export default Loginbutton