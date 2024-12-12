import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';

const Input = ({ label, type = "text", ...props }) => (
  <div className="mb-4">
    <label className="mb-2 block text-sm font-semibold text-darkerviridiangreen">{label}</label>
    <input
      type={type}
      className="w-full rounded-lg border border-viridiangreen/20 bg-white px-4 py-2 focus:border-tahitigold focus:outline-none focus:ring-2 focus:ring-tahitigold/20"
      {...props}
    />
  </div>
);

const TextArea = ({ label, ...props }) => (
  <div className="mb-4">
    <label className="mb-2 block text-sm font-semibold text-darkerviridiangreen">{label}</label>
    <textarea
      className="w-full rounded-lg border border-viridiangreen/20 bg-white px-4 py-2 focus:border-tahitigold focus:outline-none focus:ring-2 focus:ring-tahitigold/20"
      rows="4"
      {...props}
    />
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div className="mb-4">
    <label className="mb-2 block text-sm font-semibold text-darkerviridiangreen">{label}</label>
    <select
      className="w-full rounded-lg border border-viridiangreen/20 bg-white px-4 py-2 focus:border-tahitigold focus:outline-none focus:ring-2 focus:ring-tahitigold/20"
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const Button = ({ variant = "primary", children, className = "", ...props }) => {
  const baseClasses = "px-6 py-3 font-semibold rounded-lg transition-colors flex items-center gap-2";
  const variants = {
    primary: "bg-tahitigold text-white hover:bg-midtahitigold",
    secondary: "bg-transparent border-2 border-viridiangreen text-viridiangreen hover:bg-lowviridiangreen",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="mb-8 flex items-center justify-center gap-2">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`flex h-8 w-8 items-center justify-center rounded-full ${
            index < currentStep
              ? "bg-tahitigold text-white"
              : index === currentStep
              ? "bg-tahitigold/20 text-tahitigold"
              : "bg-viridiangreen/10 text-viridiangreen"
          }`}
        >
          {index < currentStep ? (
            <Check className="h-4 w-4" />
          ) : (
            <span className="text-sm">{index + 1}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export const PartnershipForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    courseName: "",
    website: "",
    location: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    courseType: "",
    numberOfHoles: "",
    facilities: "",
    description: "",
    membershipOptions: "",
    additionalInfo: "",
  });

  const steps = [
    {
      title: "Course Information",
      fields: (
        <>
          <Input
            label="Course Name"
            value={formData.courseName}
            onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
            required
          />
          <Input
            label="Website"
            type="url"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          />
          <Input
            label="Location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
          />
          <Select
            label="Course Type"
            value={formData.courseType}
            onChange={(e) => setFormData({ ...formData, courseType: e.target.value })}
            options={[
              { value: "", label: "Select course type" },
              { value: "championship", label: "Championship Course" },
              { value: "resort", label: "Resort Course" },
              { value: "executive", label: "Executive Course" },
              { value: "other", label: "Other" },
            ]}
            required
          />
        </>
      ),
    },
    {
      title: "Contact Information",
      fields: (
        <>
          <Input
            label="Contact Name"
            value={formData.contactName}
            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
            required
          />
          <Input
            label="Email"
            type="email"
            value={formData.contactEmail}
            onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
            required
          />
          <Input
            label="Phone"
            type="tel"
            value={formData.contactPhone}
            onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
            required
          />
        </>
      ),
    },
    {
      title: "Course Details",
      fields: (
        <>
          <Select
            label="Number of Holes"
            value={formData.numberOfHoles}
            onChange={(e) => setFormData({ ...formData, numberOfHoles: e.target.value })}
            options={[
              { value: "", label: "Select number of holes" },
              { value: "9", label: "9 Holes" },
              { value: "18", label: "18 Holes" },
              { value: "27", label: "27 Holes" },
              { value: "36", label: "36 Holes" },
            ]}
            required
          />
          <TextArea
            label="Available Facilities"
            value={formData.facilities}
            onChange={(e) => setFormData({ ...formData, facilities: e.target.value })}
            placeholder="Describe your practice facilities, clubhouse, pro shop, etc."
            required
          />
          <TextArea
            label="Course Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Tell us about your course design, challenges, and unique features"
            required
          />
        </>
      ),
    },
    {
      title: "Partnership Details",
      fields: (
        <>
          <TextArea
            label="Current Membership Options"
            value={formData.membershipOptions}
            onChange={(e) => setFormData({ ...formData, membershipOptions: e.target.value })}
            placeholder="Describe your current membership structure and rates"
            required
          />
          <TextArea
            label="Additional Information"
            value={formData.additionalInfo}
            onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
            placeholder="Any other details you'd like to share about potential partnership"
          />
        </>
      ),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === steps.length - 1) {
      // Handle form submission
      console.log('Form submitted:', formData);
      // You would typically send this data to your backend here
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-merino">
      <div className="container max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-5 text-5xl font-bold text-darkerviridiangreen">Become a Partner Course</h2>
          <p className="text-darkviridiangreen">
            Join our network of prestigious Dallas golf courses. Fill out the form below to start the partnership process.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-lg md:p-8">
          <StepIndicator currentStep={currentStep} totalSteps={steps.length} />
          
          <h3 className="mb-6 text-center text-2xl font-bold text-darkerviridiangreen">
            {steps[currentStep].title}
          </h3>

          <form onSubmit={handleSubmit}>
            {steps[currentStep].fields}

            <div className="mt-8 flex justify-between gap-4">
              {currentStep > 0 && (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  <ChevronLeft className="h-5 w-5" />
                  Previous
                </Button>
              )}
              <Button
                type="submit"
                variant="primary"
                className={currentStep === 0 ? "ml-auto" : ""}
              >
                {currentStep === steps.length - 1 ? "Submit Application" : "Next"}
                {currentStep !== steps.length - 1 && <ChevronRight className="h-5 w-5" />}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
