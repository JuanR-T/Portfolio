import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, DownloadLink } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projets">
    <Section style={{alignItems: "center"}}>
      <SectionDivider />
      <SectionTitle main> Mes Projets</SectionTitle>
    </Section>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit, pdf}) => 
        <BlogCard key={id}>
          <div>
            <Img src={image} style={{alignContent:"flex-start", display:"flex"}}/>
            <br/>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
          </div>
          <div >
            <br/>
            <TitleContent>Technologies utilisées :</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key ={i}>{tag}</Tag>
              ))}
            </TagList>
            <UtilityList>
              <ExternalLinks href={source}>Code</ExternalLinks>
              <ExternalLinks href={pdf} download >PDF</ExternalLinks>
              <ExternalLinks href={visit}>Live</ExternalLinks>
            </UtilityList>
          </div>
        </BlogCard>
      )}
    </GridContainer>
  </Section>
);

export default Projects;