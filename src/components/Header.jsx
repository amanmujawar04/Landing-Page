import React, { useState } from "react";

const dropdownData = {
  Learn: [
    { title: "Is Outseta for me?", desc: "Find out if it's the right fit" },
    { title: "Product demo", desc: "Watch Geoff give a full tour" },
    { title: "The case for Outseta", desc: "As told successful founders on X" },
    { title: "28 time-saving workflows", desc: "Get back to what matters" },
    { title: "Partner program", desc: "Make money while you sleep" },
    { title: "Design showcase", desc: "Explore designs from our community" },
  ],
  Product: [
    { title: "Payments", desc: "Connect to Stripe and start selling" },
    { title: "CRM", desc: "Track prospects and customers" },
    { title: "Email", desc: "Set up campaigns and automations" },
    { title: "Help Desk", desc: "Help your customers" },
    { title: "Auth and Gating", desc: "Create member-only access" },
  ],
  Pricing: [],
  Support: [
    { title: "Knowledge base", desc: "Find answers" },
    { title: "API docs", desc: "For developers" },
    { title: "Outseta Academy", desc: "Bite sized how-to video content" },
    { title: "Integration guides", desc: "Connect your favorite tools" },
  ],
  Company: [
    { title: "About Us", desc: "Learn our story" },
    { title: "Careers", desc: "Join our team" },
    { title: "Press", desc: "In the news" },
  ],
  Blog: [
    { title: "Latest Posts", desc: "Insights & updates" },
    { title: "Case Studies", desc: "Success stories" },
    { title: "Events", desc: "Join upcoming webinars" },
  ],
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const closeModals = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const navKeys = ["Learn", "Product", "Pricing", "Support", "Company", "Blog"];

  const renderDropdownItems = (key) => (
    <div
      className="absolute left-0 z-50 w-64 p-4 mt-2 space-y-3 bg-white border border-gray-200 rounded-md shadow-lg top-full"
      onMouseLeave={closeDropdown}
    >
      {dropdownData[key]?.map(({ title, desc }, idx) => (
        <a
          key={idx}
          href="#"
          className="block p-2 rounded cursor-pointer hover:bg-gray-100"
          onClick={closeDropdown}
        >
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <p className="text-sm text-gray-500">{desc}</p>
        </a>
      ))}
    </div>
  );

  return (
    <>
      <header className="fixed z-50 w-full max-w-6xl -translate-x-1/2 bg-transparent border border-gray-400 rounded-full shadow-md top-4 left-1/2">
        <div className="flex items-center justify-between px-4 py-2 mx-auto rounded-full max-w-7xl md:px-6">
          <div className="text-3xl font-bold text-black select-none">Outseta</div>

          {/* Desktop nav */}
          <nav className="items-center hidden space-x-6 md:flex">
            {navKeys.map((key) =>
              key === "Pricing" ? (
                <a
                  key={key}
                  href="#"
                  className="font-medium text-gray-700 hover:text-black focus:outline-none"
                >
                  {key}
                </a>
              ) : (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(key)}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    type="button"
                    onClick={() => toggleDropdown(key)}
                    className="flex items-center space-x-1 font-medium text-gray-700 hover:text-black focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === key}
                  >
                    <span>{key}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === key ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {openDropdown === key && renderDropdownItems(key)}
                </div>
              )
            )}

            {/* Login Button */}
            <button
              onClick={() => {
                closeDropdown();
                setShowLogin(true);
              }}
              className="px-5 py-1 ml-4 text-black transition bg-white border border-black rounded hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Login
            </button>

            {/* Signup Button */}
            <button
              onClick={() => {
                closeDropdown();
                setShowSignup(true);
              }}
              className="px-5 py-1 ml-2 text-black transition bg-yellow-600 border border-black rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            >
              Sign up
            </button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="text-2xl text-gray-700 focus:outline-none md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="max-w-md px-6 pb-6 mx-auto space-y-3 bg-white rounded-b-full shadow-md md:hidden">
            {navKeys.map((key) => (
              <DropdownMobileItem key={key} label={key} items={dropdownData[key]} />
            ))}

            <div className="flex mt-4 space-x-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowLogin(true);
                }}
                className="flex-1 px-5 py-2 text-black transition bg-white border border-black rounded hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowSignup(true);
                }}
                className="flex-1 px-5 py-2 text-black transition bg-yellow-600 border border-black rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              >
                Sign up
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Login Modal */}
      {showLogin && (
        <Modal title="Login" onClose={closeModals}>
          <LoginForm onClose={closeModals} />
        </Modal>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <Modal title="Sign Up" onClose={closeModals}>
          <SignupForm onClose={closeModals} />
        </Modal>
      )}
    </>
  );
}

function DropdownMobileItem({ label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="flex items-center justify-between w-full py-2 text-lg font-medium text-left text-gray-700 border-b border-gray-200 hover:text-black focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {label}
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="pl-5 mt-2 space-y-2 border-l border-gray-300">
          {items?.map(({ title, desc }, idx) => (
            <a
              key={idx}
              href="#"
              className="block text-gray-700 cursor-pointer hover:text-black"
              onClick={(e) => e.preventDefault()}
            >
              <h4 className="font-semibold">{title}</h4>
              <p className="text-sm text-gray-500">{desc}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function Modal({ title, children, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-auto bg-black bg-opacity-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 id="modal-title" className="text-xl font-semibold">
            {title}
          </h2>
          <button
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function LoginForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with: ${email}`);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Email
        <input
          type="email"
          required
          className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="block text-sm font-medium text-gray-700">
        Password
        <input
          type="password"
          required
          className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button
        type="submit"
        className="w-full px-4 py-2 font-semibold text-white bg-yellow-600 rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      >
        Login
      </button>
    </form>
  );
}

function SignupForm({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert(`Signing up with: ${email}`);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Name
        <input
          type="text"
          required
          className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="block text-sm font-medium text-gray-700">
        Email
        <input
          type="email"
          required
          className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="block text-sm font-medium text-gray-700">
        Password
        <input
          type="password"
          required
          className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label className="block text-sm font-medium text-gray-700">
        Confirm Password
        <input
          type="password"
          required
          className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <button
        type="submit"
        className="w-full px-4 py-2 font-semibold text-white bg-yellow-600 rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      >
        Sign Up
      </button>
    </form>
  );
}

export default Header;