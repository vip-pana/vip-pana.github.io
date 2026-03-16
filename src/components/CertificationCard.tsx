import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { CertificationItem } from '../types';

interface CertificationCardProps {
  item: CertificationItem;
  isLargerThan1280: boolean;
}

export default function CertificationCard(props: CertificationCardProps) {
  return (
    <Card
      className={`shadow-md ${props.isLargerThan1280 ? '' : 'max-w-[250px]'}`}
    >
      <CardHeader />
      <a
        href={props.item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="self-center"
      >
        <img
          src={props.item.img}
          alt={props.item.title}
          className="w-[200px] h-[200px] object-contain hover:scale-105 transition-transform duration-400"
        />
      </a>
      <CardContent>
        <h3 className="text-md font-semibold text-center">
          <a
            href={props.item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={props.item.title + ' github'}
            className="hover:text-nord-accent transition-colors"
          >
            {props.item.title}
          </a>
        </h3>
        <p className="text-center">{props.item.body}</p>
      </CardContent>
    </Card>
  );
}
