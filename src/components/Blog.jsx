import React, { useState } from 'react';
import { Link, Outlet, useLoaderData, } from 'react-router-dom';
import { IoBookmarksOutline } from "react-icons/io5";
import { savedBlog } from '../utils';

const Blog = () => {
    const blog = useLoaderData()
    const [tabIndex, setTab] = useState(0)
const handleBookmark=(blog)=>{
    savedBlog(blog)
}
    return (
        <div>
            <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
                <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{blog.title}</h1>
                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                            <div className="flex items-center md:space-x-2">
                                <p className="text-sm">{blog.reading_time_minutes} mins read • {new Date(blog.published_at).toLocaleDateString()}</p>
                            </div>
                            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{blog.comments_count} comments • {blog.public_reactions_count} views</p>
                        </div>
                    </div>

                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                        <Link to='' onClick={() => setTab(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Content</span>
                        </Link>
                        <Link to={`author`} onClick={() => setTab(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Author</span>
                        </Link>
                        <div onClick={()=>handleBookmark(blog)} className='bg-primary p-3 rounded hover:bg-opacity-25 cursor-pointer'>
                            <IoBookmarksOutline />
                        </div>

                    </div>
                    <Outlet></Outlet>

                </article>

            </div>
        </div>
    );
};

export default Blog;