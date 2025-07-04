import { FC } from 'react';
import { Play, TrendingUp } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
interface LiveMatchesProps {
  className?: string;
}

const liveMatches = [
  {
    id: 1,
    sport: 'Football',
    homeTeam: 'Chelsea',
    awayTeam: 'Arsenal',
    homeScore: 1,
    awayScore: 2,
    time: "67'",
    homeOdds: '3.20',
    drawOdds: '2.10',
    awayOdds: '1.75',
  },
  {
    id: 2,
    sport: 'Tennis',
    homeTeam: 'Djokovic',
    awayTeam: 'Nadal',
    homeScore: 2,
    awayScore: 1,
    time: 'Set 4',
    homeOdds: '1.45',
    drawOdds: null,
    awayOdds: '2.65',
  },
  {
    id: 3,
    sport: 'Basketball',
    homeTeam: 'Celtics',
    awayTeam: 'Heat',
    homeScore: 89,
    awayScore: 92,
    time: 'Q3 8:45',
    homeOdds: '2.10',
    drawOdds: null,
    awayOdds: '1.70',
  },
  {
    id: 3,
    sport: 'Basketball',
    homeTeam: 'Celtics',
    awayTeam: 'Heat',
    homeScore: 89,
    awayScore: 92,
    time: 'Q3 8:45',
    homeOdds: '2.10',
    drawOdds: null,
    awayOdds: '1.70',
  },
  {
    id: 3,
    sport: 'Basketball',
    homeTeam: 'Celtics',
    awayTeam: 'Heat',
    homeScore: 89,
    awayScore: 92,
    time: 'Q3 8:45',
    homeOdds: '2.10',
    drawOdds: null,
    awayOdds: '1.70',
  },
  {
    id: 3,
    sport: 'Basketball',
    homeTeam: 'Celtics',
    awayTeam: 'Heat',
    homeScore: 89,
    awayScore: 92,
    time: 'Q3 8:45',
    homeOdds: '2.10',
    drawOdds: null,
    awayOdds: '1.70',
  },
];

const LiveMatches: FC<LiveMatchesProps> = () => {
  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-xl font-semibold text-bet365-yellow'>
          Live In-Play
        </h2>
        <button className='text-bet365-green hover:text-bet365-dark-green text-sm flex items-center'>
          View All Live
          <TrendingUp className='w-4 h-4 ml-1' />
        </button>
      </div>

      <ScrollArea className={`  border shadow rounded h-[500px]`}>
        <div className='space-y-3'>
          {liveMatches.map(match => (
            <div key={match.id} className='bet-card'>
              <div className='flex items-center justify-between'>
                <div className='flex-1'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-xs text-gray-400'>{match.sport}</span>
                    <div className='flex items-center text-red-500 text-xs'>
                      <div className='w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse'></div>
                      {match.time}
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <div className='flex items-center justify-between'>
                      <span className='font-medium'>{match.homeTeam}</span>
                      <span className='font-bold text-lg'>
                        {match.homeScore}
                      </span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='font-medium'>{match.awayTeam}</span>
                      <span className='font-bold text-lg'>
                        {match.awayScore}
                      </span>
                    </div>
                  </div>
                </div>

                <div className='ml-6 flex flex-col space-y-1'>
                  <button className='odds-button text-xs px-2 py-1'>
                    {match.homeOdds}
                  </button>
                  {match.drawOdds && (
                    <button className='odds-button text-xs px-2 py-1'>
                      {match.drawOdds}
                    </button>
                  )}
                  <button className='odds-button text-xs px-2 py-1'>
                    {match.awayOdds}
                  </button>
                </div>

                <button className='ml-3 text-bet365-green hover:text-bet365-dark-green'>
                  <Play className='w-5 h-5' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
};

export default LiveMatches;
