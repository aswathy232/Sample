import React from 'react'

function Services() {
  return (
    <div>
      <h1 className='p-10 text-center font-bold text-2xl '>Our Services</h1>
      <div  className='grid grid-cols-4 gap-4 p-10' >
        <div><img src="images/pic1.png" alt="" /><p className='font-bold text-xl' >IPDC SAVING SCHEMES</p></div>
        <div><img src="images/pic2.png" alt="" /><p className='font-bold text-xl' >IPDC PERSONAL LOANS</p></div>
        <div><img src="images/pic3.png" alt="" /><p  className='font-bold text-xl' >IPDC DEPOSIT FORMS</p></div>
        <div><img src="images/pic4.png" alt="" /><p className='font-bold text-xl' >IPDC AUTO LOAN</p></div>
      </div>


      <div>
      <div className='text-center' >
        <h1 className='font-bold text-4xl' >Our Best Result of the Year</h1><br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugit voluptatem corporis quos rem laboriosam et delectus corrupti beatae autem, </p><br/>
        <div  className='grid grid-cols-4 gap-4 p-10' >
        <div><h1 className='font-bold text-3xl text-pink-600 ' >57.6 bn</h1><p  >LOAN PORTFOLIO</p></div>
        <div><h1 className='font-bold text-3xl'  >0.95%</h1><p >CLASSIFIED LOAN PORTFOLIO</p></div>
        <div><h1 className='font-bold text-3xl'  >388.5%</h1><p   >CLASSIFIED LOAN COVERAGE</p></div>
        <div><h1 className='font-bold text-3xl'  >5.04 bn</h1><p  >DEPOSIT</p></div>
        <div><h1 className='font-bold text-3xl' >6.01 bn</h1><p  >SHAREHOLDERS EQUITY</p></div>
        <div><h1 className='font-bold text-3xl'  >18.51%</h1><p  >CAPITAL ADEQUACY RATIO</p></div>
        <div><h1 className='font-bold text-3xl'  >8.5 bn</h1><p  >MARKET CAPITALIZATION</p></div>
        <div><h1 className='font-bold text-3xl'  >AAA</h1><p  >CREDIT RATIO</p></div>
        

      </div>
       
      </div>
      </div>

      <div>
      <div className='text-center' >
        <h1 className='font-bold text-4xl' >Newsletter</h1><br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugit voluptatem corporis quos rem laboriosam et delectus corrupti beatae autem, </p><br/>
        <button className='bg-pink-600 text-white p-4 border rounded-md' >Subscribe</button>
      </div>
      </div>
    </div>
  )
}

export default Services
