import React, { useState } from "react";
import {NavLink} from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const [open, setOpen] =useState(false)

  return (
    <nav className="w-full h-auto bg-[#24292d] fixed">
      <div className="w-full flex items-center justify-between  px-8 py-4  text-white ">
        <div>
          <h3 className="font-bold text-xl font-[AnonymousPro]  md:mb-0" >.devBeda</h3>
        </div>
        <div className="text-xl md:hidden" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon  icon={open? faXmark:faBars} />
        </div>
        <ul className={`flex md:flex-row flex-col  ml-6 cursor-pointer text-lg font-semibold text-gray-500 gap-8 absolute top-12 right-0 md:static bg-[#24292d] px-4 py-2 transition-all duration-800 ease-in ${open ? "right-30 pacity-100":"right-[-500%] opacity-0"}md:opacity-100 `}>
          <li >
            <NavLink
            onClick={() => setOpen(!open)} 
            to={"/"}
            className={({isActive}) => 
            `duration-200 ${isActive ? "text-white" :"text-gray-500"}`
            }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
            onClick={() => setOpen(!open)} 
            to={"aboutme"}
            className={({isActive})=> 
            `duration-200 ${isActive ? "text-white" : "text-gray-500" }`
            }
            >About me
            </NavLink>
          </li>
          <li >
            <NavLink
            onClick={() => setOpen(!open)}
            to={"projects"}
            className={({isActive})=>
            `duration-200 ${isActive ? "text-white" : "text-gray-500" }`
            }
            >
              Projects
            </NavLink>
          </li>
          <li >
            <NavLink
            onClick={() => setOpen(!open)}
            to={"github"}
            className={({isActive})=>
            `duration-200 ${isActive ? "text-white" : "text-gray-500" }`
            }
            >
              Github Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
