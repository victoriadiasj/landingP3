import React from 'react'
import Computer from './img/pc.png' ;
import Sombra2 from './img/sombra02.png';

const Início = () => {
  return (
    <div>
        <div className='divtitle'>
          <div className='divTitle'>
            <p className='title'>Descubra E Colete NFTs Raros</p>
          </div>
      <p className='title2'>O mercado mais seguro para compra e venda</p>
      <p className='title3'> de criptoativos exclusivos.</p>
      <button className='button2'>COMPRAR NFTS</button>
      <button className='button3'>VENDER NFTS</button>
      </div>
      <div className='divcomputer'>
        <img src={Computer}/> 
        <img className='sombra02'src={Sombra2}/>
      </div>
    </div>
    
  )
}

export default Início
