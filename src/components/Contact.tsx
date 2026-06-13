import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

// Customize this Formspree form ID to get emails directly!
// Create a free account at https://formspree.io/ and paste your form ID here.
const FORMSPREE_FORM_ID = 'xlgkolaj'; 

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const tempErrors: typeof errors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    if (!FORMSPREE_FORM_ID) {
      // Fallback to client-side local alert + open mail client
      setTimeout(() => {
        setStatus('success');
        const subject = encodeURIComponent("Portfolio Message from " + formData.name);
        const body = encodeURIComponent(`Hi Jyaneswar,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`);
        window.location.href = `mailto:alubilllijyaneswarrao@gmail.com?subject=${subject}&body=${body}`;
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, 1000);
      return;
    }
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleWhatsAppSend = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    const text = encodeURIComponent(`Hi Jyaneswar,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`);
    window.open(`https://wa.me/918919501272?text=${text}`, '_blank');
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jyaneshnaidu',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      color: 'hover:text-blue-600 hover:border-blue-600/30 hover:bg-blue-50/20'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/alubillijyaneswarrao-creator',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'hover:text-slate-900 dark:hover:text-white hover:border-slate-500/30 hover:bg-slate-50/20'
    },
    {
      name: 'LeetCode',
      href: 'https://leetcode.com/u/jyaneswarrao/',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.375 1.375 0 0 0 0 1.945l1.945 1.945a1.375 1.375 0 0 0 1.945 0l9.777-9.778a1.375 1.375 0 0 0 0-1.945L14.444.414A1.375 1.375 0 0 0 13.483 0zm5.102 5.102a1.375 1.375 0 0 0-.962.414l-9.778 9.777a1.375 1.375 0 0 0 0 1.945l1.945 1.945a1.375 1.375 0 0 0 1.945 0l9.777-9.777a1.375 1.375 0 0 0 0-1.945L19.547 5.516a1.375 1.375 0 0 0-.962-.414zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12h3a9 9 0 1 1 18 0z" />
        </svg>
      ),
      color: 'hover:text-amber-500 hover:border-amber-500/30 hover:bg-amber-50/10'
    },
    {
      name: 'HackerRank',
      href: 'https://www.hackerrank.com/profile/alubillijyanesw1',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12 0L1.7 5.95v12.1L12 24l10.3-5.95v-12.1L12 0zm7.1 16.48l-7.1 4.11-7.1-4.11V7.52l7.1-4.11 7.1 4.11v8.96z" />
        </svg>
      ),
      color: 'hover:text-emerald-500 hover:border-emerald-500/30 hover:bg-emerald-50/10'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#0F172A] border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Get in Touch</h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Let's Build Something Great Together
          </p>
          <div className="h-1.5 w-16 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* Column 1: Info Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Contact Details
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
              Feel free to reach out for internship inquiries, project collaborations, software consulting, or general technical discussions.
            </p>

            <div className="space-y-4">
              
              {/* Phone card */}
              <div className="glass-panel p-5 rounded-xl border border-slate-200/60 dark:border-slate-850 flex items-center space-x-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Call Me</h4>
                  <a href="tel:+918919501272" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600">
                    +91 8919501272
                  </a>
                </div>
              </div>

              {/* Email card */}
              <div className="glass-panel p-5 rounded-xl border border-slate-200/60 dark:border-slate-850 flex items-center space-x-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-600 dark:text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Email Me</h4>
                  <a href="mailto:alubilllijyaneswarrao@gmail.com" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 break-all">
                    alubilllijyaneswarrao@gmail.com
                  </a>
                </div>
              </div>

              {/* Location card */}
              <div className="glass-panel p-5 rounded-xl border border-slate-200/60 dark:border-slate-850 flex items-center space-x-4">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-600 dark:text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Location</h4>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Vadodara, Gujarat | Hyderabad, Telangana, India
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links Badge */}
            <div className="pt-6">
              <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
                Professional Networks
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 transition-all duration-200 cursor-pointer ${social.color}`}
                  >
                    <span>{social.icon}</span>
                    <span className="text-sm font-semibold">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-850 text-left">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                    } bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-xs text-red-500 font-semibold">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                    } bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-xs text-red-500 font-semibold">{errors.email}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                    } bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none`}
                    placeholder="Enter your message"
                  />
                  {errors.message && <p className="text-xs text-red-500 font-semibold">{errors.message}</p>}
                </div>

                {/* Submit Action */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-500/15 transition-all duration-200 disabled:opacity-75 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <span>Sending Email...</span>
                    ) : (
                      <>
                        <Send className="w-4.5 h-4.5" />
                        <span>Send Email</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md shadow-emerald-500/15 transition-all duration-200 cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.734-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.63-1.023-5.101-2.887-6.967C16.586 1.946 14.113.92 11.483.92c-5.437 0-9.862 4.42-9.866 9.854-.002 2.01.524 3.976 1.523 5.727L2.1 21.9l5.647-1.48c1.536.837 3.126 1.277 4.73 1.277zm11.233-7.732c-.3-.149-1.772-.875-2.046-.975-.276-.101-.476-.149-.676.15-.199.299-.772.975-.948 1.172-.175.198-.351.223-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.49-1.777-1.665-2.076-.176-.3-.019-.462.13-.611.135-.133.3-.349.45-.523.149-.174.199-.299.299-.498.1-.201.05-.375-.025-.524-.075-.15-.676-1.63-.925-2.228-.243-.584-.489-.505-.676-.514-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.11 3.22 5.11 4.52.714.31 1.27.495 1.703.633.717.228 1.368.196 1.884.119.575-.085 1.772-.725 2.022-1.425.25-.7 0-1.299-.1-1.424-.1-.125-.3-.199-.6-.349z"/>
                    </svg>
                    <span>Send WhatsApp</span>
                  </button>
                </div>

                {/* Feedback Alerts */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center space-x-3 text-emerald-600 dark:text-emerald-400"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-semibold">Your message was sent successfully. I will get back to you soon!</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-3 text-red-600"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-semibold">Something went wrong. Please check your details and try again.</span>
                  </motion.div>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
