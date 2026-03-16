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
      <h2 className="text-2xl font-bold uppercase tracking-wider mb-6">
        Projects
      </h2>
      <div
        className={`gap-5 ${props.isLargerThan1280 ? 'columns-3' : 'columns-1'}`}
      >
        {mock.map((item, index) => (
          <div key={index} className="mb-5">
            <SingleCard item={item} />
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold uppercase tracking-wider mb-6 mt-16">
        Certifications
      </h2>
      <div
        className={`grid gap-5 ${props.isLargerThan1280 ? 'grid-cols-4' : 'grid-cols-2'}`}
      >
        {certificationItems.map((item, index) => (
          <CertificationCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
