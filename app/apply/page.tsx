'use client'
import Image from "next/image";
import Hero from "../components/Hero";
import Link from "next/link";
import { useState } from "react";
import { ParticipantApplicationData } from "../types";
import { supabase } from "../utils/supabase";

const Apply = () => {
  const [formData, setFormData] = useState<ParticipantApplicationData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    category: "",
    skill: "",
    hasTeam: false,
    teamMembers: "",
    ideaDescription: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Special case for hasTeam which is a boolean
    if (name === "hasTeam") {
      setFormData(prev => ({ 
        ...prev, 
        [name]: value === "Yes" 
      }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Add a timestamp
      const submissionData = {
        ...formData,
        createdAt: new Date().toISOString()
      };
      
      // Convert client-side object keys to snake_case for API
      const apiData = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        category: formData.category,
        skill: formData.skill,
        hasTeam: formData.hasTeam,
        teamMembers: formData.teamMembers || "",
        ideaDescription: formData.ideaDescription
      };
      
      // Make API call
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application');
      }
      
      // Reset form and show success
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        category: "",
        skill: "",
        hasTeam: false,
        teamMembers: "",
        ideaDescription: ""
      });
      
      setSubmitted(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      
    } catch (error: any) {
      console.error('Error submitting form:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-[100px]">
      <Hero
        title="Apply to Participate"
        description="Join HackJos 2025 and compete for amazing prizes while solving
            real-world challenges"
      />
      <div className="mx-auto w-[90%] lg:max-w-4xl mt-8 lg:mt-[65px]">
        <Link href={"/"} className="flex justify-start items-center gap-2">
          <Image src={"/back.svg"} height={40} width={40} alt="back" />
          <p className="lg:text-xl">Back Home</p>
        </Link>

        {submitted && (
          <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Your application has been submitted successfully! We'll get back to you soon.
          </div>
        )}

        {error && (
          <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-5 lg:mt-10 pt-5 pb-8 lg:py-11 bg-white shadow-lg rounded-[20px] lg:rounded-[30px]"
        >
          <h2 className="font-medium text-[28px] px-4 lg:px-11 py-[20px] lg:pb-[30px] border-b-[1px] border-b-[#00000025]">
            Apply to Participate
          </h2>

          <div className="px-4 lg:px-11 py-6 lh:py-12 flex flex-col w-full gap-4 lg:gap-8">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="fullName"
                className="font-[500] lg:text-[20px] text-[#00000065]"
              >
                Full Name
              </label>
              <input
                type="text"
                className="rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-2 w-full border-[#00000045] font-[500] lg:text-[20px]"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-[500] lg:text-[20px] text-[#00000065]"
              >
                Email Address
              </label>
              <input
                type="email"
                className="rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-2 w-full border-[#00000045] font-[500] lg:text-[20px]"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4 lg:gap-10">
              <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
                <label
                  htmlFor="phoneNumber"
                  className="font-[500] lg:text-[20px] text-[#00000065]"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-2 w-full border-[#00000045] font-[500] lg:text-[20px]"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
                <label
                  htmlFor="category"
                  className="font-[500] lg:text-[20px] text-[#00000065]"
                >
                  Category(Student, Freelancer e.t.c)
                </label>
                <select
                  name="category"
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-2 w-full border-[#00000045] font-[500] lg:text-[20px]"
                  required
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="Student">Student</option>
                  <option value="Freelancer">Freelancer</option>
                  <option value="Employee">Employee</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="skill"
                className="font-[500] lg:text-[20px] text-[#00000065]"
              >
                Skill (UI/UX, Front End, Business Developer, Backend){" "}
              </label>
              <select
                name="skill"
                id="skill"
                value={formData.skill}
                onChange={handleChange}
                className="rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-2 w-full border-[#00000045] font-[500] lg:text-[20px]"
                required
              >
                <option value="" disabled>
                  Select skill
                </option>
                <option value="UI/UX">UI/UX</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Business Developer">Business Developer</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="hasTeam"
                className="font-[500] lg:text-[20px] text-[#00000065]"
              >
                Do you have a team?{" "}
              </label>
              <select
                name="hasTeam"
                id="hasTeam"
                value={formData.hasTeam ? "Yes" : "No"}
                onChange={handleChange}
                className="rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-2 w-full border-[#00000045] font-[500] lg:text-[20px]"
                required
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="teamMembers"
                className="font-[500] lg:text-[20px] text-[#00000065]"
              >
                If yes, Fill in their names and skill (Comma Separated){" "}
              </label>
              <input
                type="text"
                className="rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-2 w-full border-[#00000045] font-[500] lg:text-[20px]"
                name="teamMembers"
                id="teamMembers"
                value={formData.teamMembers}
                onChange={handleChange}
                placeholder="Name and skill"
                disabled={!formData.hasTeam}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="ideaDescription"
                className="font-[500] lg:text-[20px] text-[#00000065]"
              >
                Describe your idea{" "}
              </label>
              <textarea
                className="rounded-[10px] lg:rounded-[15px] border h-[130px] lg:h-[180px] p-2 lg:p-3 w-full border-[#00000045] font-[500] lg:text-[20px]"
                name="ideaDescription"
                id="ideaDescription"
                value={formData.ideaDescription}
                onChange={handleChange}
                placeholder="Describe idea"
                required
              />
            </div>
          </div>

          <div className="mt-8 lg:mt-[75px] flex justify-between items-center gap-6 lg:gap-[45px] px-4 lg:px-11">
            <Link href="/" className="w-full">
              <button 
                type="button"
                className="w-full border border-[#00000035] h-10 lg:h-[65px] rounded-[6px] font-medium text-[18px] text-[#00000065]"
              >
                Cancel
              </button>
            </Link>
            <button 
              type="submit"
              disabled={loading}
              className={`w-full ${loading ? 'bg-[#33C36C]/70' : 'bg-[#33C36C]'} text-white h-10 lg:h-[65px] rounded-[6px] font-medium text-[18px]`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Apply;
