import React, { useState } from 'react';

const Input = ({ label, type = "text", ...props }) => (
  <div className="grid w-full items-center">
    <label className="mb-2 block text-sm font-semibold text-darkerviridiangreen">{label}</label>
    <input
      type={type}
      className="w-full rounded-lg border border-viridiangreen/20 bg-white px-4 py-2 focus:border-tahitigold focus:outline-none focus:ring-2 focus:ring-tahitigold/20"
      {...props}
    />
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div className="grid w-full items-center">
    <label className="mb-2 block text-sm font-semibold text-darkerviridiangreen">{label}</label>
    <select
      className="w-full rounded-lg border border-viridiangreen/20 bg-white px-4 py-2 focus:border-tahitigold focus:outline-none focus:ring-2 focus:ring-tahitigold/20"
      {...props}
    >
      <option value="">Select one...</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const RadioGroup = ({ label, options, ...props }) => (
  <div className="grid w-full items-center py-3 md:py-4">
    <label className="mb-3 block text-sm font-semibold text-darkerviridiangreen md:mb-4">{label}</label>
    <div className="grid grid-cols-2 gap-x-6 gap-y-3.5">
      {options.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <input
            type="radio"
            id={option.value}
            value={option.value}
            className="h-4 w-4 text-tahitigold focus:ring-tahitigold"
            {...props}
          />
          <label htmlFor={option.value} className="text-darkviridiangreen">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  </div>
);

export const Contact4 = (props) => {
  const { tagline, heading, description, button } = {
    ...Contact4Defaults,
    ...props,
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    description: "",
    message: "",
    acceptTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  const topics = [
    { value: "membership", label: "Membership Inquiry" },
    { value: "partnership", label: "Course Partnership" },
    { value: "tournament", label: "Tournament Information" },
    { value: "other", label: "Other" },
  ];

  const descriptions = [
    { value: "golfer", label: "Golfer" },
    { value: "course-owner", label: "Course Owner/Manager" },
    { value: "tournament-organizer", label: "Tournament Organizer" },
    { value: "business", label: "Business Partner" },
    { value: "media", label: "Media/Press" },
    { value: "other", label: "Other" },
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container flex flex-col items-center">
        <div className="mb-8 w-full max-w-2xl text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold text-tahitigold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold text-darkerviridiangreen md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="text-darkviridiangreen md:text-md">{description}</p>
        </div>
        
        <form className="grid w-full max-w-2xl grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <Input
              label="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <Input
              label="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              label="Phone number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <Select
            label="How can we help?"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            options={topics}
            required
          />

          <RadioGroup
            label="Which best describes you?"
            name="description"
            value={formData.description}
            onChange={handleChange}
            options={descriptions}
          />

          <div className="grid w-full items-center">
            <label className="mb-2 block text-sm font-semibold text-darkerviridiangreen">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="min-h-[11.25rem] w-full rounded-lg border border-viridiangreen/20 bg-white px-4 py-2 focus:border-tahitigold focus:outline-none focus:ring-2 focus:ring-tahitigold/20"
              placeholder="Tell us how we can help..."
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="h-4 w-4 rounded border-viridiangreen/20 text-tahitigold focus:ring-tahitigold"
            />
            <label htmlFor="terms" className="text-sm text-darkviridiangreen">
              I accept the{" "}
              <a href="#" className="text-tahitigold underline hover:text-midtahitigold">
                Terms and Conditions
              </a>
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-lg bg-chaugreen px-6 py-3 font-semibold text-white transition-colors hover:bg-black"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export const Contact4Defaults = {
  tagline: "Contact Us",
  heading: "Let's Talk Golf",
  description: "Have questions about our golf network? Fill out the form below and our team will get back to you shortly.",
  button: { title: "Send Message" },
};
