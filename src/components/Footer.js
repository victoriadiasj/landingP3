import React from 'react'
import Sombra4 from './img/Ellipse 2 (1).png'

const Footer = () => {
  return (
    <div>
      <div className='divfooter'/>
      <p className='pfooter'>ESTÁ PRONTO?</p>
      <h1 className='h1footer'>Faça Parte Da Próxima Grande Coisa</h1>
      <button className='buttonfooter'>começar</button>
      <div>
        <img className='sombra4'src={Sombra4}/>
      </div>
      <p className='krypto2'>Krypto</p>
      <div className='inform'>
      <p className='info'>Home</p>
      <p className='info2'>About</p>
      <p className='info3'>Comprar NFTs</p>
      <p className='info4'> Vender NFTs</p>
      </div>
      <p className='mercado'>Mercado</p>
      <div className='divmercado'>
      <p className='browse'>Browse NFTs</p>
      <p className='buy'>Buy NFTs</p>
      <p className='sell'>Sell NFTs</p>
      </div>
      <div className='divcontato'>
      <p className='contato'>Contato</p>
      </div>
      <div className='divcontato2'>
      <p className='contato1'>Email</p>
      <p className='contato2'>Linkedin</p>
      <p className='contato3'>Instagram</p>
      <p className='contato4'>Twitter</p>
      </div>
      <div className='divassine'>
        <p className='assine'>Assine nossa newsletter</p>
      </div>
      <div className='divinput'>
        <input className='input' placeholder='Email Address'/>
      </div>
      <div className='divenviar'>
        <button className='enviar'>Enviar</button>
      </div>
    </div>
  )
}

export default Footer
