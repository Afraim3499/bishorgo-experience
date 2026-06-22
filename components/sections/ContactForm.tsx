"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

interface ContactFormValues {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  serviceInterest: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    serviceInterest: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formValues.name.trim()) newErrors.name = "Full name is required";
    if (!formValues.businessName.trim()) newErrors.businessName = "Business/Brand name is required";
    
    if (!formValues.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formValues.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formValues.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formValues.serviceInterest) newErrors.serviceInterest = "Please select an interest category";
    if (!formValues.message.trim()) newErrors.message = "Please share what you are building";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Contact Form Submission:", formValues);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-[#014A36]/10 p-8 md:p-10 lg:p-12 rounded-[32px] shadow-sm relative min-h-[500px] text-[#222222]">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="contact-form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#014A36] mb-2">
              Start the Conversation
            </h2>
            <p className="text-xs text-[#222222]/55 mb-8 font-medium leading-relaxed">
              Tell us about your brand and what you want to create. We will review your goals and schedule a call within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name & Business Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider font-bold text-[#222222]/80">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Asif Chowdhury"
                    className={`w-full h-12 px-4 rounded-xl border bg-[#F8F5EF]/30 focus:outline-none focus:ring-1 focus:ring-[#C8922B] text-sm text-[#222222] ${
                      errors.name ? "border-[#C8922B]" : "border-[#014A36]/15 focus:border-[#014A36]"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-[#C8922B] flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {errors.name}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="businessName" className="text-xs uppercase tracking-wider font-bold text-[#222222]/80">
                    Brand / Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formValues.businessName}
                    onChange={handleInputChange}
                    placeholder="e.g. Bengal Threads"
                    className={`w-full h-12 px-4 rounded-xl border bg-[#F8F5EF]/30 focus:outline-none focus:ring-1 focus:ring-[#C8922B] text-sm text-[#222222] ${
                      errors.businessName ? "border-[#C8922B]" : "border-[#014A36]/15 focus:border-[#014A36]"
                    }`}
                  />
                  {errors.businessName && (
                    <span className="text-xs text-[#C8922B] flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {errors.businessName}
                    </span>
                  )}
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs uppercase tracking-wider font-bold text-[#222222]/80">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +8801XXXXXXXXX"
                    className={`w-full h-12 px-4 rounded-xl border bg-[#F8F5EF]/30 focus:outline-none focus:ring-1 focus:ring-[#C8922B] text-sm text-[#222222] ${
                      errors.phone ? "border-[#C8922B]" : "border-[#014A36]/15 focus:border-[#014A36]"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-xs text-[#C8922B] flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {errors.phone}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs uppercase tracking-wider font-bold text-[#222222]/80">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    placeholder="e.g. asif@brand.com"
                    className={`w-full h-12 px-4 rounded-xl border bg-[#F8F5EF]/30 focus:outline-none focus:ring-1 focus:ring-[#C8922B] text-sm text-[#222222] ${
                      errors.email ? "border-[#C8922B]" : "border-[#014A36]/15 focus:border-[#014A36]"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-[#C8922B] flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Service Interest Select */}
              <div className="space-y-1.5">
                <label htmlFor="serviceInterest" className="text-xs uppercase tracking-wider font-bold text-[#222222]/80">
                  What do you need help with?
                </label>
                <div className="relative">
                  <select
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formValues.serviceInterest}
                    onChange={handleInputChange}
                    className={`w-full h-12 px-4 rounded-xl border bg-[#F8F5EF]/30 focus:outline-none focus:ring-1 focus:ring-[#C8922B] text-sm text-[#222222] appearance-none ${
                      errors.serviceInterest ? "border-[#C8922B]" : "border-[#014A36]/15 focus:border-[#014A36]"
                    }`}
                  >
                    <option value="">Select a category</option>
                    <option value="Complete Experience System">Complete Experience System (All touchpoints)</option>
                    <option value="Brand Strategy & Identity">Brand Strategy & Identity</option>
                    <option value="Next.js Web Experience">Next.js Web Experience</option>
                    <option value="Content & Social Media Strategy">Content & Social Media Strategy</option>
                    <option value="Field Activated Campaigns">Field Activated Campaigns & Events</option>
                    <option value="Other Business Needs">Other Business Needs</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#014A36]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                {errors.serviceInterest && (
                  <span className="text-xs text-[#C8922B] flex items-center gap-1 mt-1">
                    <AlertCircle size={12} /> {errors.serviceInterest}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs uppercase tracking-wider font-bold text-[#222222]/80">
                  Tell us about your project/goals
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formValues.message}
                  onChange={handleInputChange}
                  placeholder="e.g. We want to design an end-to-end customer loop. This includes rebranding, building a fast Next.js site, and designing our packaging boxes..."
                  className={`w-full p-4 rounded-xl border bg-[#F8F5EF]/30 focus:outline-none focus:ring-1 focus:ring-[#C8922B] text-sm text-[#222222] resize-none ${
                    errors.message ? "border-[#C8922B]" : "border-[#014A36]/15 focus:border-[#014A36]"
                  }`}
                />
                {errors.message && (
                  <span className="text-xs text-[#C8922B] flex items-center gap-1 mt-1">
                    <AlertCircle size={12} /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-13 inline-flex items-center justify-center bg-[#014A36] hover:bg-[#002f24] text-[#FFFDF8] rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : (
                    <>
                      <span>Start a Conversation</span>
                      <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </motion.div>
        ) : (
          /* Success Message */
          <motion.div
            key="success-view"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center text-center py-16 px-4 space-y-6"
          >
            <div className="w-14 h-14 rounded-full bg-[#014A36]/5 text-[#014A36] flex items-center justify-center border border-[#014A36]/10">
              <CheckCircle2 size={32} className="text-[#C8922B]" />
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-extrabold text-[#014A36]">
                Message Received
              </h2>
              <p className="text-sm text-[#222222]/70 leading-relaxed font-medium max-w-md">
                Thank you, <span className="font-semibold">{formValues.name}</span>. Your message has been sent. We will review your project details and get back to you shortly.
              </p>
            </div>

            <div className="bg-[#014A36]/3 border border-[#014A36]/5 p-5 rounded-2xl text-xs max-w-sm text-[#222222]/60 leading-relaxed font-medium">
              We will email you at <span className="font-semibold">{formValues.email}</span> or contact you at <span className="font-semibold">{formValues.phone}</span> within 24 hours.
            </div>

            <div className="pt-4">
              <button
                onClick={() => setIsSubmitted(false)}
                className="inline-flex items-center justify-center border border-[#014A36]/20 hover:bg-[#014A36]/5 text-[#014A36] text-xs font-semibold px-6 h-10 rounded-full transition-colors"
              >
                Send another message
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default ContactForm;
