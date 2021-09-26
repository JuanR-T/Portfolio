import React from 'react';

import {ProfileImage} from '../../constants/constants';
import {Img } from '../Projects/ProjectsStyles';
import { Section, SectionText, SectionTitle, DownloadLink } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ProfileImageDiv } from './HeroStyles';

const Hero =  () => (
  
  <Section>
    <LeftSection>
      <SectionTitle>
        Juan Restrepo Torres
        <br /><br />
        Etudiant en développement web
        <br />
      </SectionTitle>
      {ProfileImage.map(({profileimage}) =>
      <ProfileImageDiv>      
        <Img src={profileimage} style={{borderRadius:"50%"}}/>
      </ProfileImageDiv>
      )}
      <SectionText>
        <br />
        Je recherche une ALTERNANCE en développement web
        sur un rythme : 3 semaines en entreprise et 1 semaine en formation, à partir de Novembre 2021 (modulable)
        <br /><br />
        Soyez le bienvenue sur mon portfolio.
        <br />
        ECOLE HETIC
      </SectionText>
      <DownloadLink href="/CV_Restrepo_Torres_Juan.pdf" download> 
        Télécharger mon CV
      </DownloadLink>
    </LeftSection>
  </Section>
);

export default Hero;