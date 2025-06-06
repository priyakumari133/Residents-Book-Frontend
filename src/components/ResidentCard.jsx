import React from "react";

export default function ResidentCard({ resident }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-10 w-80 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-lg duration-200 relative group">
      
      <img
        src={
          resident.profilePhoto ||
          "https://ui-avatars.com/api/?name=" +
            encodeURIComponent(resident.firstName + " " + resident.lastName)
        }
        alt={resident.firstName}
        className="w-28 h-28 rounded-full object-cover mb-5"
      />
      
      <div className="text-2xl font-semibold text-black mb-2 text-center">
        {resident.firstName} {resident.lastName}
      </div>

      <div className="text-gray-600 text-lg mb-5 text-center font-medium">
        {resident.role}
      </div>
      
      <div className="flex gap-5">
        {resident.linkedin && (
          <a
            href={resident.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center text-blue-700 hover:text-purple-900"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56v5.64z" />
            </svg>
          </a>
        )}
        {resident.twitter && (
          <a
            href={resident.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center text-blue-400 hover:text-blue-600"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
