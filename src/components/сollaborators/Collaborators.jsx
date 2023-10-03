import React from 'react';
import css from 'components/сollaborators/Collaborators.module.scss';
import ResponsivePicture from 'components/resposivePicture/responsivePicture';
import almaxLogo from 'assets/littleColoborators/allmax-logo-im-opt_5e2636ab-ad63-44cb-a008-259d07b4fef8_600x-130x100.png'
import almaxLogoBig from 'assets/BigColoborators/allmax-logo-im-opt_5e2636ab-ad63-44cb-a008-259d07b4fef8_600x-130x100.png'
import nutrend from 'assets/littleColoborators/5a0b039b436ae_-130x100.png'
import nutrendBig from 'assets/BigColoborators/5a0b039b436ae_-130x100.png'
import puritanas from 'assets/littleColoborators/beznazvanija(1)-130x100.png'
import puritanasBig from 'assets/BigColoborators/beznazvanija(1)-130x100.png'
import ostrovit from 'assets/littleColoborators/beznazvanija(1)_small-130x100.png'
import ostrovitBig from 'assets/BigColoborators/beznazvanija(1)_small-130x100.png'
import biotech from 'assets/littleColoborators/biotechusa_logo_new_small-130x100.png'
import biotechBig from 'assets/BigColoborators/biotechusa_logo_new_small-130x100.png'
import mars from 'assets/littleColoborators/beznazvanija-130x100.png'
import marsBig from 'assets/BigColoborators/beznazvanija-130x100.png'
import bsn from 'assets/littleColoborators/bsn_043cf_450x450-210x80-130x100.png'
import basBig from 'assets/BigColoborators/bsn_043cf_450x450-210x80-130x100.png'
import iron from 'assets/littleColoborators/ironmaxx-logo-210x80-130x100.png'
import ironBig from 'assets/BigColoborators/ironmaxx-logo-210x80-130x100.png'
import mst from 'assets/littleColoborators/logo.png'
import mstBig from 'assets/BigColoborators/logo.png'
import mutant from 'assets/littleColoborators/mutant-130x100.png'
import mutantBig from 'assets/BigColoborators/mutant-130x100.png'
import quest from 'assets/littleColoborators/quest-210x80-130x100.png'
import questBig from 'assets/BigColoborators/quest-210x80-130x100.png'
import now from 'assets/littleColoborators/now_foods_logo-210x80-130x100.png'
import nowBig from 'assets/BigColoborators/now_foods_logo-210x80-130x100.png'
import power from 'assets/littleColoborators/15b5e8f8-dc73-4bab-ad7a-a6883c872ea4-130x100.png'
import powerBig from 'assets/BigColoborators/15b5e8f8-dc73-4bab-ad7a-a6883c872ea4-130x100.png'
import on from 'assets/littleColoborators/on-210x80-130x100.png'
import onBig from 'assets/BigColoborators/on-210x80-130x100.png'
import scitec from 'assets/littleColoborators/scitec-nutrition-logo-968x504-130x100.png'
import scitecBig from 'assets/BigColoborators/scitec-nutrition-logo-968x504-130x100.png'
import nutrex from 'assets/littleColoborators/nutrex-210x80-130x100.png'
import nutrexBig from 'assets/BigColoborators/nutrex-210x80-130x100.png'
import ultimate from 'assets/littleColoborators/ultimatenutrition-210x80-130x100.png'
import ultimateBig from 'assets/BigColoborators/ultimatenutrition-210x80-130x100.png'
import usp from 'assets/littleColoborators/usplabs-210x80-130x100.png'
import uspBig from 'assets/BigColoborators/usplabs-210x80-130x100.png'

export default function Collaborators() {
  return (
    <div className={css.collaboratorsContainer}>
      <ul className={css.collaboratorsContainerUl}>
        <li className={css.collaboratorsContainerUlLi}><ResponsivePicture little={almaxLogo} big={almaxLogoBig} alt='asfasf'/></li>
        <li className={css.collaboratorsContainerUlLi}><ResponsivePicture little={nutrend } big={nutrendBig } alt='nutendLogo'/></li>
        <li className={css.collaboratorsContainerUlLi}><ResponsivePicture little={puritanas} big={puritanasBig} alt='puritanasLogo'/></li>
        <li className={css.collaboratorsContainerUlLi}><ResponsivePicture little={ostrovit } big={ostrovitBig} alt='ostrovitLogo'/></li>
        <li className={css.collaboratorsContainerUlLi}><ResponsivePicture little={biotech} big={biotechBig} alt='biotechLogo'/></li>
        <li className={css.collaboratorsContainerUlLi}><ResponsivePicture little={mars} big={marsBig} alt='marsLogo'/></li>
        <li className={css.collaboratorsContainerUlLi}><ResponsivePicture little={bsn} big={basBig } alt='bsnLogo'/></li>
        <li className={css.collaboratorsContainerUlLi}><ResponsivePicture little={iron} big={ironBig} alt='ironLogo'/></li>
        <li className={css.collaboratorsContainerUlLi}><ResponsivePicture little={mst} big={mstBig } alt='mstLogo'/></li>
        <li className={css.collaboratorsContainerUlLi}><ResponsivePicture little={mutant} big={mutantBig} alt='mutantLogo'/></li>
        <li className={css.collaboratorsContainerUlLi}><ResponsivePicture little={quest} big={questBig} alt='questLogo'/></li>
        <li className={css.collaboratorsContainerUlLi}><ResponsivePicture little={now} big={nowBig} alt='nowLogo'/></li>
        <li className={css.collaboratorsContainerUlLi}><ResponsivePicture little={power} big={powerBig} alt='powerLogo'/></li>
        <li className={css.collaboratorsContainerUlLi}><ResponsivePicture little={on} big={onBig} alt='onLogo'/></li>
        <li className={css.collaboratorsContainerUlLi}><ResponsivePicture little={scitec} big={scitecBig} alt='scitecLogo'/></li>
        <li className={css.collaboratorsContainerUlLi}><ResponsivePicture little={nutrex} big={nutrexBig} alt='nutrexLogo'/></li>
        <li className={css.collaboratorsContainerUlLi}><ResponsivePicture little={ultimate} big={ultimateBig} alt='ultimateLogo'/></li>
        <li className={css.collaboratorsContainerUlLi}><ResponsivePicture little={usp} big={uspBig} alt='uspLogo'/></li>
      </ul>
    </div>
  );
}
