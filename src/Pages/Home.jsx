import React from 'react';
import "../Styles/Home.css"
import {Link} from 'react-router-dom'
import omsb from '../assets/OMSB.jpg'
import {motion} from 'framer-motion'






function Home (){
    return(
        <div className='bros-dad'>
            <div className='bros'>
            <div className='one'>
                <h2>OMSB</h2>
                <motion.div
                initail={{x:'-100vw'}}
                animate={{x:0}}
                transition={{delay: 1.5, type: 'spring', stiffness:120}}
                ><img src={omsb} width='100kb'/></motion.div>
            </div>
            <div className='two'>
                <Link to='/dashboard'><button>Continue</button></Link>
            </div>
        </div>
        </div>
    )
}
export default Home;