import React from 'react'

const Hero = () => {
    return (
        <main className='hero container'>
            <div className='hero-content'>
                <h1>Your feet deserves the best.</h1>
                <p>YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVES THE BEST AND WE'RE HERE TO HELP YOU WIN OUR SHOES.</p>


                <div className='hero-btn'>
                    <button>Shop Now</button>
                    <button className='secondary-btn'>Category</button>
                </div>

                <div className='shopping'>
                    <p>Also Availble on</p>
                    <div className='brand-icons'>
                        <img src='./images/amazon.png' alt='amazon ' />
                        <img src='./images/flipkart.png' alt='amazon ' />
                    </div>
                </div >
                
            </div>
            <div className='hero-image'>
                    <img src="/images/shoe_image.png" alt="" />
                </div>

        </main>
    )
}

export default Hero
