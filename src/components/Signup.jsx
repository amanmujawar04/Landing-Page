import React, { useState } from "react";

const fonts = [
  { label: "Poppins", className: "font-poppins" },
  { label: "Roboto", className: "font-roboto" },
  { label: "Montserrat", className: "font-montserrat" },
  { label: "Inter", className: "font-inter" },
];

const logos = [
  { logoUrl: "https://img.icons8.com/?size=100&id=16421&format=png&color=F25081", id: "lightning" },
  { logoUrl: "https://img.icons8.com/?size=100&id=6661&format=png&color=F25081", id: "cube" },
  { logoUrl: "https://img.icons8.com/?size=100&id=OVz4O4XLEe8J&format=png&color=F25081", id: "planet" },
  { logoUrl: "https://img.icons8.com/?size=100&id=7697&format=png&color=F25081", id: "heart" },
];

const brandColors = [
  { color: "#DA277F", id: "pink" }, // pink
  { color: "#4649FF", id: "blue" }, // blue
  { color: "#22C55E", id: "green" }, // green
];

const cornerRadiusOptions = [
  { label: "None", value: "rounded-none" },
  { label: "Small", value: "rounded-md" },
  { label: "Full", value: "rounded-full" },
];

const tabs = [
  "Sign up",
  "Log in",
  "Profile",
  "Email list subscribe",
  "Lead capture",
  "Transactional email",
];

