import LiveMatches from '@/components/custom/mainContent/LiveMatches';

import Sports from '@/components/custom/sports/Sports';

function HomePage() {
  return (
    <div className='p-6 space-y-6 '>
      {/* Hero Banner */}
      <div className='bg-gradient-to-r from-bet365-green to-bet365-dark-green rounded-lg p-8 text-center'>
        <h1 className='text-3xl font-bold mb-4'>Welcome to bethelp24</h1>
        <p className='text-lg mb-6'>
          The World&apos;s Favourite Online Sports Betting Company
        </p>
        <div className='flex justify-center space-x-4'>
          <button className='bg-bet365-yellow text-bet365-dark px-6 py-3 rounded font-semibold hover:bg-yellow-400 transition-colors'>
            Join Now
          </button>
          <button className='border border-white px-6 py-3 rounded hover:bg-white hover:text-bet365-green transition-colors'>
            Watch Live
          </button>
        </div>
      </div>

      {/* sports */}
      <Sports />

      {/* Featured Matches */}
      {/* <FeaturedMatches /> */}

      {/* Live Matches */}
      <LiveMatches />

      {/* Popular Sports */}
      {/* <PopularSports /> */}
    </div>
  );
}

export default HomePage;
