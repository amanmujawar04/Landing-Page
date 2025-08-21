import React from "react";

const featuresData = [
  {
    title: "Payments",
    description:
      "Connect to Stripe and start accepting payments in minutes with a beautifully optimized checkout experience.",
    points: [
      "Subscriptions",
      "One-time products",
      "Free trials",
      "Team billing",
    ],
    logoUrl: "https://img.icons8.com/?size=100&id=111047&format=png&color=228BE6",
  },
  {
    title: "CRM",
    description:
      "All of your member data in one place. Simplify your stack and stop jumping between tools.",
    members: [
      {
        name: "Koray Okumus",
        status: "Trialing",
        avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Caitlyn King",
        status: "Subscribing",
        avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Ashwin Santiago",
        status: "Cancelling",
        avatarUrl: "https://randomuser.me/api/portraits/men/14.jpg",
      },
      {
        name: "Lang Steiner",
        status: "Subscribing",
        avatarUrl: "https://randomuser.me/api/portraits/men/25.jpg",
      },
      {
        name: "Zaid Schwartz",
        status: "Subscribing",
        avatarUrl: "https://randomuser.me/api/portraits/men/56.jpg",
      },
      {
        name: "Rene Wells",
        status: "Trialing",
        avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      {
        name: "Lang Steiner",
        status: "Subscribing",
        avatarUrl: "https://randomuser.me/api/portraits/men/25.jpg",
      },
      {
        name: "Zaid Schwartz",
        status: "Subscribing",
        avatarUrl: "https://randomuser.me/api/portraits/men/56.jpg",
      },
      {
        name: "Rene Wells",
        status: "Trialing",
        avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
      },
    ],
  },
  {
    title: "Email🡢",
    description:
      "Marketing, transactional, product emails, and notifications in the same platform—with 99% deliverability.",
    updates: [
      { title: "Q4 company update", subtitle: "Monthly newsletter list" },
      { title: "Paid subscription created", subtitle: "sales@yourcompany.com" },
      { title: "Registration confirmation", subtitle: "customer@acme.com" },
      { title: "Onboarding drip sequence", subtitle: "New trialing account" },
    ],
  },
  {
    title: "Help Desk",
    description:
      "Responding to your members via live chat or support tickets. Publish how-to content and documentation in your branded knowledge base.",
    conversation: [
      { from: "user", text: "I need some help integrating with my Webflow site." },
      { from: "agent", text: "Hi Mathilde! We have lots of documentation on integrating with Webflow. Take a look here." },
      { from: "user", text: "Ok wow, that's super helpful!" },
    ],
  },
  {
    title: "Auth and Protected Content",
    description:
      "Allow users to login to your site with an email address and password, or their Google account. Our protected content features make it easy to control access your content.",
  },
  {
    title: "Reporting",
    description:
      "Track subscription metrics, analyze engagement with your product or site, and understand why members are cancelling.",
    stat: "$49,835",
  },
];

const featureListLeft = [
  "Context tree switching",
  "A slew of tools and integrations",
  "Too much time spent integrating",
  "Disconnect prospects and customer data",
  "A switch of costly subscriptions",
  "Broken loops every workflow",
  "Extra fees for every feature or user",
  "Software that's only featurefully naive",
];

const featureListRight = [
  "One place to host your pricing",
  "One tool to run email campaigns",
  "One app for segmentation",
  "One inbox for customer support",
  "One metric to guide customer success",
  "One sheet to track your tasks",
  "One login to manage your whole business",
  "One simple price",
];

export default function Dashboard() {
  return (
    <div className="px-5 py-10 mx-auto font-sans text-gray-900 bg-white max-w-7xl">

      {/* Title Section */}
      <h6 className="mt-5 mb-8 font-serif text-3xl text-center text-gray-700">
         All-in-one membership stack 
      </h6>
      <h1 className="mt-5 mb-8 text-6xl font-extrabold text-center">
        Perfect for membership<br />sites,SaaS products, <br />courses, and communities
      </h1>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-6 mb-16 md:grid-cols-3">
        {featuresData.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-start p-6 bg-white rounded-lg shadow-md"
          >
            {/*  Payments logo is for S */}
            {feature.logoUrl ? (
              <div className="flex justify-end mb-4">
                <img
                  src={feature.logoUrl}
                  alt={`${feature.title} logo`}
                  className="object-contain w-24 h-24 p-4 bg-purple-100 border border-purple-300 rounded-lg select-none"
                  loading="lazy"
                />
              </div>
            ) : null}

            <h2 className="mb-3 text-lg font-semibold">{feature.title}</h2>

            <p className="mb-3 text-gray-700">{feature.description}</p>

            {/* Render points if they exist */}
            {feature.points && (
              <ul className="mb-4 space-y-1 text-sm text-gray-600 list-disc list-inside">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            {/* members with avatars */}
            {feature.members && (
              <div className="flex flex-col gap-3 mb-4 overflow-y-scroll text-xs max-h-40">
                {feature.members.map((member, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={member.avatarUrl}
                        alt={member.name}
                        className="object-cover w-8 h-8 rounded-full select-none"
                        loading="lazy"
                      />
                      <span>{member.name}</span>
                    </div>
                    <span className="text-gray-400">{member.status}</span>
                  </div>
                ))}
              </div>
            )}

            {/*  updates list for Email */}
            {feature.updates && (
              <ol className="mb-4 space-y-3 text-xs text-gray-700 list-decimal list-inside">
                {feature.updates.map((update, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="font-semibold">{update.title}</span>
                    <span className="text-gray-400">{update.subtitle}</span>
                  </li>
                ))}
              </ol>
            )}

            {/*  Help Desk */}
            {feature.conversation && (
              <div className="max-w-xs p-3 space-y-3 text-xs bg-gray-100 rounded-md">
                {feature.conversation.map((msg, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded-md ${
                      msg.from === "agent"
                        ? "bg-gray-200 self-end text-left"
                        : "bg-purple-200 self-start text-left"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
            )}

            {/*  stat for Reporting */}
            {feature.stat && (
              <div className="mt-auto text-xl font-extrabold text-pink-600">{feature.stat}</div>
            )}
          </div>
        ))}
      </div>

      {/* Header section and p tag */}
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="mb-1 text-5xl font-semibold text-center ">
          Quit context switching
        </h3>
        <p className="mt-4 mb-8 text-2xl text-center text-gray-600">
          Managing a membership business shouldn’t be this hard — so get it under control.
        </p>
        
  <div class="flex items-center justify-center p-2 gap-8">
    {/*Left Section*/}
  <div class=" rounded-2xl p-6 flex items-center gap-8">
     
  {/*Icons*/}
    <div class="w-12 h-12 bg-black flex items-center justify-center rounded-lg shadow-sm p-2">
      <img src="https://img.icons8.com/?size=100&id=PvvcWRWxRKSR&format=png&color=000000" alt="Meta Logo" class="w-full h-full object-contain"/>
    </div>
    <div class="w-12 h-12 bg-black flex items-center justify-center rounded-lg shadow-sm p-2">
      <img src="https://img.icons8.com/?size=100&id=NGmdejM73K82&format=png&color=000000" alt="Intercom Logo" class="w-full h-full object-contain"/>
    </div>
    <div class="w-12 h-12 bg-black flex items-center justify-center rounded-lg shadow-sm p-2">
      <img src="https://img.icons8.com/?size=100&id=FYzEiNs4Cvwy&format=png&color=000000" alt="Mailchimp Logo" class="w-full h-full object-contain"/>
    </div>
    <div class="w-12 h-12 bg-black flex items-center justify-center rounded-lg shadow-sm p-2">
      <img src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000" alt="Amplitude Logo" class="w-full h-full object-contain"/>
    </div>
    <div class="w-12 h-12 bg-black flex items-center justify-center rounded-lg shadow-sm p-2">
      <img src="https://img.icons8.com/?size=100&id=Xq3RA1kWzz3X&format=png&color=000000" alt="HubSpot Logo" class="w-full h-full object-contain"/>
    </div>
    <div class="w-12 h-12 bg-black flex items-center justify-center rounded-lg shadow-sm p-2">
      <img src="https://img.icons8.com/?size=100&id=zQuJudBUUokh&format=png&color=000000" alt="ChartMogul Logo" class="w-full h-full object-contain"/>
    </div>
 {/*Add Button */}
    <div class="w-12 h-12 border-2 border-purple-300 text-purple-300 flex items-center justify-center rounded-lg cursor-pointer hover:bg-purple-100 transition">
      +
    </div>
  </div>

 {/* Right section */}
  <div class="bg-gray-100 rounded-2xl p-6 flex items-center justify-center">
    <div class="w-14 h-14 bg-yellow-400 rounded-lg flex items-center justify-center">
      <img src="https://img.icons8.com/?size=100&id=e71E76IVVN7u&format=png&color=000000" alt="Outseta Icon" class="w-8 h-8"/>
    </div>
  </div>

</div>

<div class="max-w-4xl mx-auto mb-16">
  <h4 class="mb-1 text-2xl font-serif text-center flex items-center justify-center gap-2">
    <span class="flex items-center gap-6 text-gray-400">
      ────────────────────────
      <span class="bg-black text-white px-2 py-1 rounded-full">Before</span>
      ──────────────────
      <span class="bg-black text-white px-2 py-1 rounded-full">After</span>
      ────────────────────────
    </span>
  </h4>
</div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left with red crosses mark */}
          <ul className="space-y-3 text-sm text-red-600">
            {featureListLeft.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-xl font-bold rounded">❌</span> {item}
              </li>
            ))}
          </ul>

          {/* Right  side green right Mark */}
          <ul className="space-y-3 text-sm text-green-600">
            {featureListRight.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-xl font-bold">️✅</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}