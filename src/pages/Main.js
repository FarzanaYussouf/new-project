import React from 'react'
import './main.css'
import Parallaxsection from './Parallaxsection'


const Main = () => {
    
    return (
        <>

            <div className=' main-page container-fluid py-3 bg-info'id='Home'>



                <div className='row text-center ms-4' >
                    <div className='col-4'>
                        <h1 className='fw-bold fs-1 mb-4 font-2 font-effect-neon'> yummy food</h1>
                        <p className='mx-5 px-3 mt-4 font-effect-shadow-multiple font-1'>Lorem,  odio animi, incidunt odit  adipisicing elit. Corporis.</p>

                    </div>
                    <div div className='col-8 '>
                        <img src="./images/th.jfif " alt="" className='mb-5 zoom me-5 ' />

                    </div>
                  
                    </div>
                    <div class="custom-shape-divider-bottom-1726521845 ">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                        </svg>
                </div>

          
    


            
        </div>
        {/* <div>
            <h1 className='text-center'>banner</h1>
            <Parallaxsection
                image1="https://via.placeholder.com/1920x1080/ff7f7f/333333?text=Image+1"
                image2="https://th.bing.com/th?id=OIP.tZ60lxjrfcDCGIr3GAymAwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2"
                title="Welcome to My Website"
                content="Experience the beauty of parallax scrolling with two images!"
            />
            <div style={{ height: '30vh', backgroundColor: '#282c34', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <h2>Scroll Down for More Content</h2>
            </div>
            <Parallaxsection
                image1="https://via.placeholder.com/1920x1080/ff7f7f/333333?text=Image+1"
                image2="https://th.bing.com/th?id=OIP.q01r_TkHt7qjLlNFr3ig9wHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2"
                title="Explore More"
                content="Discover amazing content with a smooth effect."
            />
        </div> */}









        </>
    )
}

export default Main
