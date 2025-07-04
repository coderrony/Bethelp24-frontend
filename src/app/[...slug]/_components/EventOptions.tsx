import { FC } from 'react';
import { BettingEventType } from './data';

interface EventOptionsProps {
  className?: string;
  event:BettingEventType
}

function OptionButton({ label }: { label: string }) {
  return (
    <button className="m-4 bg-gray-700 hover:bg-green-500 hover:text-white text-gray-200 font-medium text-xs md:text-base rounded px-4 py-1 transition">
      {label}
    </button>
  );
}

const EventOptions: FC<EventOptionsProps> = ({ event }) => {
  if (event.status === 'run') {
    return (
      <div className=" flex justify-between px-4 py-2">
        <OptionButton label={`${event.options[0]} ${event.score}`} />
        <OptionButton label={`${event.options[1]} ${event.score}`} />
      </div>
    );
  }
  if (event.status === 'team') {
    return (
      <div className="flex items-center justify-between px-4 py-2 space-x-4">
        <div className="flex-1 text-right">
          <h5 className="text-xs md:text-lg font-semibold text-blue-500">{event.options[0]}</h5>
        </div>
        <span className="mx-2 text-xs md:text-base text-gray-500 font-bold">VS</span>
        <div className="flex-1 text-left">
          <h5 className="text-xs md:text-lg font-semibold text-red-500">{event.options[1]}</h5>
        </div>
      </div>
    );
  }
  return null;
};

export default EventOptions;