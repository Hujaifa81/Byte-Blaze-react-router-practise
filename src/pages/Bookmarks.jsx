import React, { useEffect, useState } from 'react';
import { deleteBlog, getBlogs } from '../utils';
import BlogCard from '../components/BlogCard';

const Bookmarks = () => {
    const [bookmarkedBlogs, setBookmarkedBlogs] = useState([])
    useEffect(() => {
        const blogs = getBlogs()
        setBookmarkedBlogs(blogs)
    }, [])
    const handleDelete=(blog)=>{
        deleteBlog(blog)
        const blogs = getBlogs()
        setBookmarkedBlogs(blogs)
    }
    if(bookmarkedBlogs.length===0) return <div className='min-h-[calc(100vh-120px)] flex justify-center items-center'><h1 className='text-primary text-3xl'>No bookmarked blogs</h1></div>
    return (
        <div>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5">

                {
                    bookmarkedBlogs.map((blog) => <BlogCard handleDelete={handleDelete} deletable={true} blog={blog} key={blog.id}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;