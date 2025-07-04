
import React from 'react';

import EventContent from './_components/EventContent';
import PagePath from './_components/PagePath';

function MatchPage() {

  
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-10 px-4'>
      <div className='max-w-5xl mx-auto'>
        {/* Breadcrumb */}
        <PagePath/>
        {/* Match Info Card */}
        <div className='mt-2 rounded-lg shadow-lg border border-green-400 mb-10 p-6 flex flex-col md:flex-row md:items-center md:justify-between'>
          <div className="flex items-center">
           
            <div>
              <div className='text-green-400 font-bold text-lg mb-1'>Cricket</div>
              <div className='text-white text-xl font-semibold mb-2'>
          Bangladesh vs India
              </div>
              <div className='text-gray-300 mb-1'>
          Status: <span className='text-yellow-400'>In-Play</span>
              </div>
              <div className='text-gray-300 mb-1'>
          Score: <span className='text-white'>BAN 156/4 (18.2 ov)</span>
              </div>
              <div className='text-gray-400 text-sm'>
          Overs: 18.2 &nbsp;|&nbsp; Run Rate: 8.5 &nbsp;|&nbsp; Wickets: 4
          &nbsp;|&nbsp; Runs: 156
              </div>
            </div>
          </div>
          {/* SVG Icon on the right for md+ screens */}
          <div className="hidden md:flex items-center ml-6">
        
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="drop-shadow-lg">
              <circle cx="28" cy="28" r="28" fill="#22c55e" />
              <ellipse cx="28" cy="28" rx="16" ry="8" fill="#fff" fillOpacity="0.9" />
              <circle cx="38" cy="28" r="5" fill="#fde68a" stroke="#f59e42" strokeWidth="2" />
              <rect x="13" y="26" width="18" height="4" rx="2" fill="#64748b" />
              <rect x="32" y="25" width="10" height="2" rx="1" fill="#f59e42" transform="rotate(25 32 25)" />
              <rect x="32" y="29" width="10" height="2" rx="1" fill="#f59e42" transform="rotate(-25 32 29)" />
              <circle cx="28" cy="28" r="16" stroke="#16a34a" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <h1 className='text-base md:text-xl font-bold text-green-400 mb-8 text-center drop-shadow'>
          Live Betting Events
        </h1>


        <EventContent/>


      </div>
    </div>
  );
}

export default MatchPage;
