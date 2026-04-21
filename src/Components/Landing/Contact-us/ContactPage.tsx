import { Download, FileText, Mail, MapPin, Phone, Send } from "lucide-react";
import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

/* ── ContactInfo Sub-component ── */
function ContactInfo({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="flex items-center gap-2 text-[#e6edf3] font-semibold text-base mb-1.5">
        {icon}
        {label}
      </p>
      <p className="text-[#8b949e] text-sm pl-6">{value}</p>
    </div>
  );
}
export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (
    data: ContactFormInputs,
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <section id="contact" className="text-[#e6edf3] px-5 py-16 font-sans">
      {/* ── Resume Section ── */}
      <div className="max-w-2xl mx-auto mb-16">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-[#e6edf3] mb-2">
            Resume &amp; Skills
          </h1>
          <p className="text-[#8b949e] text-sm">
            Download my resume or explore my technical expertise across various
            domains
          </p>
        </div>

        {/* Resume Card */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl px-7 py-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <FileText className="text-[#a371f7] shrink-0" size={26} />
            <div>
              <p className="text-[#e6edf3] font-semibold text-base mb-1">
                My Resume
              </p>
              <p className="text-[#8b949e] text-sm">
                Complete overview of my experience and skills
              </p>
            </div>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 py-2.5 rounded-full font-medium text-sm transition-colors duration-200"
          >
            <Download size={15} />
            Download CV
          </a>
        </div>
      </div>

      {/* ── Contact Section ── */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-4"
        >
          {/* Name */}
          <div>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
              className={`w-full bg-[#161b22] border ${
                errors.name ? "border-[#f85149]" : "border-[#30363d]"
              } rounded-lg px-4 py-3 text-[#e6edf3] text-sm placeholder:text-[#8b949e] outline-none focus:border-[#7c3aed] transition-colors duration-200`}
            />
            {errors.name && (
              <p className="text-[#f85149] text-xs mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              placeholder="Email"
              className={`w-full bg-[#161b22] border ${
                errors.email ? "border-[#f85149]" : "border-[#30363d]"
              } rounded-lg px-4 py-3 text-[#e6edf3] text-sm placeholder:text-[#8b949e] outline-none focus:border-[#7c3aed] transition-colors duration-200`}
            />
            {errors.email && (
              <p className="text-[#f85149] text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Message"
              rows={6}
              className={`w-full bg-[#161b22] border ${
                errors.message ? "border-[#f85149]" : "border-[#30363d]"
              } rounded-lg px-4 py-3 text-[#e6edf3] text-sm placeholder:text-[#8b949e] outline-none focus:border-[#7c3aed] transition-colors duration-200 resize-y min-h-32.5`}
            />
            {errors.message && (
              <p className="text-[#f85149] text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-[#1c2230] hover:bg-[#21262d] border border-[#30363d] hover:border-[#7c3aed] text-[#e6edf3] disabled:text-[#8b949e] rounded-lg py-3.5 font-medium text-sm transition-all duration-200 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              "Sending…"
            ) : (
              <>
                <Send size={14} />
                Send
              </>
            )}
          </button>

          {isSubmitSuccessful && (
            <p className="text-center text-[#3fb950] text-sm">
              ✓ Message sent successfully!
            </p>
          )}
        </form>

        {/* Contact Info */}
        <div className="flex flex-col gap-8">
          <ContactInfo
            icon={<Phone size={17} />}
            label="Phone"
            value="+8801632701883"
          />
          <ContactInfo
            icon={<Mail size={17} />}
            label="Email"
            value="istiaqahmmedfahad@gmail.com"
          />
          <ContactInfo
            icon={<MapPin size={17} />}
            label="Address"
            value="Farmgate, Tejgaon, Dhaka 1215, Bangladesh"
          />
        </div>
      </div>
    </section>
  );
}
