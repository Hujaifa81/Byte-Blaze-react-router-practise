import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <div className="hero -mt-28">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">WellCome to <span className='text-5xl font-bold bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text bg-300% animate-gradient'>ByteBlaze</span></h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className='flex gap-2 justify-center'>
                            <Link to='/blogs' className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-primary border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">Read Blogs</span>
                            </Link>
                            <Link to='/bookmarks' className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-primary border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">Bookmarks</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;