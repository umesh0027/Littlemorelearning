



import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
    <div className="w-32 md:w-64 lg:w-64 min-h-screen bg-gray-800 text-white lg:p-4 p-2">
      <h2 className="lg:text-2xl text-xl font-bold mb-4">Admin Dashboard</h2>
      <ul>
      <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block p-2 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} rounded mb-2`
            }
          >
           Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-profile"
            className={({ isActive }) =>
              `block p-2 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} rounded mb-2`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/notes"
            className={({ isActive }) =>
              `block p-2 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} rounded mb-2`
            }
          >
            Notes Category
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/create-subject"
            className={({ isActive }) =>
              `block p-2 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} rounded mb-2`
            }
          >
           Create Notes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/subjects"
            className={({ isActive }) =>
              `block p-2 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} rounded mb-2`
            }
          >
           My Notes
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/dashboard/tutorial"
            className={({ isActive }) =>
              `block p-2 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} rounded mb-2`
            }
          >
            Tutorial Category
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/dashboard/create-playlist"
            className={({ isActive }) =>
              `block p-2 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} rounded mb-2`
            }
          >
           Create Playlist
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/playlists"
            className={({ isActive }) =>
              `block p-2 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} rounded mb-2`
            }
          >
           My Playlists
          </NavLink>
        </li>
       
      </ul>
    </div>
    
    </>
  );
};

export default Sidebar;
