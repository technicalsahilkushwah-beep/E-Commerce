import React from 'react'

const Footer = () => {
    return (
        <footer>
            {/* TOP  */}
            <header className='bg-[#485769] hover:bg-gray-600 cursor-pointer flex justify-center items-center text-white text-[14px] h-10 font-medium'>
                <h1>Back to top</h1>
            </header>

            {/* main  */}

            <main className='bg-[#232f3e] w-full h-[400px] flex justify-center items-center'>
                <div className=' flex space-x-32 '>
                    {/* item 1  */}
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-white font-bold text-[20px]'>Get to Know Us</h1>
                        <a href="#" className='text-gray-300 font-medium hover:underline'>About Amazon</a>
                        <a href="#" className='text-gray-300 font-medium hover:underline'>Carrers</a>
                        <a href="#" className='text-gray-300 font-medium hover:underline'>Press release</a>
                        <a href="#" className='text-gray-300 font-medium hover:underline'>Amazon sience</a>
                    </div>

                    {/* item 2  */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-white font-bold text-[20px]">Connect With Us</h1>

                        <a href="#" className="text-gray-300 font-medium flex items-center gap-2 hover:underline hover:text-white transition-all">
                            <i className="fa-brands fa-instagram text-pink-400"></i>
                            Instagram
                        </a>

                        <a href="#" className="text-gray-300 font-medium flex items-center hover:underline gap-2 hover:text-white transition-all">
                            <i className="fa-brands fa-facebook text-blue-500"></i>
                            Facebook
                        </a>

                        <a href="#" className="text-gray-300 font-medium flex items-center gap-2 hover:underline hover:text-white transition-all">
                            <i className="fa-brands fa-twitter text-blue-400"></i>
                            Twitter
                        </a>
                    </div>


                    {/* item 3  */}
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-white font-bold text-[20px]'>Make Money with us</h1>
                        <a href="#" className='text-gray-300 font-medium hover:underline'>Sell Amazon</a>
                        <a href="#" className='text-gray-300 font-medium hover:underline'>Sell Amazon under Accescalator</a>
                        <a href="#" className='text-gray-300 font-medium hover:underline'>Protect and build your brand</a>
                        <a href="#" className='text-gray-300 font-medium hover:underline'> Amazon Global selling</a>
                        <a href="#" className='text-gray-300 font-medium hover:underline'> Supply to amazon</a>
                        <a href="#" className='text-gray-300 font-medium hover:underline'> Amazon sellers</a>
                        <a href="#" className='text-gray-300 font-medium hover:underline'> Fullfilmet by Amazon</a>
                        <a href="#" className='text-gray-300 font-medium hover:underline'> Advertise your Product</a>
                        <a href="#" className='text-gray-300 font-medium hover:underline'> Amazon pay on Merchants</a>
                    </div>

                    {/* item 4 */}
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-white font-bold text-[20px]'>Let Us Help You</h1>
                        <a href="#" className='text-gray-300 font-medium hover:underline'>Your Account</a>
                        <a href="#" className='text-gray-300 font-medium hover:underline'>Return Centre</a>
                        <a href="#" className='text-gray-300 font-medium hover:underline'>Recall and Product Safety alerts</a>
                        <a href="#" className='text-gray-300 font-medium hover:underline'>100% Purchase Protection</a>
                        <a href="#" className='text-gray-300 font-medium hover:underline'>Amazon App Download</a>
                        <a href="#" className='text-gray-300 font-medium hover:underline'>Help</a>
                    </div>
                </div>
            </main>
        </footer>
    )
}

export default Footer