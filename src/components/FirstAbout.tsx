import photo from '../assets/picture.webp';
import { LabelWrapper } from './LabelWrapper';
import { ContactButton } from './ContactButton';

interface FirstAboutProps {
  isLargerThan1280: boolean;
}

export const FirstAbout = (props: FirstAboutProps) => {
  return (
    <div className="flex pb-20">
      <div
        className={`min-w-[60%] ${props.isLargerThan1280 ? 'max-w-xl' : 'max-w-full'}`}
      >
        <h2 className="text-3xl font-bold pb-5">✍🏻 About Me</h2>
        <h2
          className={`font-bold ${props.isLargerThan1280 ? 'text-3xl' : 'text-2xl'}`}
        >
          I'm Vincenzo Panacciulli
        </h2>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-nord-accent to-nord-green bg-clip-text text-transparent">
          <LabelWrapper />
        </h2>
        <div className="text-gray-400 space-y-4">
          <p className={props.isLargerThan1280 ? 'text-xl' : 'text-base'}>
            I like to solve problems with clean and efficient solutions.{' '}
            <span className="text-nord-accent">
              I've been passionate about tech since 2021
            </span>{' '}
            and I've been building things ever since — from my first web page to
            production systems serving real users.
          </p>
          <p className={props.isLargerThan1280 ? 'text-xl' : 'text-base'}>
            I thrive in fast-paced environments where{' '}
            <span className="text-nord-accent">
              ownership, adaptability and impact
            </span>{' '}
            matter. I work across the stack, collaborate with cross-functional
            teams, and focus on shipping outcomes — not just code.
          </p>
          <p
            className={`pb-20 ${props.isLargerThan1280 ? 'text-xl' : 'text-base'}`}
          >
            I'm product-oriented, I adapt quickly to new technologies, and I
            leverage AI-assisted development to increase both speed and quality.
            Always looking to grow and contribute to ambitious projects.
          </p>
        </div>
      </div>
      <div className="flex-1" />
      {props.isLargerThan1280 ? (
        <div>
          <img
            alt="Foto profilo"
            src={photo}
            width={330}
            height={330}
            className="w-[330px] h-[330px] object-cover mr-5 border-2 border-nord-text shadow-[6px_6px_0px_0px_var(--color-nord-text)]"
          />
          <ContactButton columnDirection={false} />
        </div>
      ) : null}
    </div>
  );
};
