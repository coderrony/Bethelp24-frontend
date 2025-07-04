import { FC } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';

const matches = [
  {
    id: 1,
    sport: 'Cricket',
    teams: 'Bangladesh vs India',
    status: 'In-Play',
    score: 'BAN 156/4 (18.2 ov)',
    overs: '18.2',
    runRate: '8.5',
    wickets: 4,
    runs: 156,
    market: 'Match Odds',
  },
  {
    id: 2,
    sport: 'Cricket',
    teams: 'Australia vs England',
    status: 'Upcoming',
    score: 'AUS 0/0 (0.0 ov)',
    overs: '0.0',
    runRate: '0.0',
    wickets: 0,
    runs: 0,
    market: 'Match Odds',
  },
  {
    id: 3,
    sport: 'Cricket',
    teams: 'Pakistan vs Sri Lanka',
    status: 'Completed',
    score: 'PAK 210/8 (20 ov)',
    overs: '20.0',
    runRate: '10.5',
    wickets: 8,
    runs: 210,
    market: 'Match Odds',
  },
  {
    id: 4,
    sport: 'Cricket',
    teams: 'South Africa vs New Zealand',
    status: 'In-Play',
    score: 'SA 134/2 (15.0 ov)',
    overs: '15.0',
    runRate: '8.93',
    wickets: 2,
    runs: 134,
    market: 'Match Odds',
  },
];

interface GameHederProps {
  className?: string;
}

function slugifyTeamName(teams:string) {
  return teams
    .toLowerCase()
    .replace(/\s+vs\s+/gi, '-vs-')      // normalize "vs"
    .replace(/\s+/g, '-')               // replace spaces with hyphens
    .replace(/[^a-z0-9\-]/g, '');       // remove all except letters, digits, and hyphen
}


const GameHeder: FC<GameHederProps> = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <span className='self-start text-sm font-semibold mb-3 text-bet365-yellow md:text-xl'>
        Live Cricket Match
      </span>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-5xl'
      >
        <CarouselContent>
          {matches.map(match => (
            <CarouselItem className='basis-1/2 sm:basis-1/3 ' key={match.id}>
              <Link href={`/cricket/${slugifyTeamName(match.teams)}`}>
                <div className='flex flex-col bg-gray-800 rounded-lg px-4 py-4 shadow-md hover:bg-gray-700 transition-all duration-200 cursor-pointer'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-xs text-gray-400'>{match.sport}</span>
                    <span className='text-xs p-1 md:p-2  rounded bg-green-600 text-white md:font-bold'>
                      {match.status}
                    </span>
                  </div>
                  <span className='font-semibold text-white text-xs md:text-lg mb-1'>
                    {match.teams}
                  </span>
                  <div className='flex flex-col  text-gray-300 text-xs md:text-sm mb-2'>
                    <span>
                      <b>{match.score}</b>
                    </span>
                    <span className='my-1'>Overs: {match.overs}</span>
                    <span>Run Rate: {match.runRate}</span>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default GameHeder;
