import React from 'react';
import IntegrationList from './IntegrationList';

function MainContent() {
  return (
    <div
      className="flex flex-col items-center justify-start px-4 pt-24 shadow-md rounded-3xl"
      style={{
        background: 'linear-gradient(145deg, hsl(350deg 100% 93%), hsl(47deg 100% 87%) 40%, hsl(47deg 100% 87%) 60%, hsl(47deg 100% 53%))',
      }}
    >
      <h1 className="text-5xl font-bold text-center text-gray-900">
        The Membership
        <br />
        Operating System
      </h1>

      <p className="max-w-2xl mt-10 text-center text-gray-700">
        Payments, auth, gating, CRM, email—it's all here. Ditch the cookie
        cutter platforms and monetize your membership site, SaaS, course,
        community, or association using your favorite tools.
      </p>

      <div className="flex mt-10 space-x-4">
        <button className="px-6 py-1 text-black transition bg-yellow-600 border border-black rounded hover:bg-yellow-700">
          Sign up
        </button>
        <button className="px-6 py-1 text-black transition bg-white border border-black rounded hover:bg-yellow-400">
          Is outset for me?
        </button>
      </div>

      {/* Integration List */}
      <IntegrationList />
    </div>
  );
}

export default MainContent;