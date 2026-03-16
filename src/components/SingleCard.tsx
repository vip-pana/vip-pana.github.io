import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { CardItem } from '../types';

const labelColors: Record<string, string> = {
  Java: 'bg-red-500/20 text-red-300 border-red-500/30',
  React: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'C#': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Python: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  PostgreSQL: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  Django: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
  'Azure Cloud': 'bg-blue-600/20 text-blue-200 border-blue-600/30',
  Typescript: 'bg-cyan-400/20 text-cyan-200 border-cyan-400/30',
};
const defaultLabelColor = 'bg-green-500/20 text-green-300 border-green-500/30';

interface SingleCardProps {
  item: CardItem;
  isLargerThan1280: boolean;
}

export default function SingleCard(props: SingleCardProps) {
  return (
    <Card
      className={`relative min-h-[24rem] shadow-md hover:scale-105 transition-transform duration-400 ${props.isLargerThan1280 ? '' : 'max-w-[250px]'}`}
    >
      <div>
        <div className="flex items-start">
          <img
            src={props.item.img}
            alt={props.item.title}
            className="w-[100px] h-[100px] rounded-lg mt-4 ml-4 object-contain"
          />
          <div className="flex flex-wrap gap-2 pt-5 pl-2">
            {props.item.label.map((singleLabel, index) => (
              <Badge
                key={index}
                variant="outline"
                className={`shadow-sm ${labelColors[singleLabel] || defaultLabelColor}`}
              >
                {singleLabel}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <a
        aria-label={props.item.title + ' link'}
        href={props.item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-0 top-0 p-2 text-nord-text hover:text-nord-accent transition-colors"
      >
        <FaExternalLinkAlt className="w-3 h-3" />
      </a>

      <CardHeader className="pb-0">
        <h3 className="text-md font-semibold">
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
      </CardHeader>
      <CardContent>
        <p>{props.item.body}</p>
      </CardContent>
    </Card>
  );
}
