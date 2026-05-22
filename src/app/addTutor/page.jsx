"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "react-toastify";

const AddTutorPage = () => {

   const { data: session } = authClient.useSession();
    const user = session?.user;
    // console.log(user.id)
    

  const [formData, setFormData] = useState({
    name: '',
    photoUrl: '',
    subject: '',
    teachingMode: '',
    availableDays: '',
    availableTime: '',
    hourlyFee: '',
    totalSlot: '',
    sessionStartDate: '',
    location: '',
    institution: '',
    experience: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault() 
    setLoading(true)


    try {
     
     
      const fullTutorData = {
        ...formData,
        userId: user.id 
      };



      
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/MyTutors`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
          },
        body: JSON.stringify(fullTutorData)
      })

      toast.success('Tutor profile created successfully!')
      setFormData({
        name: '', photoUrl: '', subject: '', teachingMode: '',
        availableDays: '', availableTime: '', hourlyFee: '',
        totalSlot: '', sessionStartDate: '', location: '',
        institution: '', experience: ''
      })

    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
    return (

       <div className="min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-xl shadow-slate-100/50">
        
        {/* Form Header */}
        <div className="text-center space-y-2 mb-10">
          <span className="bg-blue-50 text-blue-700 text-xs uppercase tracking-widest px-3 py-1 rounded-md font-bold">
            Onboarding Dashboard
          </span>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
            Create Tutor Profile
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            Fill in the professional details below to list a new tutor on the platform.
          </p>
        </div>

        {/* Form Body */}
        <form  onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 1. Tutor Name */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Tutor Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Dr. Mahfuzur Rahman"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 font-medium"
              />
            </div>

            {/* 2. Photo URL (Imgbb/Postimage) */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Tutor Photo Link</label>
              <input
                type="url"
                name="photoUrl"
                required
                placeholder="e.g. https://i.ibb.co/your-image.jpg"
                value={formData.photoUrl}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 font-medium"
              />
            </div>

            {/* 3. Subject / Category (Dropdown) */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Subject / Category</label>
              <select
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-700 font-medium cursor-pointer"
              >
                <option value="">Select a subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="Computer Science">Computer Science</option>
                <option value="English">English</option>
              </select>
            </div>

            {/* 4. Teaching Mode (Dropdown) */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Teaching Mode</label>
              <select
                name="teachingMode"
                required
                value={formData.teachingMode}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-700 font-medium cursor-pointer"
              >
                <option value="">Select mode</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Both">Both (Online & Offline)</option>
              </select>
            </div>

            {/* 5. Available Days */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Available Days</label>
              <input
                type="text"
                name="availableDays"
                required
                placeholder="e.g. Sun - Thu"
                value={formData.availableDays}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 font-medium"
              />
            </div>

            {/* 6. Available Time Slot */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Available Time Slot</label>
              <input
                type="text"
                name="availableTime"
                required
                placeholder="e.g. 5:00 PM - 8:00 PM"
                value={formData.availableTime}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 font-medium"
              />
            </div>

            {/* 7. Hourly Fee */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Hourly Fee ($)</label>
              <input
                type="text"
                name="hourlyFee"
                required
                min="0"
                placeholder="e.g. $15"
                value={formData.hourlyFee}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 font-medium"
              />
            </div>

            {/* 8. Total Slot */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Total Slots</label>
              <input
                type="number"
                name="totalSlot"
                required
                min="1"
                placeholder="e.g. 5"
                value={formData.totalSlot}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 font-medium"
              />
            </div>

            {/* 9. Session Start Date (Date-Picker) */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Session Start Date</label>
              <input
                type="date"
                name="sessionStartDate"
                required
                value={formData.sessionStartDate}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-600 font-medium cursor-pointer"
              />
            </div>

            {/* 10. Location / Area / City */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Location / Area / City</label>
              <input
                type="text"
                name="location"
                required
                placeholder="e.g. Dhanmondi, Dhaka"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 font-medium"
              />
            </div>

            {/* 11. Institution */}
            <div className="space-y-1.5 md:col-span-1">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Institution</label>
              <input
                type="text"
                name="institution"
                required
                placeholder="e.g. BUET / Dhaka University"
                value={formData.institution}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 font-medium"
              />
            </div>

            {/* 12. Experience */}
            <div className="space-y-1.5 md:col-span-1">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Experience</label>
              <input
                type="text"
                name="experience"
                required
                placeholder="e.g. 4 Years of Teaching"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-900 font-medium"
              />
            </div>

          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 disabled:bg-slate-400 transition-all uppercase tracking-wider text-sm cursor-pointer"
            >
             
              {loading ? "Saving Profile..." : "Submit Tutor Profile"}
            </button>
          </div>

        </form>
      </div>
    </div>
    );
};

export default AddTutorPage;
