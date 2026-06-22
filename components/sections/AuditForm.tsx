"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

interface AuditFormValues {
  name: string;
  businessName: string;
  industry: string;
  channelLink: string;
  phone: string;
  email: string;
  challenge: string;
}

interface FormErrors {
  [key: string]: string;
}

export const AuditForm: React.FC = () => {
  const [formValues, setFormValues] = useState<AuditFormValues>({
    name: "",
    businessName: "",
    industry: "",
    channelLink: "",
    phone: "",
    email: "",
    challenge: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formValues.name.trim()) newErrors.name = "Full name is required";
    if (!formValues.businessName.trim()) newErrors.businessName = "Business name is required";
    if (!formValues.industry.trim()) newErrors.industry = "Industry/niche is required";
    if (!formValues.channelLink.trim()) newErrors.channelLink = "Website or Facebook link is required";
    
    if (!formValues.phone.trim()) {
      newErrors.phone = "Phone or WhatsApp number is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formValues.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formValues.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formValues.challenge.trim()) newErrors.challenge = "Please share your main challenge";

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
      console.log("Experience Audit Request:", formValues);
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
            key="form-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-[#014A36] mb-2">
              Request Your Free Audit
            </h2>
            <p className="text-xs text-[#222222]/55 mb-8 font-medium leading-relaxed">
              Complete the details below. Our strategy team will manually inspect your brand touchpoints and send you a custom report.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name & Business Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider font-bold text-[#222222]/80">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Tasnim Ahmed"
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
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formValues.businessName}
                    onChange={handleInputChange}
                    placeholder="e.g. Dhaka Artisan"
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

              {/* Industry & Link */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="industry" className="text-xs uppercase tracking-wider font-bold text-[#222222]/80">
                    Industry / Niche
                  </label>
                  <div className="relative">
                    <select
                      id="industry"
                      name="industry"
                      value={formValues.industry}
                      onChange={handleInputChange}
                      className={`w-full h-12 px-4 rounded-xl border bg-[#F8F5EF]/30 focus:outline-none focus:ring-1 focus:ring-[#C8922B] text-sm text-[#222222] appearance-none ${
                        errors.industry ? "border-[#C8922B]" : "border-[#014A36]/15 focus:border-[#014A36]"
                      }`}
                    >
                      <option value="">Select industry</option>
                      <option value="Fashion / Retail">Fashion / Retail</option>
                      <option value="Food / Restaurant">Food / Restaurant</option>
                      <option value="SaaS / Tech Startup">SaaS / Tech Startup</option>
                      <option value="Service Provider">Service Provider</option>
                      <option value="E-commerce Store">E-commerce Store</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#014A36]">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  {errors.industry && (
                    <span className="text-xs text-[#C8922B] flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {errors.industry}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="channelLink" className="text-xs uppercase tracking-wider font-bold text-[#222222]/80">
                    Website or Facebook Link
                  </label>
                  <input
                    type="text"
                    id="channelLink"
                    name="channelLink"
                    value={formValues.channelLink}
                    onChange={handleInputChange}
                    placeholder="e.g. facebook.com/page"
                    className={`w-full h-12 px-4 rounded-xl border bg-[#F8F5EF]/30 focus:outline-none focus:ring-1 focus:ring-[#C8922B] text-sm text-[#222222] ${
                      errors.channelLink ? "border-[#C8922B]" : "border-[#014A36]/15 focus:border-[#014A36]"
                    }`}
                  />
                  {errors.channelLink && (
                    <span className="text-xs text-[#C8922B] flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {errors.channelLink}
                    </span>
                  )}
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs uppercase tracking-wider font-bold text-[#222222]/80">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +88017XXXXXXXX"
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
                    Business Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    placeholder="e.g. contact@business.com"
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

              {/* Main Challenge */}
              <div className="space-y-1.5">
                <label htmlFor="challenge" className="text-xs uppercase tracking-wider font-bold text-[#222222]/80">
                  What is your biggest experience challenge?
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  rows={4}
                  value={formValues.challenge}
                  onChange={handleInputChange}
                  placeholder="e.g. Customers visit our website but leave before adding products. Our package unboxing doesn't match our online positioning..."
                  className={`w-full p-4 rounded-xl border bg-[#F8F5EF]/30 focus:outline-none focus:ring-1 focus:ring-[#C8922B] text-sm text-[#222222] resize-none ${
                    errors.challenge ? "border-[#C8922B]" : "border-[#014A36]/15 focus:border-[#014A36]"
                  }`}
                />
                {errors.challenge && (
                  <span className="text-xs text-[#C8922B] flex items-center gap-1 mt-1">
                    <AlertCircle size={12} /> {errors.challenge}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-13 inline-flex items-center justify-center bg-[#014A36] hover:bg-[#002f24] text-[#FFFDF8] rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    "Analyzing Details..."
                  ) : (
                    <>
                      <span>Submit Audit Request</span>
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
                Audit Request Registered
              </h2>
              <p className="text-sm text-[#222222]/70 leading-relaxed font-medium max-w-md">
                Thank you, <span className="font-semibold">{formValues.name}</span>. We have received your request to audit <span className="font-semibold">{formValues.businessName}</span>.
              </p>
            </div>

            <div className="bg-[#014A36]/3 border border-[#014A36]/5 p-5 rounded-2xl text-xs max-w-sm text-[#222222]/60 leading-relaxed font-medium">
              Our experience strategy team will manually audit your channels and reach out to <span className="font-semibold">{formValues.email}</span> or WhatsApp <span className="font-semibold">{formValues.phone}</span> in 3–5 business days.
            </div>

            <div className="pt-4">
              <button
                onClick={() => setIsSubmitted(false)}
                className="inline-flex items-center justify-center border border-[#014A36]/20 hover:bg-[#014A36]/5 text-[#014A36] text-xs font-semibold px-6 h-10 rounded-full transition-colors"
              >
                Submit another request
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default AuditForm;
