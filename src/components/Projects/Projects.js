import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, DownloadLink } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projets">
    <Section style={{alignItems: "center", padding:"15px 0px 0px 0px"}}>
      <SectionDivider />
      <SectionTitle main> Mes Projets</SectionTitle>
    </Section>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit, pdf, ai}) => 
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
              {source.length > 5 ? <DownloadLink href={source} target="blank">Code</DownloadLink> : null}
              {pdf.length > 5 ? <DownloadLink href={pdf} download>Pdf</DownloadLink> : null}
              {ai.length > 5 ? <DownloadLink href={ai} download>.Ai.Xd</DownloadLink> : null}
              {visit.length > 5 ? <DownloadLink href={visit} target="blank">Live</DownloadLink> : null}
            </UtilityList>
          </div>
        </BlogCard>
      )}
    </GridContainer>
  </Section>
);

export default Projects;