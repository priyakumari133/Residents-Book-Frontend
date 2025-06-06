import React from "react";
import ResidentCard from "./ResidentCard";

export default function ResidentsList({ residents }) {
  return (
    <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">

      {residents.map((resident) => (
        <ResidentCard key={resident._id} resident={resident} />
      ))}
    </div>
  );
}
