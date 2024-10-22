import PropTypes from "prop-types";
import Bookmark from "../Component/Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    console.log('bookmarj', bookmarks);
    return (
          <div className="col-span-2 p-4 bg-[#1111110D]">
                  <div className="">
                  <div className="bg-[#6047EC1A] p-4">
                  <h1 className="text-[#6047EC] text-2xl font-bold">Spent time on read : {readingTime} min</h1>
                  </div>
                  <h1 className=" text-2xl font-bold  rounded-md">
                    Bookmarked Blogs : {bookmarks.length}</h1>
                  </div>
                   {
                    bookmarks.map((bookmark, idx) => <Bookmark  key={idx} bookmark={bookmark}></Bookmark>)
                   }
              </div>
    )
};

Bookmarks.PropTypes ={
    bookmarks: PropTypes.array
}

export default Bookmarks;
