import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { CertificationItem } from '../types';

interface CertificationCardProps {
  item: CertificationItem;
}

export default function CertificationCard(props: CertificationCardProps) {
  return (
    <Card
      className="hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-nord-text)] break-inside-avoid"
    >
      <CardHeader />
      <a
        href={props.item.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={props.item.title + ' certification'}
        className="self-center flex justify-center"
      >
        <img
          src={props.item.img}
          alt={props.item.title}
          loading="lazy"
          width={200}
          height={200}
          className="w-[200px] h-[200px] object-contain hover:scale-105 transition-all duration-150"
        />
      </a>
      <CardContent>
        <h3 className="text-md font-bold uppercase tracking-wider text-center">
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
