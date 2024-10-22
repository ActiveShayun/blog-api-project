import prifile from '../../assets/profile.png'
const Header = () => {
    return (
        <div
         className='mx-auto max-w-screen-lg flex justify-between items-center py-3 border-b-2'>
             <h1 className='text-4xl font-bold'>Knowleage Cafe</h1>
             <img src={prifile} alt="" />
          
        </div>
    );
};

export default Header;