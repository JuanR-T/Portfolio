import React from 'react';
import {SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiHtml5, SiCss3, SiPhp, SiReact } from 'react-icons/si';
import {DiReact, DiNodejsSmall} from 'react-icons/di';
import {FiFigma, FiDatabase} from 'react-icons/fi';
import {FaNodeJs} from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section>
   <SectionDivider />
   <br/>
    <SectionTitle id="competences">Langages de programmation et logiciels</SectionTitle>
    <SectionText>
        J'ai travaillé avec les outils suivants
    </SectionText>
    <List>
      <ListItem>
        <div>
          <SiHtml5 size="3rem" />
          &nbsp;
          <SiCss3 size="3rem" />
          &nbsp;
          <SiPhp size="3rem" />
          &nbsp;
          <SiReact size="3rem" />
        </div>
        <br/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Connaissances en <br/>
            Html, Css, Php, React.js
          </ListParagraph>
          
        </ListContainer>
      </ListItem>

      <ListItem>
        <div>
        <FiDatabase size="3rem" />
        &nbsp;
        <FaNodeJs size="3rem" />
        </div>
        <br/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Connaissances en <br/>
            Node.js et bases de données
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <div>
        <SiAdobexd size="3rem" />
        &nbsp;
        <SiAdobephotoshop size="3rem" />
        &nbsp;
        <SiAdobeillustrator size="3rem" />
        <FiFigma size="3rem" />
        </div>
        <br/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Connaissances en <br/>
            logiciels de design
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
 </Section>
);

export default Technologies;
