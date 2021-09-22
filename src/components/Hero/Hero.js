import React from 'react';

import {ProfileImage} from '../../constants/constants';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../Projects/ProjectsStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ProfileImageDiv } from './HeroStyles';

const Hero =  () => (
  
  <Section>
    <LeftSection>
      <SectionTitle>
        Bienvenue sur<br />
        mon portfolio personnel
      </SectionTitle>
      {ProfileImage.map(({profileimage}) =>
      <ProfileImageDiv>      
        <Img src={profileimage} style={{borderRadius:"50%"}}/>
      </ProfileImageDiv>
      )}
      <SectionText>
        Dans le marché du développement de sites web, les crimes de code sont considérés comme particulièrement monstrueux. 
        À New York, les inspecteurs qui enquêtent sur ces crimes sont membres d'une unité d'élite appelée Chronoz. Je m'appelle Juan Restrepo Torres, et voici leurs histoires. *Toudoum*
        <br />
        [New York Unité Spéciale]
      </SectionText>
      <Button onClick={() => window.location = 'https://www.hetic.net/'}>En savoir plus</Button>
    </LeftSection>
  </Section>
);

export default Hero;