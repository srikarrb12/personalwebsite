import SkillsEntry from "./SkillsEntry";

export default function Skills(props) {
  return (
    <>
      <SkillsEntry sectionTitle="Skills" skillOne="Java" skillTwo="Python" skillThree="JavaScript" />
      <SkillsEntry skillOne="HTML" skillTwo="CSS" skillThree="ReactJS" />
      <SkillsEntry skillOne="MySQL" skillTwo="SQL" skillThree="AWS ECS" />
      <SkillsEntry skillOne="REST APIs" skillTwo="DynamoDB" skillThree="Docker"/>
      <SkillsEntry skillOne="API Gateway" skillTwo="Lambda" skillThree="TypeScript"/>
      <SkillsEntry skillOne="Terraform" skillTwo="Git"/>
    </>
  );
}
