import { ChevronRight } from 'lucide-react';
import { FC } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';

interface SportsProps {
  className?: string;
}

const sportsCategories = [
  { name: 'Football', count: 1247, icon: '⚽' },
  { name: 'Cricket', count: 78, icon: '🏏' },
  { name: 'Tennis', count: 89, icon: '🎾' },
  { name: 'Basketball', count: 156, icon: '🏀' },
  { name: 'Ice Hockey', count: 67, icon: '🏒' },
  { name: 'Baseball', count: 234, icon: '⚾' },

  { name: 'Boxing', count: 12, icon: '🥊' },
  { name: 'Darts', count: 23, icon: '🎯' },
  { name: 'Golf', count: 34, icon: '⛳' },
];

const Sports: FC<SportsProps> = () => {
  return (
    <div className='p-10 flex flex-col items-center justify-center'>
      <span className='self-start text-sm font-semibold mb-3 text-bet365-yellow md:text-xl '>
        Sports
      </span>

      {
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-5xl '
        >
          <CarouselContent>
            {sportsCategories.map((sport, index) => (
              <CarouselItem
                className='basis-1/2  sm:basis-1/3  lg:basis-1/5 px-2 '
                key={index}
              >
                <Link href={`/${sport.name.toLowerCase()}`}>
                  <div className='flex flex-col items-center bg-gray-800 rounded-lg px-4 py-3 min-w-[110px]  shadow-md hover:bg-gray-700 transition-all duration-200 cursor-pointer'>
                    <span className='text-3xl mb-2'>{sport.icon}</span>
                    <span className='font-semibold text-white mb-1'>
                      {sport.name}
                    </span>
                    <div className='flex items-center text-gray-400 text-xs'>
                      <span className='mr-1'>{sport.count}</span>
                      <ChevronRight className='w-3 h-3' />
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      }
    </div>
  );
};

export default Sports;
