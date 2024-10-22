
const Bookmark = ({bookmark}) => {
    return (
        <div className='p-4 rounded-md'>
           <div className="bg-[#FFFFFF] p-4"> 
           <h2 className="text-lg font-semibold">{bookmark.title}</h2>
           </div>
        </div>
    );
};

export default Bookmark;