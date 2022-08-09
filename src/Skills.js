import SkillsEntry from "./SkillsEntry";

export default function Skills(props) {
  return (
    <>
      <SkillsEntry sectionTitle="Skills" skillOne="Java" skillTwo="Python" skillThree="JavaScript" />
      <SkillsEntry skillOne="HTML" skillTwo="CSS" skillThree="Docker" />
      <SkillsEntry skillOne="MySQL" skillTwo="SQL" skillThree="ECS" />
      <SkillsEntry skillOne="REST APIs" skillTwo="DynamoDB" skillThree="ReactJS"/>
      <SkillsEntry skillOne="API Gateway" skillTwo="Lambda" skillThree="TypeScript"/>
      <SkillsEntry skillOne="Terraform" skillTwo="Git"/>
    </>
  );
}
