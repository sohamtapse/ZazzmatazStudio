"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";

/* -------------------- Toast -------------------- */
type ToastType = "success" | "error";

const Toast = ({
  type,
  message,
  onClose,
}: {
  type: ToastType;
  message: string;
  onClose: () => void;
}) => (
  <div
    className={`fixed top-6 right-6 z-50 rounded-xl px-4 py-3 shadow-lg text-white
      ${type === "success" ? "bg-emerald-600" : "bg-red-600"}`}
  >
    <div className="flex items-center gap-3">
      <span className="font-semibold">
        {type === "success" ? "Success" : "Error"}
      </span>
      <span className="opacity-90">{message}</span>
      <button onClick={onClose} className="ml-2 text-white/80 hover:text-white">
        ✕
      </button>
    </div>
  </div>
);

/* -------------------- Zod Schema -------------------- */
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(20),
  date: z.string().min(1, "Please select a date"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

/* -------------------- Component -------------------- */
const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "",
    message: "",
  });

  const [toast, setToast] = useState<{
    type: ToastType;
    message: string;
  } | null>(null);

  const showToast = (type: ToastType, message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      contactSchema.parse(formData);

      showToast(
        "success",
        "Booking request sent! We'll contact you within 24 hours."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        service: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.issues.forEach((issue) => {
          showToast("error", issue.message);
        });
      } else {
        showToast("error", "Something went wrong");
      }
    }
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Book Your Session
          </h1>
          <p className="text-xl opacity-70 max-w-2xl mx-auto">
            Let's create something beautiful together. Fill out the form below
            and we'll get back to you soon.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                {
                  id: "name",
                  label: "Full Name",
                  type: "text",
                  placeholder: "John Doe",
                },
                {
                  id: "email",
                  label: "Email Address",
                  type: "email",
                  placeholder: "john@example.com",
                },
                {
                  id: "phone",
                  label: "Phone Number",
                  type: "tel",
                  placeholder: "(555) 123-4567",
                },
              ].map((field) => (
                <div key={field.id}>
                  <label className="block text-sm font-semibold mb-2">
                    {field.label} *
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    value={(formData as any)[field.id]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Service Type *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="portrait">Portrait Session</option>
                  <option value="fashion">Fashion Photography</option>
                  <option value="event">Event Coverage</option>
                  <option value="custom">Custom Package</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg min-h-32"
                  placeholder="Tell us about your vision..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800"
              >
                Send Booking Request
              </button>
            </form>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-[linear-gradient(135deg,hsl(150_62%_85%)_0%,hsl(280_100%_93%)_50%,hsl(35_100%_98%)_100%)] rounded-3xl p-8">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

              <Info icon={<Phone />} title="Phone" text="(555) 123-4567" />
              <Info
                icon={<Mail />}
                title="Email"
                text="hello@capturestudio.com"
              />
              <Info
                icon={<MapPin />}
                title="Location"
                text="123 Creative Avenue, CA"
              />
              <Info
                icon={<Calendar />}
                title="Availability"
                text="2–3 months advance"
              />
            </div>

            <div className="bg-[rgb(0,20,41)] text-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Quick Response Guarantee
              </h3>
              <p className="mb-4">
                We value your time! All booking requests receive a response
                within 24 hours.
              </p>
              <p className="text-sm">
                Weekend bookings fill up quickly. Book 2–3 months in advance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/* -------------------- Helper Component -------------------- */
const Info = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => (
  <div className="flex items-center gap-4 mb-4">
    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="opacity-80">{text}</p>
    </div>
  </div>
);

export default Contact;
