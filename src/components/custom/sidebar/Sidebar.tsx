// import { FC } from 'react';
// import { ChevronRight, Star, Clock, TrendingUp } from 'lucide-react';
// import { ScrollArea } from '@/components/ui/scroll-area';

// interface SidebarProps {
//   className?: string;
// }

// const sportsCategories = [
//   { name: 'Football', count: 1247, icon: '⚽' },
//   { name: 'Tennis', count: 89, icon: '🎾' },
//   { name: 'Basketball', count: 156, icon: '🏀' },
//   { name: 'Ice Hockey', count: 67, icon: '🏒' },
//   { name: 'Baseball', count: 234, icon: '⚾' },
//   { name: 'American Football', count: 45, icon: '🏈' },
//   { name: 'Boxing', count: 12, icon: '🥊' },
//   { name: 'Cricket', count: 78, icon: '🏏' },
//   { name: 'Darts', count: 23, icon: '🎯' },
//   { name: 'Golf', count: 34, icon: '⛳' },
// ];

// const quickLinks = [
//   { name: 'My Bets', icon: <Star className='w-4 h-4' /> },
//   { name: 'Live Streaming', icon: <Clock className='w-4 h-4' /> },
//   { name: 'Statistics', icon: <TrendingUp className='w-4 h-4' /> },
// ];

// const Sidebar: FC<SidebarProps> = ({ className }) => {
//   return (
//     <ScrollArea
//       className={` hidden lg:block  border ${className}`}
//     >
//       {/* Quick Links */}
//       <div className='p-4 border-b border-gray-600'>
//         <h3 className='text-sm font-semibold mb-3 text-bet365-yellow'>
//           Quick Links
//         </h3>
//         <div className='space-y-1'>
//           {quickLinks.map((link, index) => (
//             <div key={index} className='flex items-center sidebar-item'>
//               {link.icon}
//               <span className='ml-2'>{link.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Sports Categories */}
//       <div className='p-4'>
//         <h3 className='text-sm font-semibold mb-3 text-bet365-yellow'>
//           Sports
//         </h3>
//         <div className='space-y-1'>
//           {sportsCategories.map((sport, index) => (
//             <div
//               key={index}
//               className='flex items-center justify-between sidebar-item'
//             >
//               <div className='flex items-center'>
//                 <span className='mr-2'>{sport.icon}</span>
//                 <span>{sport.name}</span>
//               </div>
//               <div className='flex items-center'>
//                 <span className='text-xs text-gray-400 mr-1'>
//                   {sport.count}
//                 </span>
//                 <ChevronRight className='w-3 h-3 text-gray-400' />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Promotions */}
//       <div className='p-4 border-t border-gray-600'>
//         <div className='bg-gradient-to-r from-bet365-green to-bet365-dark-green rounded p-4 text-center'>
//           <h4 className='font-semibold mb-2'>New Customer Offer</h4>
//           <p className='text-xs mb-3'>Up to £100 in Bet Credits</p>
//           <button className='bg-bet365-yellow text-bet365-dark px-4 py-2 rounded text-sm font-semibold w-full hover:bg-yellow-400 transition-colors'>
//             Claim Now
//           </button>
//         </div>
//       </div>
//     </ScrollArea>
//   );
// };

// export default Sidebar;
