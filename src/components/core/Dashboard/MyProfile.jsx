



import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const MyProfile = () => {

  return (
    <div className="flex relative flex bg-[#f2daed] ">
      <Sidebar />
      <div className="flex-1">
     <Topbar/>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold text-lg">Total Users</h3>
              <p>150</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold text-lg">Active Users</h3>
              <p>120</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold text-lg">Pending Approvals</h3>
              <p>15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
