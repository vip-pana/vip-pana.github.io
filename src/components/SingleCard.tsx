import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { CardItem } from '../types';

const labelColors: Record<string, string> = {
  Java: 'bg-red-500/20 text-red-300 border-red-500/50',
  React: 'bg-blue-500/20 text-blue-300 border-blue-500/50',
  'C#': 'bg-purple-500/20 text-purple-300 border-purple-500/50',
  Python: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50',
  PostgreSQL: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50',
  Django: 'bg-gray-500/20 text-gray-300 border-gray-500/50',
  'Azure Cloud': 'bg-blue-600/20 text-blue-200 border-blue-600/50',
  Typescript: 'bg-cyan-400/20 text-cyan-200 border-cyan-400/50',
};
const defaultLabelColor = 'bg-green-500/20 text-green-300 border-green-500/50';

interface SingleCardProps {
  item: CardItem;
}

export default function SingleCard(props: SingleCardProps) {
  return (
    <Card
      className="relative hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--color-nord-text)] break-inside-avoid"
    >
      <div>
        <div className="flex items-start">
          <img
            src={props.item.img}
            alt={props.item.title}
            loading="lazy"
            width={100}
            height={100}
            className="w-[100px] h-[100px] mt-4 ml-4 object-contain border-2 border-nord-text"
          />
          <div className="flex flex-wrap gap-2 pt-5 pl-2">
            {props.item.label.map((singleLabel, index) => (
              <Badge
                key={index}
                variant="outline"
                className={labelColors[singleLabel] || defaultLabelColor}
              >
                {singleLabel}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <CardHeader className="pb-0">
        <h3 className="text-md font-bold uppercase tracking-wider">
          <a
            href={props.item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={props.item.title + ' project'}
            className="hover:text-nord-accent transition-colors"
          >
            {props.item.title}
          </a>
        </h3>
      </CardHeader>
      <CardContent>
        <p>{props.item.body}</p>
      </CardContent>
    </Card>
  );
}
