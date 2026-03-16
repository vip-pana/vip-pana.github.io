import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

import langItems from '../assets/mock/langMock';
import workItems from '../assets/mock/mockWork';

interface SecondAboutProps {
  isLargerThan1280: boolean;
}

export const SecondAbout = (props: SecondAboutProps) => {
  return (
    <>
      <h2
        className={`font-bold text-left ${props.isLargerThan1280 ? 'text-3xl pb-10' : 'text-2xl pb-5'}`}
      >
        🏬 Where I've Worked
      </h2>
      <Tabs defaultValue="work-0" className="mb-20">
        <TabsList>
          {workItems.map((item, index) => (
            <TabsTrigger key={index} value={`work-${index}`}>
              {item.company}
            </TabsTrigger>
          ))}
        </TabsList>

        {workItems.map((item, index) => (
          <TabsContent key={index} value={`work-${index}`}>
            <p className="text-2xl">
              <strong>{item.title}</strong>{' '}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-nord-accent hover:underline"
              >
                @ {item.company}
              </a>
            </p>
            <p className="text-nord-blue mb-2">{item.time}</p>
            <ul className="list-disc pl-5">
              {item.Tasks.map((task, indexTwo) => (
                <li key={indexTwo} className="text-gray-400 mb-2">
                  {task}
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>

      <h2
        className={`font-bold ${props.isLargerThan1280 ? 'text-2xl text-left pb-10' : 'text-xl text-center pb-5'}`}
      >
        💻 My preferred technologies
      </h2>

      <div className="flex justify-center">
        <div
          className={`grid ${props.isLargerThan1280 ? 'grid-cols-2 text-2xl p-5' : 'grid-cols-1 text-lg mt-5'} gap-5`}
        >
          {langItems.map((el, index) => (
            <div key={index}>
              <el.icon className="inline text-3xl" />{' '}
              <span className="text-nord-accent">{el.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-24">
        <div className="flex flex-col items-center">
          <h2
            className={`font-bold text-center ${props.isLargerThan1280 ? 'text-xl' : 'text-xl'}`}
          >
            ✉️ Feel free to contact me for anything you need!
          </h2>
          <p className="text-center text-gray-400">
            My inbox is always open. Whether you have a question or just want to
            say hello,
            <br />
            I'll do my best to get back to you as soon as possible!{' '}
          </p>
          <a
            href="mailto:panacciullivincenzo@gmail.com"
            aria-label="my email"
          >
            <Button variant="default" size="lg" className="m-5">
              Contact me!
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};
