"use client";

import Image from "next/image";
import Hero from "../components/Hero";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AttendeeRegistrationData } from "../types";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.5 },
  },
};

const Register = () => {
  const [formData, setFormData] = useState<AttendeeRegistrationData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    category: "",
    organization: "",
    profession: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const setField = (name: keyof AttendeeRegistrationData, value: string) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target as {
      name: keyof AttendeeRegistrationData;
      value: string;
    };
    setField(name, value);
  };

  // Validations
  const emailValid = useMemo(
    () => /^\S+@\S+\.\S+$/.test(formData.email.trim()),
    [formData.email]
  );
  // permissive Intl phone: allows +234… or 0… (10–15 digits total)
  const phoneValid = useMemo(
    () => /^(\+?\d[\d\s-]{8,14}\d)$/.test(formData.phoneNumber.trim()),
    [formData.phoneNumber]
  );
  const nameValid = formData.fullName.trim().length >= 2;
  const categoryValid = !!formData.category;
  const orgValid = formData.organization.trim().length >= 2;
  const professionValid = formData.profession.trim().length >= 2;

  const canSubmit =
    !loading &&
    nameValid &&
    emailValid &&
    phoneValid &&
    categoryValid &&
    orgValid &&
    professionValid;

  const markTouched = (k: keyof AttendeeRegistrationData) =>
    setTouched((prev) => ({ ...prev, [k]: true }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // reveal all errors if invalid
    setTouched({
      fullName: true,
      email: true,
      phoneNumber: true,
      category: true,
      organization: true,
      profession: true,
    });

    if (!canSubmit) return;

    setLoading(true);
    try {
      const apiData = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        phoneNumber: formData.phoneNumber.trim(),
        category: formData.category,
        organization: formData.organization.trim(),
        profession: formData.profession.trim(),
        createdAt: new Date().toISOString(),
      };

      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apiData),
      });

      const result = await response.json();
      if (!response.ok)
        throw new Error(result?.error || "Failed to submit registration");

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        category: "",
        organization: "",
        profession: "",
      });
      setTouched({});
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-[100px]">
      <Hero
        title="Register to Attend the Innovation Summit"
        description="Join HackJos 2025 and connect with innovators, founders, investors, and policymakers shaping Nigeria’s tech future."
      />

      <div className="mx-auto w-[90%] lg:max-w-4xl mt-8 lg:mt-[65px]">
        <Link href="/" className="flex justify-start items-center gap-2">
          <Image src="/back.svg" height={40} width={40} alt="back" />
          <p className="lg:text-xl">Back Home</p>
        </Link>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"
            role="status"
          >
            Your registration has been submitted successfully! We&apos;ll get
            back to you soon.
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
            role="alert"
          >
            {error}
          </motion.div>
        )}

        <motion.form
          onSubmit={handleSubmit}
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-5 lg:mt-10 pt-5 pb-8 lg:py-11 bg-white shadow-lg rounded-[20px] lg:rounded-[30px]"
          noValidate
        >
          <h2 className="font-medium text-[28px] px-4 lg:px-11 py-[20px] lg:pb-[30px] border-b border-[#00000025]">
            Register
          </h2>

          <div className="px-4 lg:px-11 py-6 lh:py-12 flex flex-col w-full gap-4 lg:gap-8">
            {/* Full Name */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label
                htmlFor="fullName"
                className="font-[500] lg:text-[20px] text-[#00000065]"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={() => markTouched("fullName")}
                placeholder="Enter full name"
                required
                className={`rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-3 w-full font-[500] lg:text-[20px] 
                           ${
                             touched.fullName && !nameValid
                               ? "border-red-400"
                               : "border-[#00000045]"
                           }`}
                aria-invalid={touched.fullName && !nameValid}
              />
              {touched.fullName && !nameValid && (
                <p className="text-sm text-red-500">
                  Please enter at least 2 characters.
                </p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-[500] lg:text-[20px] text-[#00000065]"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => markTouched("email")}
                placeholder="Enter email address"
                required
                className={`rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-3 w-full font-[500] lg:text-[20px]
                           ${
                             touched.email && !emailValid
                               ? "border-red-400"
                               : "border-[#00000045]"
                           }`}
                aria-invalid={touched.email && !emailValid}
              />
              {touched.email && !emailValid && (
                <p className="text-sm text-red-500">Enter a valid email.</p>
              )}
            </motion.div>

            {/* Phone + Category */}
            <div className="grid grid-cols-2 gap-4 lg:gap-10">
              <motion.div
                variants={fadeUp}
                className="col-span-2 lg:col-span-1 flex flex-col gap-2"
              >
                <label
                  htmlFor="phoneNumber"
                  className="font-[500] lg:text-[20px] text-[#00000065]"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  onBlur={() => markTouched("phoneNumber")}
                  placeholder="e.g. +234 801 234 5678"
                  required
                  className={`rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-3 w-full font-[500] lg:text-[20px]
                             ${
                               touched.phoneNumber && !phoneValid
                                 ? "border-red-400"
                                 : "border-[#00000045]"
                             }`}
                  aria-invalid={touched.phoneNumber && !phoneValid}
                />
                {touched.phoneNumber && !phoneValid && (
                  <p className="text-sm text-red-500">
                    Enter a valid phone number.
                  </p>
                )}
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="col-span-2 lg:col-span-1 flex flex-col gap-2"
              >
                <label
                  htmlFor="category"
                  className="font-[500] lg:text-[20px] text-[#00000065]"
                >
                  Category (Student, Freelancer, etc.){" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  onBlur={() => markTouched("category")}
                  className={`rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-3 w-full font-[500] lg:text-[20px]
                              ${
                                touched.category && !categoryValid
                                  ? "border-red-400"
                                  : "border-[#00000045]"
                              }`}
                  required
                  aria-invalid={touched.category && !categoryValid}
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option value="Student">Student</option>
                  <option value="Professional">Professional</option>
                  <option value="Freelancer">Freelancer</option>
                  <option value="Business Owner">Business Owner</option>
                  <option value="Other">Other</option>
                </select>
                {touched.category && !categoryValid && (
                  <p className="text-sm text-red-500">
                    Please select a category.
                  </p>
                )}
              </motion.div>
            </div>

            {/* Organization */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label
                htmlFor="organization"
                className="font-[500] lg:text-[20px] text-[#00000065]"
              >
                Organization <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="organization"
                id="organization"
                value={formData.organization}
                onChange={handleChange}
                onBlur={() => markTouched("organization")}
                placeholder="Enter your organization"
                required
                className={`rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-3 w-full font-[500] lg:text-[20px]
                           ${
                             touched.organization && !orgValid
                               ? "border-red-400"
                               : "border-[#00000045]"
                           }`}
                aria-invalid={touched.organization && !orgValid}
              />
              {touched.organization && !orgValid && (
                <p className="text-sm text-red-500">
                  Please enter at least 2 characters.
                </p>
              )}
            </motion.div>

            {/* Profession */}
            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <label
                htmlFor="profession"
                className="font-[500] lg:text-[20px] text-[#00000065]"
              >
                Profession <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="profession"
                id="profession"
                value={formData.profession}
                onChange={handleChange}
                onBlur={() => markTouched("profession")}
                placeholder="Enter your profession"
                required
                className={`rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-3 w-full font-[500] lg:text-[20px]
                           ${
                             touched.profession && !professionValid
                               ? "border-red-400"
                               : "border-[#00000045]"
                           }`}
                aria-invalid={touched.profession && !professionValid}
              />
              {touched.profession && !professionValid && (
                <p className="text-sm text-red-500">
                  Please enter at least 2 characters.
                </p>
              )}
            </motion.div>
          </div>

          <div className="mt-8 lg:mt-[75px] flex flex-col sm:flex-row justify-between items-center gap-4 lg:gap-[45px] px-4 lg:px-11">
            <Link href="/" className="w-full">
              <button
                type="button"
                className="w-full border border-[#00000035] h-10 lg:h-[65px] rounded-[8px] font-medium text-[16px] lg:text-[18px] text-[#00000065]
                           hover:bg-black/[0.03] transition"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              disabled={loading || !canSubmit}
              className={`w-full h-10 lg:h-[65px] rounded-[8px] font-medium text-[16px] lg:text-[18px] text-white transition
                         ${
                           loading || !canSubmit
                             ? "bg-[#33C36C]/70 cursor-not-allowed"
                             : "bg-[#33C36C] hover:bg-[#28b45f] cursor-pointer"
                         }`}
              aria-busy={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Register;
