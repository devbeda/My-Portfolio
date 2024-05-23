import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="w-full h-auto grid grid-cols-2 gap-x-16 gap-y-7 pl-6 pb-7 pt-7 md:flex justify-center items-center md:p-8 bg-[#24292d] ">
      <div className="md:flex text-[#ccc]  md:text-lg md:justify-center md:items-center md:gap-2 text-sm md:text-m ">
        <FontAwesomeIcon icon={faEnvelope} />
        <p className="hover:underline ">bedaprakash.049@gmail.com</p>
      </div>

      <div className="md:flex text-[#ccc] md:gap-2 md:text-lg md:justify-center md:items-center">
        <FontAwesomeIcon icon={faPhone} />
        <p className="hover:underline ">7978631242</p>
      </div>

      <div className="md:flex text-[#ccc] md:gap-2 md:text-lg md:justify-center md:items-center">
        <FontAwesomeIcon icon={faGithub} />
        <p className="hover:underline ">/devbeda</p>
      </div>

      <div className="md:flex text-[#ccc] md:gap-2 md:text-lg md:justify-center md:items-center">
        <FontAwesomeIcon icon={faLinkedin} />
        <p className="hover:underline ">/beda-prakash1010</p>
      </div>
    </footer>
  )
}

export default Footer