import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxLogo, BoxText } from './AcomplishmentsStyles';
import { GrGamepad } from 'react-icons/gr';
import { GiBowman, GiJapan, GiSushis} from 'react-icons/gi';
import { RiAliensFill} from 'react-icons/ri';
const data = [
  { logo :<GrGamepad size="5rem"/>, text: 'Jeux vidéos et E-sport'},
  { logo :<GiBowman size="5rem" color="black"/>, text: 'Sports : Football, tir à l"arc', },
  { logo :<GiSushis size="5rem" color="black"/>, text: 'Culture Japonaise', },
  { logo :<RiAliensFill size="5rem" color="black"/>, text: 'Oeuvres de Science-fiction', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Mes centres d'intérêt
    </SectionTitle>
    <Boxes>
      {data.map((card,index) => (
        <Box key ={index}>
          <BoxLogo>{card.logo}</BoxLogo>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>

  </Section>
);

export default Acomplishments;
