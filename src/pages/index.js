import React from 'react'
import './styles.css'
import BtnWhatsapp from '../components/BtnWhatsapp'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Helmet from 'react-helmet'


import selo from '../assets/img-selo.png'
import img from '../assets/img-banner.png'

import { graphql, useStaticQuery } from 'gatsby'


const Index = () => {
    const { site } = useStaticQuery (graphql`
        query MyQuery {
            site {
            siteMetadata {
                title
            }
            }
        }
    `)

    const selos = [1,2,3,4]
    const projetos = [1,2,3,4]
    return(
        <div>
            <Helmet>
                <title>{site.siteMetadata.title}</title>
            </Helmet>
            <Header>
                <Logo />
                <div>
                    <BtnWhatsapp />
                </div>
            </Header>

            <div className='flex flex-col items-center sm:flex-row sm:justify-between'>
                <div className='p-8 '>
                    <h2 className='font-bold text-3xl px-8 py-2'>Móveis Planejados</h2>
                    <p className='text-gray-900 text-2xl'>Comerciais e residenciais para todos os ambientes</p>
                    <p className='text-gray-700 text-1xl'>Atendemos toda Região metropolitana</p>
                </div>
                <div>
                    <img src={img} alt='Img' />
                </div>
            </div>

            <div className='flex flex-col items-center sm:flex-row justify-around '>
                {
                    selos.map(() => {
                        return <img src={selo} alt='Selo' className='my-6 ' />
                    })  
                }
            </div>

            <div>
                <h2 className='p-8 text-2xl'>Projeto de Móveis</h2>
                <div className='flex flex-wrap'>
                    {
                        projetos.map(() => {
                            return(
                                <div className='max-w-sm'>
                                    <div className=' m-2 rounded shadow-lg'>
                                        <img src={img} alt='Projeto 1' />
                                        <div className='px-6 py-4'>
                                            <p className='font-bold tex-xl mb-2'>Projeto 01</p>
                                            <p>Descrição do projeto REF 001</p>
                                        </div>
                                    </div>    
                                </div>
                                
                            )
                            
                        })
                    }    
                </div>
                
                
            </div>

            <Footer />
        </div>
    )
}

export default Index