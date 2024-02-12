import React from 'react'
import Tech from './img/TechCrunch.png';
import Fast from './img/FastCompany.png';
import Image from './img/image 7.png';
import Forbes from './img/forbes.png';

const Sobre = () => {
  return (
    <div>
      <h1 className='destaque'>DESTAQUE EM</h1>
      <div className='subheader'></div>
      <div className='divtech'>
      <img className='tech' src={Tech}/>
      </div>
      <div className='divfast'>
      <img className='fast' src={Fast}/>
      </div>
      <div className='divimage'>
      <img className='image7'src={Image}/>
      </div>
      <div className='divforbes'>
      <img className='forbes' src={Forbes}/>
      </div>
    </div>
  )
}
export default Sobre
