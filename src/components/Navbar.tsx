import React from 'react'
import {AiOutlineUser,AiFillShopping} from"react-icons/ai"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex justify-center'>
        <div className='flex justify-between w-11/12 p-4'>
            <p>Stunner</p>
            <div className='flex gap-2'>
                <AiFillShopping size={20}/>
                <AiOutlineUser size={20}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar