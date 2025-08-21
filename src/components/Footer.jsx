import React from "react";

const FooterSection = () => {
  const footerLinks = {
    Product: [
      { label: "Payments", href: "#" },
      { label: "CRM", href: "#" },
      { label: "Email", href: "#" },
      { label: "Help desk", href: "#" },
      { label: "Auth and gating", href: "#" },
      { label: "Pricing", href: "#" },
    ],
    Company: [
      { label: "About us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Partner program", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
    ],
    Resources: [
      { label: "Zapier integration", href: "#", external: true },
      { label: "Webflow + Example", href: "#" },
      { label: "Webflow agencies", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Best membership software", href: "#", external: true },
      { label: "Status", href: "#", external: true },
    ],
    Developers: [
      { label: "Knowledge base", href: "#", external: true },
      { label: "API docs", href: "#", external: true },
      { label: "Time-saving workflows", href: "#" },
    ],
  };

  const socialLinks = [
    {
      href: "https://x.com/",
      label: "Twitter",
      iconClass:
        "https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000",
    },
    {
      href: "https://bsky.app/",
      label: "Bluesky",
      iconClass:
        "https://img.icons8.com/?size=100&id=MGqlXOe8ksH0&format=png&color=000000",
    },
    {
      href: "https://in.linkedin.com/",
      label: "Linkedin",
      iconClass:
        "https://img.icons8.com/?size=100&id=8808&format=png&color=000000",
    },
    {
      href: "https://www.youtube.com/",
      label: "YouTube",
      iconClass:
        "https://img.icons8.com/?size=100&id=-w18vPIfQB8h&format=png&color=000000",
    },
  ];

  return (
    <>
      <section className="py-12 bg-black">
        <div className="container px-6 mx-auto lg:flex lg:items-center lg:justify-between">
          {/* Left side content */}
          <div className="mb-6 text-white lg:w-1/2 lg:mb-0">
            <h1 className="mb-4 text-6xl font-bold">
              Get started with
              <br />
              Outseta today
            </h1>
            <p className="mb-6 text-xl text-gray-400">
              Try Outseta free for 7 days-you'll have access to every feature.
              Cancel any time.
            </p>
            <a
              href="/get-started"
              className="inline-flex items-center px-6 py-3 text-lg font-medium transition bg-yellow-500 border"
            >
              <span>Start your free trial 🡢</span>
            </a>
          </div>
          {/* Right side image */}
          <div className="flex justify-center lg:w-1/2">
            <img
              src="https://cdn.prod.website-files.com/663cf90ca192fe7e5bcb8bd7/6700431fc3dc3762b59884e8_cdc5cff098435a0a7f0259a36fdbdab8_cleanshot-2024-10-04-15-33-33-p-800.avif" 
              alt="Dashboard Image"
              className="h-auto max-w-full rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>

      <footer className="py-10 text-gray-700 bg-white">
        <div className="container grid grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col justify-between">
            <div className="text-3xl font-bold text-black select-none">Outseta</div>
            <p className="text-sm text-gray-500 ">&copy; 2025 Outseta Company</p>
            <div className="flex mt-4 space-x-4 md:mt-0">
              {socialLinks.map(({ href, label, iconClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-500 hover:text-gray-900"
                >
                  <img src={iconClass} alt={`${label} icon`} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="mb-3 font-semibold">{section}</h3>
              <ul className="space-y-2 text-sm">
                {links.map(({ label, href, external }) => (
                  <li key={label}>
                    <a
                      href={href || "#"}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="hover:text-black"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
};

export default FooterSection;