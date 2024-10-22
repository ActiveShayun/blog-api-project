import PropTypes from 'prop-types'
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({blog, handleBookmarkAdd, handleReadingTime}) => {
    console.log('blog',blog);
    const {id, title, cover, author, author_image, posted_date, reading_time, hashtags} = blog
  
    console.log(cover);
    return (
        <div className='p-4'>
            <img className='w-full mb-5' src={cover} alt={title} />
            <div className='flex justify-between'>
                <div className='flex items-start gap-5'>
                    <img className='w-[60px] h-[60px] rounded-full' src={author_image} alt="" />
                    <div>
                    <p className='text-2xl font-bold'>{author}</p>
                    <p className='text-gray-500 text-base font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-xl font-medium'>{reading_time} min read.</p>
                    <button onClick={()=>handleBookmarkAdd(blog)}
                    ><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold my-2'>{title}</h2>
         <div>
         <p>
            {
               hashtags.map((tags, idx) => <span 
               className='mx-1 text-lg font-medium' 
               key={idx}>{tags}</span>)
            }
           </p>
           <button onClick={() => handleReadingTime(reading_time, id)}
            className='text-[#6047EC] text-xl font-medium'>Mark as read</button>
         </div>
        </div>
    );
};

Blog.PropTypes ={
    blog : PropTypes.object.isRequired
}
export default Blog;