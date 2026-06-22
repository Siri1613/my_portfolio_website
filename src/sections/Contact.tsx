import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import SectionWrapper, { SectionHeading } from '../components/SectionWrapper';
import { personalInfo } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
    },
  ];

  return (
    <SectionWrapper id="contact" className="bg-gray-50 dark:bg-gray-900">
      <SectionHeading
        label="Contact"
        title="Let's Work Together"
        subtitle="Whether you have an opportunity, a project idea, or just want to chat — my inbox is always open."
      />

      <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
        {/* Left info panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Get In Touch</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              I am currently open to new opportunities and collaborations. Feel free to reach out via the form or directly through any of the channels below.
            </p>
          </div>

          {/* Contact info */}
          <div className="space-y-3">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 hover:border-teal-500/30 hover:shadow-sm transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 dark:text-gray-500">{label}</p>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
              Connect
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 flex items-center justify-center hover:border-teal-500/50 hover:text-teal-500 hover:bg-teal-50 dark:hover:bg-teal-500/5 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Message Sent!</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Thank you for reaching out. I will get back to you shortly.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-teal-600 dark:text-teal-400 font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.01] disabled:opacity-70 disabled:scale-100 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {sending ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
