import React from 'react'
import Sombra3 from './img/sombra3.png'
import Logo from './img/Ellipse 3.png'
import Logo2 from './img/Ellipse 4.png'
import Logo3 from './img/Ellipse 5.png'

const Depoimentos = () => {
  return (
    <div>
      <p className='depoimentos'>Depoimentos</p>
      <h1 className='leia'>Leia O Que Outros Têm A Dizer</h1>
      <img className="sombra3"src={Sombra3}/>
      <div className='divdepoimentos'>
      <div className='divdepoimento1'></div>
      <div className='divlogo'>
        <img className='logo'src={Logo}/>
      </div>
      <div className='divdepoimento2'></div>
      <div className='divlogo2'>
        <img className='logo2' src={Logo2}/>
      </div>
      <div className='divdepoimento3'></div>
      <div className='divlogo3'>
        <img className='logo3' src={Logo3}/>
      </div>
      </div>
      <div className='divname'>
       <p className='name'>OLIVIA COLE</p>
      </div>
      <div className='divname2'>
         <p className='name2'>EVEN WHITE</p>
      </div>
      <div className='divname3'>
         <p className='name3'>JHON MILLER</p>
      </div>
      <div className='divsubname'>
        <p className='subname'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.</p>
      </div>
      <div className='divsubname2'>
        <p className='subname2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.</p>
      </div>
      <div className='divsubname3'>
        <p className='subname3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.</p>
      </div>
    </div>
  )
}

export default Depoimentos
