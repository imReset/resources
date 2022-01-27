import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { NavLink } from './TechnologiesStyles';


const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Other Sites</SectionTitle>
    <SectionText>
      Here is a list of other websites that I made that I find useful.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle><a href="https://google.ca" target="_blank">Update</a></ListTitle>
          <NavLink>
          <ListParagraph>
          Lorem ipsum dolor sit amet <br />
          consectetur adipiscing elit
          </ListParagraph>
          </NavLink>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
        <ListTitle><a href="https://google.ca" target="_blank">Update</a></ListTitle>
          <ListParagraph>
            sed do eiusmod <br />
            tempor incididunt ut labore
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
        <ListTitle><a href="https://google.ca" target="_blank">Update</a></ListTitle>
          <ListParagraph>
          Lorem ipsum dolor sit amet <br />
          consectetur adipiscing elit
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;