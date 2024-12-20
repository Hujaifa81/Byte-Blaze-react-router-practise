import React from 'react';
import { Link } from 'react-router-dom';
import placeholder_img from '../assets/react.svg'
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({blog,deletable,handleDelete}) => {

    
    return (
        <div className='flex relative'>
            <Link to={`/blog/${blog.id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog.cover_image || placeholder_img} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{blog.title}</h3>
                    <span className="text-xs dark:text-gray-600">{new Date(blog.published_at).toLocaleDateString()}</span>
                    <p>{blog.description}</p>
                </div>
            </Link>
            {
                deletable && (<div className='absolute -top-2 -right-0 hover:bg-secondary hover:bg-opacity-100 rounded' onClick={()=>handleDelete(blog)}><MdDeleteForever size={30} color='blue' /></div>)
            }
        </div>
    );
};

export default BlogCard;