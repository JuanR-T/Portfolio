import React, { useState, useRef, useEffect } from 'react';

import {Img } from '../Projects/ProjectsStyles';
import {ProfileImage} from '../../constants/constants';
import {ProfileImageDiv} from '../Hero/HeroStyles';
import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="apropos" >
      <Section style={{display:"flex",alignItems:"center"}}>
        <SectionTitle>A propos de Juan</SectionTitle>
        <br/>
        {ProfileImage.map(({profileimage}) =>
      <ProfileImageDiv>      
        <Img src={profileimage} style={{borderRadius:"50%"}}/>
      </ProfileImageDiv>
      )}
        <br/>
        <SectionText style={{textAlign:"justify"}}>
        Diplômé d'une 3ème année de Prépa Mastère Digital à l’école Hetic située à Montreuil, 
        je rentre cette année en Mastère CTO & Tech Lead. 
        <br/><br/>
        Mon objectif à terme est de devenir un expert en développement, capable de participer
        à toutes les étapes du cycle de vie d’un projet. La formation que j’ai 
        effectué à Hetic m’as permis de m’améliorer en développement assez 
        rapidement et d’acquérir des compétences dans diverses disciplines.
        Les enseignements étaient construits autour de projets, dans le but de nous immerger dans un contexte professionnel. Ces derniers sont divers et abordent plusieurs aspects de la création d’un produit digital : l’élaboration de sites web/applications à l’aide de divers langages de programmation (PHP, JS, React, HTML, CSS, Node…) et leurs interactions avec une base de donnée, notamment à l'aide de MySql ; ou encore la création d'UI sur AdobeXD ou Figma tout en prenant en compte l'UX. Ainsi que des projets faisant appel à l’ensemble de ces compétences afin de couvrir l’ensemble de la chaîne de production d’un produit web.
        <br/><br/>
        Certains de ces projets ont été réalisés en groupe : l’accent est 
        mis  sur  la collaboration au sein de ma formation, mais aussi dans 
        ma promotion. C’est pourquoi je suis habitué au travail collaboratif, 
        qui me plaît beaucoup. De plus, cela m'encourage à nourrir ma curiosité
        et ma perspicacité, des qualités indispensables à un développeur web à mon sens.
        <br/><br/>
        Pour finir, mon rythme d’alternance est de 3 semaines en entreprise
        / 1 semaine en formation. Je suis disponible à partir de Novembre 2021,
        bien que cette date soit modulable en fonction de vos besoins. 
        Vous pouvez également trouver la lettre de recommandation de la dirigeante de YesWeLab 
        (où j’ai effectué mon stage), sur mon profil <a href="https://www.linkedin.com/in/juan-r-3699b51aa/">LinkedIn</a>.
        <br/><br/>
        En espérant pouvoir en parler avec vous très bientôt,
        <br/>
        Restrepo Torres Juan.
        </SectionText>
      </Section>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
          <>
            {TimeLineData.map((item,index) =>  (
                <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
                  <CarouselItem
                    index={index}
                    id={`carousel__item-${index}`}
                    active={activeItem}
                    onClick={(e) => handleClick(e,index)}
                  >
                    <CarouselItemTitle>
                      {item.year}
                      <CarouselItemImg
                      width="208"
                      height="6"
                      viewBox="0 0 208 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                        fill="url(#paint0_linear)"
                        fill-opacity="0.33"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="-4.30412e-10"
                          y1="0.5"
                          x2="208"
                          y2="0.500295"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="white" />
                          <stop
                            offset="0.79478"
                            stop-color="white"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </CarouselItemImg>
                    </CarouselItemTitle>
                    <CarouselItemText>{item.text}</CarouselItemText>
                  </CarouselItem>
                </CarouselMobileScrollNode>
            ))}
          </>
        </CarouselContainer>
      <CarouselButtons>
          {TimeLineData.map((item,index) => (
            <CarouselButton 
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e,index)}
              type="button"
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          ))}
        </CarouselButtons>
    </Section>
  );
};

export default Timeline;
