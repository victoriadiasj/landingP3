import React from 'react'
import Imagem from './img/Other 18.png';
import Phone from './img/Other 17.png';

const Analises = () => {
  return (
    <div>
      <img className="imagem"src={Imagem}/>
        <div className='divanalise'>
      <p className='analise'>ANÁLISE</p>
        </div>
      <div className='divH1'>
      <div className='divsub'>
      <h1 className='H1'>Análises Integradas Para Rastrear Seus NFTs</h1>
      
      <p className='sub2'>Use nosso painel analítico integrado para obter insights valiosos e monitorar o valor do seu portfólio Krypto ao longo do tempo.</p>
      </div>
      <button className='button4'>VEJA NOSSOS PREÇOS</button>
      </div>
      <p className='aplicativo'>OBTENHA NOSSO APLICATIVO</p>
      <h1 className='h1menu'>Procure NFTs A Partir Do Seu Smartphone</h1>
      <p className='p'>Use nosso painel analítico integrado para obter insights valiosos e monitorar o valor do seu portfólio Krypto ao longo do tempo.</p>
      <button className='button5'>VEJA NOSSOS PREÇOS</button>
      <div className='divphone'>
      <img className='phone' src={Phone}/>
      </div>
    </div>
  )
}

export default Analises
