import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookmarkAdd, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([])

    useEffect( () => {
           fetch('Blog.json')
           .then(res => res.json())
           .then(data => setBlogs(data))
    }, [])
    return (
        <div className="col-span-4">
            {/* <h2 className="text-4xl font-bold">Blogs : {blogs.length}</h2> */}
            {
                blogs.map(blog => <Blog 
                    handleReadingTime={handleReadingTime}
                    handleBookmarkAdd={handleBookmarkAdd}
                    key={blog.id} 
                    blog={blog}
                 ></Blog>)
            }
        </div>
    );
};

Blogs.PropTypes = { 
    handleBookmarkAdd: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blogs;