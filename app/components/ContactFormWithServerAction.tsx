import React, { useState } from "react";
import { submitContactForm } from "../actions/contactActions";

const ContactFormWithServerAction = () => {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setPending(true);
    setError(null);
    
    try {
      // Extract form data
      const fullName = formData.get('fullName') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;
      
      // Submit with server action
      const result = await submitContactForm({ fullName, email, message });
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to submit form');
      }
      
      // Show success message
      setSuccess(true);
      
      // Reset form (need to access the form element)
      const form = document.getElementById('contact-form') as HTMLFormElement;
      if (form) form.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="md:px-[78px] py-[128px] w-full ">
      <section className=" w-full md:rounded-[30px] overflow-hidden max-xl:py-[20px]  place-self-center bg-gradient-to-b from-[#33C36C] to-[#185D34]  flex justify-center items-center ">
        <section className="relative rounded-l-[15px] w-full 2xl:w-[573px] hidden xl:flex flex-1/2 2xl:flex-2/5 overflow-hidden">
          {/* Background image */}
          <img
            src="./contactImage.png"
            alt=""
            className="w-full h-full object-cover"
          />

          {/* Overlay with text at bottom */}
          <div className="absolute inset-0 bg-[#00000066] flex items-end p-6">
            <div>
              <h2 className="text-[36px] font-semibold text-white">
                Partner with Us
              </h2>
              <p className="text-white text-lg">
                Partner with HackJos 2025 to showcase your commitment to
                innovation and connect with the next generation of tech leaders.
              </p>
            </div>
          </div>
        </section>
        <section className="flex-1/2 2xl:flex-3/5  flex felx-col items-center justify-center  ">
          <form
            id="contact-form"
            action={handleSubmit}
            className="flex w-[80%]  gap-[18px] bg-white/15 border border-white rounded-[30px] px-[26px] py-[45px]   flex-col"
          >
            <h1 className=" text-[#FFFFFF] font-semibold text-[30px] leading-[32px] w-full ">
              Get in Touch
            </h1>
            
            {success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Thank you for your message. We'll get back to you soon!
              </div>
            )}
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
            
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              className="h-[55px] w-full placeholder:text-[white]/75 border border-white p-[10px] rounded-[12px]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="h-[55px] w-full placeholder:text-[white]/75 border border-white p-[10px] rounded-[12px]"
            />
            <h2 className="text-[#fff] text-[16px] leading-[20px]">Message</h2>
            <textarea
              name="message"
              placeholder="Type here..."
              required
              className="h-[129px] w-full placeholder:text-[white]/75 border border-white p-[10px] rounded-[12px]"
            ></textarea>
            <button
              type="submit"
              disabled={pending}
              aria-disabled={pending}
              className={`text-[18px] text-white cursor-pointer max-md:place-self-center hover:bg-[#22b25b] leading-[32px] w-[229px] h-[50px] p-[10px] font-medium text-center rounded-[15px] ${pending ? 'bg-[#22b25b]/70' : 'bg-[#33C36C]'}`}
            >
              {pending ? "Submitting..." : "Submit"}
            </button>
          </form>
        </section>
      </section>
    </main>
  );
};

export default ContactFormWithServerAction;
