import photo from '../assets/picture.webp';
import { LabelWrapper } from './LabelWrapper';
import { ContactButton } from './ContactButton';
import { InitialAnimation } from '../types';

interface FirstAboutProps {
  isLargerThan1280: boolean;
  initialAnimation: InitialAnimation;
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
          @
          <LabelWrapper />
        </h2>
        <div className="text-gray-400 space-y-4">
          <p className={props.isLargerThan1280 ? 'text-xl' : 'text-base'}>
            Hi! I'm Vincenzo and I love discovering and studying tech stuff.{' '}
            <span className="text-nord-accent">
              I've been active in IT since 2020{' '}
            </span>
            when I learned to program in JavaScript - After creating my first web
            page I felt like a hacker, and I've been learning ever since.
          </p>
          <p className={props.isLargerThan1280 ? 'text-xl' : 'text-base'}>
            Fast forward to today, I continued to study passing{' '}
            <span className="text-nord-accent">
              two years at Infobasic boot camp
            </span>{' '}
            , where I developed the most useful skills, and{' '}
            <span className="text-nord-accent">
              started to work in Vittoria RMS
            </span>{' '}
            company as a Developer. Now I can say I could easily learn to use any
            technology in a short time.
          </p>
          <p
            className={`pb-20 ${props.isLargerThan1280 ? 'text-xl' : 'text-base'}`}
          >
            I'm currently focusing on improving my knowledge and skills by
            learning Cloud and participating in Open Source development. I'm
            excited to create innovative solutions and improve the user
            experience!{' '}
          </p>
        </div>
      </div>
      <div className="flex-1" />
      {props.isLargerThan1280 ? (
        <div>
          <img
            alt="Foto profilo"
            src={photo}
            className="w-[330px] h-[330px] object-cover mr-5"
            style={{
              borderRadius: '51% 49% 68% 32% / 45% 46% 54% 55%',
            }}
          />
          <ContactButton
            initialAnimation={props.initialAnimation}
            columnDirection={false}
          />
        </div>
      ) : null}
    </div>
  );
};
