import { FC } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import EventOptions from './EventOptions';
import { ScrollArea } from '@/components/ui/scroll-area';
import { bettingEvents, BettingEventType } from './data';

interface EventContentProps {
  className?: string;
}

const EventContent: FC<EventContentProps> = () => {
  return (
    <div>
      <Accordion
        type='single'
        collapsible
        className='w-full '
        // defaultValue='item-1'
      >
        {bettingEvents.map((event: BettingEventType) => (
          <AccordionItem
            value={`item-${event.id}`}
            className='border-0 my-4  '
            key={event.id}
          >
            <AccordionTrigger className=' rounded shadow-lg border border-gray-700 hover:border-green-400 transition p-4'>
              <div className='text-xs md:text-lg font-semibold text-white p-4 '>
                {event.name}
              </div>
              <EventOptions event={event} />
            </AccordionTrigger>
            <AccordionContent>
              <ScrollArea className='border border-gray-700 overflow-auto h-screen p-4 relative'>
                <div className='sticky top-0 z-10 bg-gray-900 pb-4'>
                  <form
                    action='#'
                    className='flex flex-col gap-4 mb-6 max-w-sm mx-auto'
                  >
                    <div className='flex flex-col'>
                      <label
                        htmlFor='title'
                        className='text-sm font-medium text-gray-200 mb-1'
                      >
                        Title
                      </label>
                      <input
                        type='text'
                        id='title'
                        name='title'
                        placeholder='Enter title'
                        className='rounded border border-gray-600 bg-gray-800 text-white px-3 py-2 focus:outline-none focus:border-green-400 transition'
                        required
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label
                        htmlFor='price'
                        className='text-sm font-medium text-gray-200 mb-1'
                      >
                        Price
                      </label>
                      <input
                        type='number'
                        id='price'
                        name='price'
                        placeholder='Enter price'
                        className='rounded border border-gray-600 bg-gray-800 text-white px-3 py-2 focus:outline-none focus:border-green-400 transition'
                        required
                        min='0'
                        step='any'
                      />
                    </div>
                    <button
                      type='submit'
                      className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded transition'
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Omnis illo minus perspiciatis. Fugiat aspernatur aut
                  delectus dolor laudantium magni alias porro necessitatibus
                  totam ducimus, harum eius optio nisi autem voluptatem eos
                  minima architecto dolorum beatae id expedita repellendus
                  iusto! Autem iusto ab debitis asperiores, neque ducimus illum
                  incidunt. Temporibus libero velit est eius in vero
                  necessitatibus distinctio qui quos quam, natus, odit, iusto
                  voluptatum commodi! Neque facilis rerum perspiciatis nemo
                  corporis illo eaque non, voluptates commodi nostrum magnam,
                  omnis incidunt quis impedit autem? Assumenda aliquid id
                  dolores deleniti esse aliquam suscipit reprehenderit
                  consectetur obcaecati ducimus, quae necessitatibus quos
                  accusantium minima ipsum accusamus molestias nisi beatae
                  aspernatur rerum totam incidunt iste neque numquam. Pariatur
                  unde eaque molestias velit aliquid. Ex possimus aperiam
                  consequuntur numquam tempore fugiat sit libero, quisquam
                  voluptatibus necessitatibus? Iste nihil temporibus maxime
                  magnam eveniet inventore vitae odio deserunt praesentium at
                  quod cupiditate beatae alias dolores facere dolore natus,
                  voluptas autem rem distinctio dicta impedit. Minima modi
                  similique odit tempore vitae odio debitis obcaecati?
                  Perspiciatis quod distinctio voluptates fugit. Culpa eius id
                  sed aliquam cupiditate aspernatur incidunt repellat! Cumque
                  debitis aliquid natus nemo excepturi. Architecto,
                  reprehenderit debitis laudantium suscipit libero inventore
                  necessitatibus sit iure consequatur. Adipisci natus aliquid
                  autem?
                </p>
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Id obcaecati modi
                  necessitatibus! Quae recusandae eum dolore asperiores, ex
                  rerum facere animi temporibus sed harum sapiente natus optio
                  quis omnis ab. Sapiente impedit cumque soluta iusto itaque,
                  nostrum reiciendis nesciunt. Sequi veniam optio quis in id
                  officia eum earum saepe consectetur mollitia, fugiat obcaecati
                  sit magni commodi assumenda repudiandae quasi facere quas?
                  Deleniti voluptatem eveniet delectus repellendus perspiciatis,
                  mollitia debitis ea distinctio enim, molestias ipsam corrupti
                  facilis. Assumenda, porro accusamus mollitia consectetur
                  praesentium quia ad magnam accusantium ipsam iusto. Similique
                  maiores, reprehenderit nisi minima delectus molestias libero
                  ab soluta aliquam odit. Enim et recusandae earum, cupiditate
                  quisquam nostrum sunt. Non culpa nulla maxime, inventore
                  eligendi illo error iste unde vel ullam perspiciatis
                  consequatur ipsa tempora necessitatibus placeat recusandae
                  omnis impedit fuga minima quam similique quasi ipsam?
                  Voluptatibus corporis dolorem asperiores enim, repellat optio
                  molestias quidem quas temporibus quod harum? Fugiat saepe
                  debitis officiis reiciendis consequuntur voluptatum eum fugit
                  architecto possimus nobis cumque exercitationem, assumenda
                  laborum enim eos mollitia eius ea ab, ratione maiores aperiam
                  dolores! Harum voluptatem, accusantium quidem eos, voluptas
                  veniam labore, excepturi expedita veritatis assumenda omnis!
                  Quidem ipsam iusto adipisci? Laudantium repellendus dicta
                  minima modi odio, nesciunt porro. Obcaecati, nostrum! Fugiat
                  quae vel nostrum, minima deserunt atque cum voluptatibus,
                  accusantium sequi maiores blanditiis pariatur a, deleniti
                  suscipit porro? Placeat perspiciatis modi necessitatibus
                  repudiandae voluptatum asperiores nisi ea libero suscipit
                  nostrum harum eveniet dolor quos quam in hic voluptate magni
                  obcaecati, distinctio et fuga quidem. Dolores quaerat et porro
                  laborum quod delectus numquam minima vero aliquid libero
                  expedita, alias veniam tenetur. Asperiores ipsam officiis
                  porro ut sunt, assumenda autem reprehenderit perspiciatis
                  quibusdam cumque consequuntur, explicabo adipisci fugit. Omnis
                  voluptate ea illo, doloremque, earum quos sed repellendus nemo
                  cumque debitis ducimus accusamus nesciunt sunt id aliquam
                  reprehenderit deserunt facilis eveniet quam mollitia. Sit
                  necessitatibus commodi dolores consequatur est. Pariatur quas
                  sit cumque repellendus. Sit sapiente aliquam beatae error
                  maxime eius quod natus nesciunt ipsa, perferendis laboriosam
                  illum quas ullam? Omnis temporibus officia asperiores rem
                  facere magnam ipsa velit eligendi, adipisci ad laudantium at,
                  iusto error repudiandae, quo aliquid accusantium mollitia
                  labore itaque perferendis laborum qui accusamus? Velit dolorem
                  praesentium dolorum voluptatibus. Optio, iure! Nemo maxime
                  laborum reprehenderit dolor repudiandae delectus quasi dolorum
                  in illo ipsa natus minus ullam consequuntur a tempora facilis,
                  quisquam nisi qui cum quos blanditiis odit! Non, pariatur.
                  Quisquam vero vitae, labore modi voluptates commodi cupiditate
                  possimus autem maiores totam accusamus animi perferendis quam
                  fuga et? Eum aut et eveniet dicta quos quidem. Eveniet
                  quisquam sunt distinctio accusamus placeat natus ad, nemo
                  necessitatibus? Quo impedit iste accusamus ad cum inventore
                  ducimus, ipsa culpa veritatis sapiente modi quisquam quidem
                  minus natus veniam quos consequatur aperiam ut voluptates
                  atque accusantium, molestiae illo. Laboriosam autem fugiat
                  doloribus sit fuga dolor, veritatis quod voluptates nemo
                  quidem minus vero repellat tempora dolores maiores adipisci,
                  temporibus aliquid eum blanditiis iusto odit veniam! Assumenda
                  eos enim non perferendis explicabo? At fugiat maiores, quo
                  quae velit asperiores delectus expedita alias consectetur esse
                  ad deserunt labore sint ipsum unde nesciunt temporibus numquam
                  modi? Aliquid sunt dolorem maiores soluta amet, magni iste
                  eligendi ullam praesentium quos vel id aspernatur
                  necessitatibus dolor expedita labore explicabo fugit, neque,
                  fugiat impedit possimus sit? Beatae et officia aliquid ex
                  eveniet dolore aperiam perspiciatis atque, neque asperiores
                  laborum, ut fugiat est culpa cumque voluptatibus pariatur.
                  Consequatur mollitia, animi nihil odio, eum assumenda impedit
                  quam doloribus numquam vel enim corporis accusantium dolores!
                  Animi, assumenda laudantium debitis minima eligendi vitae
                  quasi excepturi dolores corrupti laboriosam quidem maxime
                  cupiditate esse nesciunt pariatur rerum dolorum vero tempore
                  sit alias? Perferendis officiis temporibus magnam incidunt
                  earum dolor illo ratione quia consequuntur tempora facere,
                  molestiae eius assumenda fugit inventore at sed eveniet rerum,
                  odit reprehenderit autem! Dicta dignissimos, dolorem, repellat
                  eligendi cupiditate voluptatum consequuntur accusamus eius
                  perspiciatis odio mollitia nostrum quidem quo reprehenderit
                  aut eaque? Officiis ad necessitatibus, magnam adipisci sit quo
                  laborum quas sint voluptatem vero aliquam tempora eligendi
                  similique, explicabo at iste, repudiandae dolor. Veniam
                  quaerat voluptate odio similique! Voluptate ratione corrupti
                  corporis? Pariatur excepturi molestias eligendi asperiores
                  atque nostrum quo vitae, corporis, iure, natus unde hic
                  cupiditate vel commodi. Quaerat ea reprehenderit, dolorum
                  ducimus magnam officia, repellat mollitia esse dolore, porro
                  nulla repudiandae aspernatur. Nobis possimus blanditiis ipsum
                  tenetur debitis fugit dolores, asperiores molestiae nam
                  laboriosam mollitia, minima earum voluptatum nesciunt. Dolores
                  iste, dignissimos laboriosam corrupti obcaecati consequatur
                  quis dolore explicabo quisquam culpa animi illum vel
                  repudiandae eius, nisi repellendus nesciunt velit incidunt!
                  Libero modi explicabo ipsum similique fuga possimus error
                  perspiciatis, et eos excepturi, praesentium provident saepe
                  deleniti sequi tenetur nisi illum consequuntur voluptatem cum,
                  cumque magni velit aliquid assumenda hic! Debitis corrupti
                  officia molestiae at beatae ratione repudiandae ut quia
                  temporibus eaque in accusamus, deserunt nisi,{'\n'} dolor
                  consequatur enim perspiciatis recusandae maiores, nesciunt
                  libero fuga vitae? Repellat amet odio architecto molestiae
                  delectus, nobis minus, aliquid temporibus est pariatur qui,
                  accusantium et. Nostrum eveniet illum libero ab nemo doloribus
                  molestias dicta, eos natus dignissimos accusamus recusandae
                  blanditiis perferendis sequi, tenetur ducimus minus numquam
                  deserunt praesentium vero ullam minima voluptatem aliquid?
                  Quasi repellat odio ullam dolorum dolores ipsum, at molestias
                  dolore. Deserunt doloremque exercitationem tenetur nisi
                  accusantium rerum, hic quia beatae, nobis aperiam, atque
                  minima consequatur assumenda? Ullam modi, officiis enim
                  doloremque eligendi itaque tenetur porro quibusdam quam
                  molestias sapiente corrupti consequatur vel sint aperiam
                  voluptatem hic, in voluptates amet. Eaque sint quo explicabo.
                  Quis commodi suscipit ex impedit necessitatibus temporibus
                  possimus laudantium ea velit nesciunt dignissimos quia,
                  maiores quos nisi quae sint in facere eveniet aliquid harum.
                  Fugit soluta beatae odio sequi ad id aliquid qui libero
                  repellendus maxime dicta, omnis sit ipsum voluptas accusantium
                  veniam in vitae ut exercitationem magni, corporis facere.
                  Adipisci inventore ab corporis autem? Vitae placeat enim,
                  quidem vero minus impedit, non sequi eos odio nam libero unde?
                  Mollitia enim aut natus error eveniet quos, sunt quis
                  perferendis aspernatur quibusdam quia ratione iure et facere
                  maxime dicta blanditiis vel, laboriosam vero possimus fuga
                  voluptate? Recusandae, sit vitae voluptatem nihil commodi
                  facilis quas harum, officia delectus obcaecati, dolore quam
                  illo sequi. Harum.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </ScrollArea>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default EventContent;
