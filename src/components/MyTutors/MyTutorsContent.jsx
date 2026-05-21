"use client";

import React, { use, useState, startTransition } from "react";
import Image from "next/image";

const MyTutorsContent = ({ tutorsPromise }) => {
  // use হুক দিয়ে প্রমিস থেকে ডাটা রিজলভ করা হচ্ছে
  // const initialTutors = use(tutorsPromise) || [];

    const tutors = use(tutorsPromise) || [];
    console.log(tutors, "from my tutors content page")
  
  // রিয়েল-টাইম আপডেটের জন্য স্টেট
  // const [tutors, setTutors] = useState(initialTutors);

  // মডাল স্টেটসমূহ
  // const [isEditOpen, setIsEditOpen] = useState(false);
  // const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  
  // সিলেক্টেড টিউটর স্টেট
  // const [selectedTutor, setSelectedTutor] = useState(null);
  // const [editFormData, setEditFormData] = useState({
  //   name: "",
  //   subject: "",
  //   fee: "",
  //   image: "",
  // });

  // ডিলিট কনফার্মেশন হ্যান্ডলার
  // const handleDeleteClick = (tutor) => {
  //   setSelectedTutor(tutor);
  //   setIsDeleteOpen(true);
  // };

  // const handleConfirmDelete = async () => {
  //   try {
  //     const res = await fetch(`http://localhost:5000/MyTutor/${selectedTutor._id}`, {
  //       method: "DELETE",
  //     });

  //     if (res.ok) {
  //       // পেজ রিলোড ছাড়া সাথে সাথে স্টেট থেকে ডিলিট করা
  //       setTutors(tutors.filter((t) => t._id !== selectedTutor._id));
  //       setIsDeleteOpen(false);
  //       setSelectedTutor(null);
  //     }
  //   } catch (error) {
  //     console.error("Error deleting tutor:", error);
  //   }
  // };

  // আপডেট/এডিট হ্যান্ডলার
  // const handleEditClick = (tutor) => {
  //   setSelectedTutor(tutor);
  //   setEditFormData({
  //     name: tutor.name || "",
  //     subject: tutor.subject || "",
  //     fee: tutor.fee || "",
  //     image: tutor.image || "",
  //   });
  //   setIsEditOpen(true);
  // };

  // const handleEditSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch(`http://localhost:5000/tutor/${selectedTutor._id}`, {
  //       method: "PATCH", // অথবা PUT আপনার ব্যাকএন্ড অনুযায়ী
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(editFormData),
  //     });

  //     if (res.ok) {
  //       // পেज রিলোড ছাড়া সাথে সাথে UI আপডেট করা
  //       setTutors(
  //         tutors.map((t) =>
  //           t._id === selectedTutor._id ? { ...t, ...editFormData } : t
  //         )
  //       );
  //       setIsEditOpen(false);
  //       setSelectedTutor(null);
  //     }
  //   } catch (error) {
  //     console.error("Error updating tutor:", error);
  //   }
  // };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">My Tutors List</h1>
          <p className="text-slate-500 mt-2 text-sm">
            Review, update, or remove the tutors you have added to the platform.
          </p>
        </div>

        {/* Empty State (কোনো টিউটর না থাকলে) */}
        {tutors.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200/60 p-12 text-center shadow-sm max-w-md mx-auto mt-12">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧑‍🏫</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">No Tutors Added Yet</h3>
            <p className="text-slate-500 text-sm mt-1 mb-6">
              You havent listed any tutors under your account. Add a tutor to help students find them!
            </p>
          </div>
        ) : (
          /* Tutors Table */
          <div className="bg-white rounded-3xl border border-slate-200/60 shadow-xl shadow-slate-100/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200/60 text-slate-600 text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-6">Tutor Info</th>
                    <th className="py-4 px-6">Subject</th>
                    <th className="py-4 px-6">Hourly Fee</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {tutors?.map((tutor, index) => (
                    <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                      
                      {/* Tutor Image & Name */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0">
                            <Image 
                              src={tutor?.tutorImage || "https://i.ibb.co.com/XrH9m4Zt/avatar.png"} 
                              alt={tutor?.tutorName || "Tutor"}
                              fill
                              sizes="44px"
                              className="object-cover"
                            />
                          </div>
                          <span className="font-bold text-slate-900">{tutor?.tutorName}</span>
                        </div>
                      </td>

                      {/* Subject */}
                      <td className="py-4 px-6 text-slate-600 font-medium">
                        {tutor?.subject || "N/A"}
                      </td>

                      {/* Fee */}
                      <td className="py-4 px-6 font-bold text-slate-900">
                        {tutor?.tutorFee || 0}
                      </td>

                      {/* Action Buttons */}
                      <td className="py-4 px-6 text-right flex justify-end gap-2">
                        <button 
                          // onClick={() => handleEditClick(tutor)}
                          className="text-xs font-bold bg-white text-blue-600 border border-blue-200 px-3 py-2 rounded-xl shadow-sm hover:bg-blue-50 active:scale-95 transition-all cursor-pointer"
                        >
                          Update
                        </button>
                        <button 
                          // onClick={() => handleDeleteClick(tutor)}
                          className="text-xs font-bold bg-white text-red-600 border border-red-200 px-3 py-2 rounded-xl shadow-sm hover:bg-red-50 active:scale-95 transition-all cursor-pointer"
                        >
                          Delete
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= UPDATE MODAL ================= */}
        {/* {isEditOpen && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
              <h2 className="text-xl font-black text-slate-900 mb-4">Update Tutor Information</h2>
              
              <form onSubmit={handleEditSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Tutor Name</label>
                  <input 
                    type="text" 
                    required
                    value={editFormData.name}
                    onChange={(e) => setEditFormData({...editFormData, name: e.target.value})}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Subject</label>
                  <input 
                    type="text" 
                    required
                    value={editFormData.subject}
                    onChange={(e) => setEditFormData({...editFormData, subject: e.target.value})}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Hourly Fee ($)</label>
                  <input 
                    type="number" 
                    required
                    value={editFormData.fee}
                    onChange={(e) => setEditFormData({...editFormData, fee: e.target.value})}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Image URL</label>
                  <input 
                    type="url" 
                    required
                    value={editFormData.image}
                    onChange={(e) => setEditFormData({...editFormData, image: e.target.value})}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <button 
                    type="button"
                    onClick={() => setIsEditOpen(false)}
                    className="px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-4 py-2 text-sm font-bold bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )} */}

        {/* ================= CONFIRM DELETE MODAL ================= */}
        {/* {isDeleteOpen && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 text-center animate-in fade-in zoom-in-95 duration-150">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                ⚠️
              </div>
              <h2 className="text-lg font-black text-slate-900">Are you absolutely sure?</h2>
              <p className="text-slate-500 text-xs mt-1 mb-6">
                This will permanently delete <span className="font-bold text-slate-700">{selectedTutor?.name}</span> from your list. This action cannot be undone.
              </p>
              
              <div className="flex justify-center gap-2">
                <button 
                  onClick={() => setIsDeleteOpen(false)}
                  className="px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  No, Cancel
                </button>
                <button 
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 text-sm font-bold bg-red-600 text-white rounded-xl shadow-md hover:bg-red-700 transition-colors cursor-pointer"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        )} */}

      </div>
    </div>
  );
};

export default MyTutorsContent;