import './App.css'
import Header from './Component/Header/Header'
import Blogs from './Blogs/Blogs'
import Bookmarks from './Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleBookmarkAdd = (blog)=>{
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleReadingTime = (time, id)=>{
    console.log('time', time);
       const newTime = readingTime + time;
       setReadingTime(newTime)
      //  remove bookmark
      // console.log('Id',id);
      const removeBookmark = bookmarks.filter(bookmark => bookmark.id === id)
      setBookmarks(removeBookmark)
  }
  return (
    <>
   <Header></Header>
    <div className='max-w-screen-lg mx-auto grid grid-cols-6  gap-4'>
       <Blogs 
       handleReadingTime={handleReadingTime}
       handleBookmarkAdd={handleBookmarkAdd}></Blogs>
       <Bookmarks
       readingTime={readingTime}
        bookmarks={bookmarks}></Bookmarks>
    </div>
    </>
  )
}

export default App
