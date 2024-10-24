import React from 'react';
import { useLoaderData } from 'react-router-dom';
import placeholder_img from '../assets/react.svg';
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw';
const Content = () => {
    const blog = useLoaderData()
    return (
        <div>
            <div className=" mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog.cover_image || placeholder_img} />
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                    {
                        blog.tags.map(t =>
                        (
                            <a key={t} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">
                                #{t}
                            </a>))

                    }
                </div>

                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{blog.title}</h3>
                    <Markdown rehypePlugins={[rehypeRaw]}>{blog.body_html}</Markdown>
                </div>
            </div>

        </div>
    );
};

export default Content;