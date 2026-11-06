// import React, { useState } from 'react';

// const InquiryForm = () => {
//   const [status, setStatus] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('Sending...');

//     const formData = {
//       name: e.target.name.value,
//       email: e.target.email.value,
//       phone: e.target.phone.value,
//       description: e.target.description.value
//     };

//     try {
//       const response = await fetch('https://shivshree-backend.vercel.app/api/inquiry', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatus('Success! Our experts will contact you shortly.');
//         e.target.reset();
//       } else {
//         setStatus('Submission failed. Please call +91 9923122791.');
//       }
//     } catch (err) {
//       setStatus('Server offline. Contact: mangeshmate4623@gmail.com');
//     }
//   };

//   return (
//     <section id="contact" className="py-24 bg-gray-100">
//       <div className="container mx-auto px-6">
//         <div className="max-w-6xl mx-auto bg-white shadow-2xl flex flex-col md:flex-row">
//           {/* Left Side: Contact Info */}
//           <div className="md:w-1/3 bg-[#030F27] p-12 text-white">
//             <h2 className="text-[#FDBE33] text-3xl font-black mb-8 uppercase tracking-tighter">Get In Touch</h2>
//             <div className="space-y-8">

//               <div>
//                 <p className="text-[#FDBE33] font-bold text-xs uppercase mb-1">Call</p>
//                 <p className="text-sm text-gray-300">+91 9923122791</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Side: The Form */}
//           <div className="md:w-2/3 p-12">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <input name="name" type="text" placeholder="Your Name" className="w-full border-b-2 border-gray-200 py-3 outline-none focus:border-[#FDBE33]" required />
//                 <input name="email" type="email" placeholder="Email Address" className="w-full border-b-2 border-gray-200 py-3 outline-none focus:border-[#FDBE33]" required />
//               </div>
//               <input name="phone" type="text" placeholder="Contact Number" className="w-full border-b-2 border-gray-200 py-3 outline-none focus:border-[#FDBE33]" required />
//               <textarea
//                 name="description"
//                 rows="1" // Start with just one line
//                 placeholder="How can we help?"
//                 className="w-full border-b-2 border-gray-200 py-3 outline-none focus:border-[#FDBE33] transition-all duration-300 min-h-[48px] focus:min-h-[120px]"
//                 required
//               ></textarea>
//               <button type="submit" className="bg-[#030F27] text-white px-12 py-4 font-bold uppercase tracking-widest hover:bg-[#FDBE33] hover:text-[#030F27] transition-all">
//                 Send Request
//               </button>
//               {status && <p className="mt-4 font-bold text-[#030F27]">{status}</p>}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InquiryForm;
import React, { useState } from "react";

const InquiryForm = () => {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Double click protection ke liye

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      description: e.target.description.value,
    };

    try {
      const response = await fetch(
        "https://shivshree-backend.vercel.app/api/enquiry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("Success! Our experts will contact you shortly.");
        e.target.reset();
      } else {
        // Agar backend ne koi custom message bheja ho toh wo dikhao
        setStatus(
          result.message || "Submission failed. Please call +91 9923122791.",
        );
      }
    } catch (err) {
      setStatus("Server offline. Contact: mangeshmate4623@gmail.com");
    } finally {
      setIsLoading(false); // Request khatam hone par wapas button active
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl flex flex-col md:flex-row">
          {/* Left Side: Contact Info */}
          <div className="md:w-1/3 bg-[#030F27] p-12 text-white">
            <h2 className="text-[#FDBE33] text-3xl font-black mb-8 uppercase tracking-tighter">
              Get In Touch
            </h2>
            <div className="space-y-8">
              <div>
                <p className="text-[#FDBE33] font-bold text-xs uppercase mb-1">
                  Call
                </p>
                <p className="text-sm text-gray-300">+91 9923122791</p>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="md:w-2/3 p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-b-2 border-gray-200 py-3 outline-none focus:border-[#FDBE33]"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full border-b-2 border-gray-200 py-3 outline-none focus:border-[#FDBE33]"
                  required
                />
              </div>
              <input
                name="phone"
                type="text"
                placeholder="Contact Number"
                className="w-full border-b-2 border-gray-200 py-3 outline-none focus:border-[#FDBE33]"
                required
              />
              <textarea
                name="description"
                rows={1}
                placeholder="How can we help?"
                className="w-full border-b-2 border-gray-200 py-3 outline-none focus:border-[#FDBE33] transition-all duration-300 min-h-[48px] focus:min-h-[120px]"
                required
              ></textarea>

              <button
                type="submit"
                disabled={isLoading} // Loading ke time disable hoga
                className={`bg-[#030F27] text-white px-12 py-4 font-bold uppercase tracking-widest transition-all ${
                  isLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#FDBE33] hover:text-[#030F27]"
                }`}
              >
                {isLoading ? "Sending..." : "Send Request"}
              </button>

              {status && (
                <p className="mt-4 font-bold text-[#030F27]">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;