export default function SignUpForm() {
  const [darkMode, setDarkMode] = useState(true);
  const [fontIndex, setFontIndex] = useState(0);
  const [selectedLogo, setSelectedLogo] = useState("planet");
  const [brandColor, setBrandColor] = useState("#DA277F");
  const [cornerRadius, setCornerRadius] = useState("rounded-md");
  const [activeTab, setActiveTab] = useState("Sign up");

  const fontClass = fonts[fontIndex].className;

  const renderTabContent = () => {
    switch (activeTab) {
      case "Sign up":
        return (
          <form className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className={`w-full px-3 py-2 border ${cornerRadius} border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-600`}
                required
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block mb-1 font-semibold">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className={`w-full px-3 py-2 border ${cornerRadius} border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-600`}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block mb-1 font-semibold">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className={`w-full px-3 py-2 border ${cornerRadius} border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-600`}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="organization" className="block mb-1 font-semibold">
                Organization
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                className={`w-full px-3 py-2 border ${cornerRadius} border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-600`}
              />
            </div>

            <button
              type="submit"
              className={`w-full py-2 mt-2 rounded-md font-semibold text-white transition-colors`}
              style={{ backgroundColor: brandColor }}
            >
              Sign up
            </button>
          </form>
        );
      case "Log in":
        return (
          <form className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <label htmlFor="loginEmail" className="block mb-1 font-semibold">
                Email
              </label>
              <input
                id="loginEmail"
                name="loginEmail"
                type="email"
                placeholder="you@example.com"
                className={`w-full px-3 py-2 border ${cornerRadius} border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-600`}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 font-semibold">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className={`w-full px-3 py-2 border ${cornerRadius} border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-600`}
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-2 mt-2 rounded-md font-semibold text-white transition-colors`}
              style={{ backgroundColor: brandColor }}
            >
              Log in
            </button>
          </form>
        );
     case "Profile":
  return (
    <div className="max-w-md p-4 mx-auto text-gray-700 bg-white rounded shadow dark:bg-gray-800 dark:text-gray-300">
      <p className="mb-6 text-lg font-semibold" style={{ color: brandColor }}>
        User Profile
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div>
          <label htmlFor="bio" className="block mb-1 font-medium">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            placeholder="Tell us about yourself"
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          ></textarea>
        </div>
        <button
          type="submit"
          style={{ backgroundColor: brandColor }}
          className="w-full py-2 text-white transition rounded hover:brightness-90"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
      case "Email list subscribe":
        return (
          <form className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <label htmlFor="subscribeEmail" className="block mb-1 font-semibold">
                Email Address
              </label>
              <input
                id="subscribeEmail"
                name="subscribeEmail"
                type="email"
                placeholder="you@example.com"
                className={`w-full px-3 py-2 border ${cornerRadius} border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-600`}
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-2 mt-2 rounded-md font-semibold text-white transition-colors`}
              style={{ backgroundColor: brandColor }}
            >
              Subscribe
            </button>
          </form>
        );
      case "Lead capture":
        return (
          <form className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <label htmlFor="leadName" className="block mb-1 font-semibold">
                Name
              </label>
              <input
                id="leadName"
                name="leadName"
                type="text"
                placeholder="Full name"
                className={`w-full px-3 py-2 border ${cornerRadius} border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-600`}
                required
              />
            </div>

            <div>
              <label htmlFor="leadEmail" className="block mb-1 font-semibold">
                Email
              </label>
              <input
                id="leadEmail"
                name="leadEmail"
                type="email"
                placeholder="you@example.com"
                className={`w-full px-3 py-2 border ${cornerRadius} border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-600`}
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-2 mt-2 rounded-md font-semibold text-white transition-colors`}
              style={{ backgroundColor: brandColor }}
            >
              Capture Lead
            </button>
          </form>
        );
      case "Transactional email":
        return (
          <div className="space-y-4 text-sm text-center text-gray-700 dark:text-gray-300">
            <p className="font-semibold" style={{ color: brandColor }}>
              Transactional Email Preview
            </p>
            <div className="p-4 border border-gray-300 rounded-md dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              {/* Sample transactional email content */}
              <p>Hello,</p>
              <p>This is a sample transactional email content.</p>
              <p>Thank you for your business!</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={` flex flex-col items-center justify-start px-4 py-12 ${
        darkMode
          ? "bg-gradient-to-tr from-[#1e042b] to-[#2d003e] text-white"
          : "bg-white text-gray-900"
      } transition-colors duration-500 font-sans`}
    >
      <h2 className="mb-6 text-2xl font-extrabold text-center md:text-3xl">
        Styled for your brand
      </h2>
      <p className="max-w-xs mb-10 text-xs text-center text-gray-400 select-none md:max-w-md">
        Fully customizable embeds fit natively with your site’s design.
      </p>

      {/* Navigation tabs */}
      <nav className="flex flex-wrap justify-center gap-2 mb-12 text-xs font-semibold text-gray-400 select-none">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 rounded-md hover:bg-gray-700/40 transition-colors duration-200 ${
              activeTab === tab
                ? darkMode
                  ? "bg-pink-600 text-white"
                  : "bg-pink-400 text-white"
                : ""
            }`}
            type="button"
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="flex flex-col w-full max-w-5xl md:flex-row md:space-x-16">
        {/* Left Controls */}
        <div className="flex flex-col w-full space-y-8 mb-14 md:mb-0 md:w-64">
          {/* Appearance */}
          <div>
            <h3 className="mb-2 text-sm font-semibold select-none">Appearance</h3>
            <div className="inline-flex overflow-hidden bg-white border border-gray-300 rounded-md dark:bg-transparent dark:border-gray-600">
              <button
                onClick={() => setDarkMode(false)}
                className={`px-3 py-1 text-xs cursor-pointer font-semibold focus:outline-none ${
                  !darkMode
                    ? "bg-pink-600 text-white"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                type="button"
              >
                Light
              </button>
              <button
                onClick={() => setDarkMode(true)}
                className={`px-3 py-1 text-xs cursor-pointer font-semibold focus:outline-none ${
                  darkMode
                    ? "bg-pink-600 text-white"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                type="button"
              >
                Dark
              </button>
            </div>
          </div>

          {/* Fonts */}
          <div>
            <h3 className="mb-2 text-sm font-semibold select-none">Fonts</h3>
            <div className="grid grid-cols-2 gap-3">
              {fonts.map((font, index) => (
                <button
                  key={font.label}
                  onClick={() => setFontIndex(index)}
                  className={`px-3 py-4 rounded-md border cursor-pointer focus:outline-none transition-colors ${
                    fontIndex === index
                      ? "bg-pink-600 text-white"
                      : "bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 hover:bg-pink-100 dark:hover:bg-pink-200"
                  } ${font.className} text-lg font-bold select-none`}
                  type="button"
                >
                  Aa
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center Tab Content */}
        <div
          className={`relative w-full max-w-md p-8 ${cornerRadius} bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300 ${fontClass}`}
          style={{ borderColor: brandColor, borderWidth: 1 }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src={logos.find((l) => l.id === selectedLogo)?.logoUrl}
              alt={selectedLogo}
              className="w-12 h-12"
              loading="lazy"
            />
          </div>
          <h3 className="mb-6 text-lg font-extrabold text-center" style={{ color: brandColor }}>
            {activeTab}
          </h3>

          {renderTabContent()}

          {activeTab === "Sign up" && (
            <>
              <div className="mt-3 text-xs text-center text-gray-400">— OR —</div>

              <button
                type="button"
                className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-3 text-gray-700 transition bg-white border border-gray-400 rounded-md dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
                  alt="Google logo"
                  className="w-5 h-5"
                  loading="lazy"
                />
                Sign up with Google
              </button>

              <p className="mt-4 text-xs text-center text-gray-400 select-none">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("Log in")}
                  className="font-semibold text-pink-500 hover:underline focus:outline-none"
                >
                  Log in
                </button>
              </p>
            </>
          )}
        </div>

        {/* Right Controls */}
        <div className="flex flex-col w-full mt-12 space-y-8 md:mt-0 md:w-64">
          {/* Logo */}
          <div>
            <h3 className="mb-2 text-sm font-semibold select-none">Logo</h3>
            <div className="grid grid-cols-2 gap-3">
              {logos.map(({ logoUrl, id }) => (
                <button
                  key={id}
                  onClick={() => setSelectedLogo(id)}
                  className={`flex items-center justify-center p-4 border rounded-md cursor-pointer focus:outline-none transition-colors ${
                    selectedLogo === id
                      ? "bg-white text-white border-pink-600"
                      : "bg-gray-700 text-white border-transparent hover:bg-gray-600"
                  }`}
                  aria-label={`Select logo ${id}`}
                  type="button"
                >
                  <img src={logoUrl} alt={id} className="w-6 h-6" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {/* Brand Color */}
          <div>
            <h3 className="mb-2 text-sm font-semibold select-none">Brand color</h3>
            <div className="flex gap-3">
              {brandColors.map(({ color, id }) => (
                <button
                  key={id}
                  onClick={() => setBrandColor(color)}
                  className={`w-7 h-7 rounded-full border-2 border-transparent cursor-pointer focus:outline-none transition ${
                    brandColor === color ? "border-white" : "hover:border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Select brand color ${id}`}
                  type="button"
                />
              ))}
            </div>
          </div>

          {/* Corner Radius */}
          <div>
            <h3 className="mb-2 text-sm font-semibold select-none">Corner radius</h3>
            <div className="flex gap-3">
              {cornerRadiusOptions.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setCornerRadius(value)}
                  className={`px-3 py-2 rounded-md font-semibold border cursor-pointer focus:outline-none transition-colors ${
                    cornerRadius === value ? "bg-pink-600 text-white border-pink-600" : "border-gray-600 text-gray-300 hover:bg-gray-700"
                  }`}
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Fonts Extensions */}
      <style>
        {`
          /* Import Google fonts dynamically if needed for demo */
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@700&family=Montserrat:wght@700&family=Inter:wght@700&display=swap');

          .font-poppins { font-family: 'Poppins', sans-serif; }
          .font-roboto { font-family: 'Roboto', sans-serif; }
          .font-montserrat { font-family: 'Montserrat', sans-serif; }
          .font-inter { font-family: 'Inter', sans-serif; }
        `}
      </style>
    </div>
  );
}