import React from 'react'
import Sombra from './img/sombra.png'


const Navbar = () => {
  return (
    <div>
    <img className='sombra' src={Sombra}/>
   <nav className='navbar'>
   <p className='krypto'>KRYPTO</p>
   <div className='divnavbar'>
    <div className='nav1'>SOBRE</div>
    <div className='nav2'>PREÇO</div>
    <div className='nav3'>CONTATO</div>
    </div>
    </nav>
    <div className='divbutton'>
    <button className='button'>COMPRAR NFT</button>
    </div>
    <div className='circle'></div>
    </div>
   
  )
}

export default Navbar
