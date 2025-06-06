import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function AddResidentModal({ onClose, onSubmit, initialData }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    role: "",
    profilePhoto: "",
    linkedin: "",
    twitter: "",
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();

  useEffect(() => {
    if (initialData) {
      setForm({
        firstName: initialData.firstName || "",
        lastName: initialData.lastName || "",
        role: initialData.role || "",
        profilePhoto: initialData.profilePhoto || "",
        linkedin: initialData.linkedin || "",
        twitter: initialData.twitter || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.role) return;
    setLoading(true);
    let dataToSend = form;
    if (file) {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      fd.set("profilePhoto", ""); // clear text url if uploading file
      fd.append("profilePhoto", file);
      dataToSend = fd;
    }
    await onSubmit(dataToSend);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg transform transition-all scale-100 animate-zoomIn relative">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{initialData ? "Edit Resident" : "Add Resident"}</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input className="border rounded p-2 text-black bg-white" name="firstName" placeholder="First Name *" value={form.firstName} onChange={handleChange} required />
<input className="border rounded p-2 text-black bg-white" name="lastName" placeholder="Last Name *" value={form.lastName} onChange={handleChange} required />
<input className="border rounded p-2 text-black bg-white" name="role" placeholder="Title / Role *" value={form.role} onChange={handleChange} required />
<input className="border rounded p-2 text-black bg-white" name="profilePhoto" placeholder="Profile Photo URL" value={form.profilePhoto} onChange={handleChange} />
<input type="file" accept="image/*" className="border rounded p-2 text-black bg-white" ref={fileInputRef} onChange={handleFileChange} />
<input className="border rounded p-2 text-black bg-white" name="linkedin" placeholder="LinkedIn URL" value={form.linkedin} onChange={handleChange} />
<input className="border rounded p-2 text-black bg-white" name="twitter" placeholder="Twitter URL" value={form.twitter} onChange={handleChange} />
 <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg mt-2 hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? (initialData ? "Saving..." : "Submitting...") : (initialData ? "Save Changes" : "Submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
