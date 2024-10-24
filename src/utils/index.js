import toast from "react-hot-toast"

export const getBlogs=()=>{
    const storedBlog=localStorage.getItem('blog')
    if(storedBlog){
        return JSON.parse(storedBlog)
    }
    return []
}
export const savedBlog=(blog)=>{
    const blogs=getBlogs()
    if(blogs.find(b=>b.id===blog.id)){
        return toast.error('already exist')
    }
    blogs.push(blog)
    localStorage.setItem('blog',JSON.stringify(blogs))
    return toast.success("successfully saved")
}
export const deleteBlog=(blog)=>{
    const blogs=getBlogs();
    const afterDelete=blogs.filter(b=>b.id!=blog.id)
    localStorage.setItem('blog',JSON.stringify(afterDelete))
    return toast.success("successfully deleted")
}
