import React, { useContext } from "react";
import { Camera } from "lucide-react";
import { UserContext } from "./UserContext";

const profileData = {
  image: "https://randomuser.me/api/portraits/women/44.jpg",
  bio: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr...`,
};

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full bg-white border-b px-6 py-4 shadow-sm">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 ">Account Settings</h2>
      </div>

      <div className="w-full px-4 py-6 flex justify-center">
        <div className="w-full max-w-5xl bg-white shadow rounded-md p-6">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div className="relative">
              <img
                src={profileData.image}
                alt={user.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow ">
                <Camera size={16} className="text-purple-600 " />
              </div>
            </div>

            <div className="flex flex-col justify-center sm:justify-start text-center sm:text-left">
              <h3 className="text-base md:text-lg font-semibold text-gray-800">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="mt-4 text-sm text-gray-600 max-w-2xl leading-relaxed">{profileData.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

