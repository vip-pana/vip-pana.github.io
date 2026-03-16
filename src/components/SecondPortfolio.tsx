import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import SingleCard from './SingleCard';
import CertificationCard from './CertificationCard';

import mock from '../assets/mock/cardMock';
import certificationItems from '../assets/mock/certificationMock';

interface SecondPortfolioProps {
  isLargerThan1280: boolean;
}

export const SecondPortfolio = (props: SecondPortfolioProps) => {
  return (
    <div className="mt-10">
      <Tabs defaultValue="projects">
        <TabsList className="w-full">
          <TabsTrigger value="projects" className="flex-1">
            Projects
          </TabsTrigger>
          <TabsTrigger value="certifications" className="flex-1">
            Certifications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
            {mock.map((item, index) => (
              <div key={index} className="flex justify-center">
                <SingleCard
                  item={item}
                  isLargerThan1280={props.isLargerThan1280}
                />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="certifications">
          <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
            {certificationItems.map((item, index) => (
              <div key={index} className="flex justify-center">
                <CertificationCard
                  item={item}
                  isLargerThan1280={props.isLargerThan1280}
                />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
