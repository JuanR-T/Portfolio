import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero =  () => (
  
  <Section>
    <LeftSection>
      <SectionTitle>
        Bienvenue sur<br />
        mon portfolio personnel
      </SectionTitle>
      <SectionText>
        Etudiant en développement web
      </SectionText>
      <Button onClick={() => window.location = 'https://www.hetic.net/'}>En savoir plus</Button>
    </LeftSection>
  </Section>
);

export default Hero;