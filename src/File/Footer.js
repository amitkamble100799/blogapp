import React from 'react'
import './Footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'

function Footer() {
    return (
        <div>
            <footer className='ft'>
            
            <AiFillFacebook className='ic1'/> 
            <AiFillTwitterSquare className='ic2'/> 
            <AiFillInstagram className='ic3'/> 
          <AiFillYoutube className='ic4'/>
            

         
            </footer>            
        </div>
    )
}

export default Footer
