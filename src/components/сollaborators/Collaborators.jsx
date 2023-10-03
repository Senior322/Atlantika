import React from 'react';
import css from 'components/сollaborators/Collaborators.module.scss';
import testImage from 'assets/littleColoborators/5a0b039b436ae_-130x100.png'
import testImage2 from 'assets/BigColoborators/5a0b039b436ae_-130x100.png'
import ResponsivePicture from 'components/resposivePicture/responsivePicture';
import Test228 from 'assets/blablabla.svg'

export default function Collaborators() {
  return (
    <div className={css.collaboratorsContainer}>
      <ul className={css.collaboratorsContainerUl}>
        <li className={css.collaboratorsContainerUlLi}>
        <ResponsivePicture little={testImage} big={testImage2}/>
        </li>
       <li><Test228 /></li>
      </ul>
    </div>
  );
}
