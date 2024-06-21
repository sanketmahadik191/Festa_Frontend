
import { Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useSelector } from "react-redux";

function Front() {
  const { isLoggedIn ,user} =useSelector((state)=>state.auth);

  return (
    <div className="h-[600px] bg-cover  bg-center flex flex-col items-center" style={{ backgroundImage: 'url(https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png)', backgroundSize: 'cover' }}>
    <header className=" text-white w-full py-4">
      <div className="container mt-4 mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">get the app</h1>
        <div className="flex space-x-4 font-bold ">
          <Link to='/addRest' className="m-2 cursor-pointer">Add restaurant</Link>
          {isLoggedIn ? (
           <div className="profile flex items-center space-x-2">
           <span className="hidden md:inline text-white">{user.username}</span>
           <Link to="/profile">
             <img
               src='https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg'
               alt="User Avatar"
               className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"
             />
           </Link>
         </div>
        ) : (<>
         <Link className="mt-2" to="/log-in"> <span className=" cursor-pointer">Log in</span></Link>
         <Link className="mt-2" to='/sign-up'><span className="cursor-pointer">Sign up</span></Link></>) }
        </div>
      </div>
    </header>
    <div className="flex-grow flex flex-col justify-center items-center text-center w-full px-4">
      {/* <img src={logo} className="rounded-2xl"></img> */}
      <Link to='/home/rest'>
      <h2 className="cursor-pointer text-6xl font-bold text-white shadow-md p-2 rounded-lg">Festa</h2></Link>
      <p className="mt-2 text-xl text-gray-200 shadow-md  p-2 rounded-lg">
      Discover the best food & drinks in Your City.
      </p>
      <div className="mt-8 w-full max-w-md mx-auto">
        <div className="flex items-center bg-white bg-opacity-40 rounded-full shadow-md p-2 px-3">
          <input
            type="text"
            className="w-full px-4 py-2 text-gray-900 rounded-full focus:outline-none"
            placeholder="Search..."
          />
             <button className="ml-1 h-12 w-12 p-2 text-white rounded-full focus:outline-none">
           <FontAwesomeIcon className="h-6 w-6" icon={faMagnifyingGlass} />
            </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Front