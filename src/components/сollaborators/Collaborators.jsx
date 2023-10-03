import React from 'react';
import css from 'components/сollaborators/Collaborators.module.scss';
import testImage from 'assets/littleColoborators/mutant-130x100.png';
import testImage2 from 'assets/BigColoborators/allmax-logo-im-opt_5e2636ab-ad63-44cb-a008-259d07b4fef8_600x-130x100.png';

export default function Collaborators() {
  return (
    <div className={css.collaboratorsContainer}>
      <ul className={css.collaboratorsContainerUl}>
        <li>
          <img
            srcSet={`${testImage} , ${testImage2} 1440w`}
            sizes="(max-width: 320px) 320px, 1440px"
            alt="myImage"
          />
        </li>
      </ul>
    </div>
  );
}
