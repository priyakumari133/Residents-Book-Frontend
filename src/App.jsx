import React, { useState, useEffect } from "react";
import ResidentsList from "./components/ResidentsList";
import AddResidentModal from "./components/AddResidentModal";
import Toast from "./components/Toast";
import { Toaster, toast } from "react-hot-toast";

const API_BASE = "http://localhost:1000/residents";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [residents, setResidents] = useState([]);
  const [toastState, setToastState] = useState({ show: false, message: "" });

  useEffect(() => {
    fetch(API_BASE)
      .then((res) => res.json())
      .then((data) => setResidents(data.residents || []));
  }, []);

  const handleAddResident = async (formData) => {
    setToastState({ show: false, message: "" });
    let res, newResident;
    try {
      if (formData instanceof FormData) {
        res = await fetch(API_BASE, {
          method: "POST",
          body: formData,
        });
      } else {
        res = await fetch(API_BASE, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }
      if (res.ok) {
        newResident = await res.json();
        setResidents([newResident, ...residents]);
        toast.success("You’re in!");
        setShowModal(false);
      } else {
        toast.error("Submission failed. Try again.");
      }
    } catch {
      toast.error("Network error.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white px-5 py-10">
    <Toaster position="bottom-center" />
  
    {/* Header Section */}
    <div className="max-w-[1200px] w-full text-center mb-[60px]">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">The Residents Book</h1>
      <p className="text-lg sm:text-xl text-white/80">A digital book of ambitious residents.</p>
    </div>
  
    {/* Add Button */}
    <button
      onClick={() => setShowModal(true)}
      className="mb-8 px-8 py-4 text-white text-[1.1rem] font-semibold rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-md shadow-lg hover:bg-white/30 hover:border-white/50 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
    >
      + Add Resident
    </button>
  
    {/* Residents Grid */}
    <ResidentsList residents={residents} />
  
    {showModal && (
      <AddResidentModal
        onClose={() => setShowModal(false)}
        onSubmit={handleAddResident}
      />
    )}
    
    <Toast
      show={toastState.show}
      message={toastState.message}
      onClose={() => setToastState({ show: false, message: "" })}
    />
  </div>
  
  );
}
