import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
    <li className="text-[18px]"><NavLink className={({isActive }) => isActive ? 'text-[#46f555] font-bold border border-[#46f555]' : 'font-bold text-black'} to='/'>Home</NavLink></li>
    <li className="text-[18px]"><NavLink className={({isActive }) => isActive ? 'text-[#46f555] font-bold border border-[#46f555]' : 'font-bold text-black'} to='/ListedBooks'>Listed Books</NavLink></li>
    <li className="text-[18px]"><NavLink className={({isActive }) => isActive ? 'text-[#46f555] font-bold border border-[#46f555]' : 'font-bold text-black'} to='/read'>Pages to Read </NavLink></li>
    <li className="text-[18px]"><NavLink className={({isActive }) => isActive ? 'text-[#46f555] font-bold border border-[#46f555]' : 'font-bold text-black'} to='/ListedBoo'>Up Coming book  </NavLink></li>
    <li className="text-[18px]"><NavLink className={({isActive }) => isActive ? 'text-[#46f555] font-bold border border-[#46f555]' : 'font-bold text-black'} to='/Listed'>Popular Book </NavLink></li>
    </>
    return (
        <div className="navbar max-w-6xl mx-auto h-14 lg:mt-10 mt-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost lg:text-xl md:text-xl text-[#43f057]">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="bg-[#23BE0A] mr-4  p-[2px] rounded-lg font-semibold lg:text-[18px] md:text-[18px] md:w-28 md:h-14 text-white lg:w-28 lg:h-14">Sign In</button>
        <button className="bg-[#59C6D2] mr-4  p-[2px] rounded-lg font-semibold lg:text-[18px] md:text-[18px] md:w-28 md:h-14 text-white lg:w-24 lg:h-14">Sign Up</button>
      </div>
    </div>
    );
};

export default Navbar;