import React from 'react';
import BtnWhatsapp from '../components/BtnWhatsapp';

const Footer = () => {
    return (
       <div className='p-4 bg-gray-200 sm:flex justify-between items-center'>
    <div>
        <h5>Lima Móveis Planejados</h5>
        <p>Rua Avenca, 140, Viamão/RS</p>
    </div>
    <BtnWhatsapp />
</div> 
    )
}

export default Footer

