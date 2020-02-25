import React from 'react';
import wa from '../assets/btn-whatsapp.png';

const BtnWhatsapp = () => {
    return (
        <div className='shadow bg-white rounded px-5 py-2 flex flex-col items-center mt-6 sm:mt-0 sm:flex-row'>
            <img src={wa} alt='WhatsApp' />
            <div className='ml-2 items-center'>
                <h3 className='font-bold text-2xl'>Orçar seu projeto!</h3>
                <p className='font-bold'>(51)99253-1436</p>
            </div>
        </div>
    )
}

export default BtnWhatsapp