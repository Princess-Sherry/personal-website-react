import {
  ExperienceDetail, ExperienceLocation, ExperienceTitle, ExperienceWrapper, ExperienceYear
} from "./styles.js";

function Experience({ title, year, location, detail }) {
  return (
    <ExperienceWrapper>
      <ExperienceTitle>{title}</ExperienceTitle>
      <ExperienceYear>{year}</ExperienceYear>
      <ExperienceLocation>{location}</ExperienceLocation>
      <ExperienceDetail>{detail}</ExperienceDetail>
    </ExperienceWrapper>
  );
}

export default Experience;
