import ResumeEntry from "./ResumeEntry";
import { Row } from "react-bootstrap";
import Skills from "./Skills";

export default function Resume() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="container" style={{ paddingBottom: "10%" }}>
          <Row>
              <ResumeEntry
                sectionTitle="Work Experience"
                dates="Jun 2023 - Aug 2023"
                company="Capital One"
                position="Software Engineering Intern"
                description={
                  <>
                    <li>
                    Restrategized intern-to-team placement process by conducting user-centered research through bi-weekly collaboration with stakeholders
                    </li>
                    <li>
                    Increased matchmaking efficiency by 40% by devising goal-oriented linear programming Python algorithm using NumPy & PuLP
                    </li>
                    <li>Developed Angular front-end in Agile workflow with DynamoDB back-end and deployed UI on AWS EC2 & algorithm on Lambda</li>
                  </>
                }
              />
            </Row>
            <Row>
              <ResumeEntry
                dates="May 2022 - Dec 2022"
                company="State Farm"
                position="Software Engineering Intern"
                description={
                  <>
                    <li>
                    Designed and built full-stack internal application for 1000+ employees to streamline process of updating client email templates in cloud
                    </li>
                    <li>
                    Integrated ReactJS + libraries with AWS API Gateway and Lambda to connect to DynamoDB and Pinpoint to improve UX and security
                    </li>
                    <li>Developed AWS infrastructure as code using Terraform and incorporated Jest testing framework to perform unit testing in Agile workflow </li>
                  </>
                }
              />
            </Row>
            <Row>
              <ResumeEntry
                dates="Jan 2022 - May 2022"
                company="Mini City"
                position="Software Engineering Intern"
                description={
                  <>
                    <li>
                    Identified inefficiencies in company workflow and designed application to improve operational efficiency & reduce workload on admin
                    </li>
                    <li>
                    Built REST APIs in Java to automate mailing & processing of critical documents and persisted data using SQL with MySQL database
                    </li>
                    <li>
                    Incorporated token hashing system to increase security of government-issued documents & deployed application with Docker on AWS ECS
                    </li>
                  </>
                }
              />
            </Row>
            <Row>
              <ResumeEntry
                dates="Feb 2020 - Aug 2021"
                company="Kumon"
                position="Part Time Grader and Classroom Assistant"
                description={
                  <>
                    <li>
                    Taught and helped students with academic concepts in various subjects and communicated information to parents and other staff
                    </li>
                    <li>
                    Graded students’ reading comprehension, writing, and mathematics classwork and homework assignments on weekly basis
                    </li>
                    <li>
                    Catalogued student data into company system to process and evaluate student improvement over time and organized students’ files
                    </li>
                  </>
                }
              />
            </Row>
            <Row>
              <ResumeEntry
                dates="Dec 2019 - Feb 2020"
                company="DappLogix Software Pvt Ltd"
                position="Student Intern"
                description={
                  <>
                    <li>
                    Explored artificial intelligence, machine learning, and neural networks and observed their application in the real world
                    </li>
                    <li>
                    Applied supervised learning using TensorFlow to train & test neural network to detect the number of fingers held up on human hand
                    </li>
                  </>
                }
              />
            </Row>
            <hr></hr>
            <Row>
              <ResumeEntry
                sectionTitle="Education"
                dates="Aug 2024 - May 2025"
                company="Georgia Institute of Technology"
                position="MS in Computer Science"
                description={
                  <>
                    <li><b>Concentration:</b> Machine Learning</li>
                  </>
                }
              />
            </Row>
            <Row>
              <ResumeEntry
                dates="Aug 2021 - May 2024"
                company="Georgia Institute of Technology"
                position="BS in Computer Science"
                description={
                  <>
                    <li><b>GPA:</b> 3.9</li>
                    <li><b>Concentrations:</b> Artificial Intelligence and Information Internetworks</li>
                    <li><b>Relevant Coursework:</b> Data Structures & Algorithms, OOP, Computer Systems & Organization, Artificial Intelligence, Database Systems</li>
                  </>
                }
              />
            </Row>
            <Row>
              <ResumeEntry
                dates="Aug 2017 - Jun 2021"
                company="Downingtown East High School"
                position="High School Diploma"
                description={
                  <>
                    <li>GPA: 4.0 / 4.0</li>
                  </>
                }
              />
            </Row>
            <hr></hr>
            <Row>
              <ResumeEntry
                sectionTitle="Leadership"
                dates="Mar 2018 - Present"
                company="Philadelphia Children's Foundation"
                position="Co-Founder of Western Suburbs Chapter"
                description={
                  <>
                    <li>Coordinated donations of 500+ computers (to date) to various underprivileged youth resulting in improvement of their academic skills</li>
                    <li>Corresponded with numerous companies, organizations, and neighborhood families to collect unused electronic devices and accessories</li>
                    <li>Organized volunteer events among schools and community to aid in refurbishing and imaging of computers with Linux Xubuntu</li>
                  </>
                }
              />
            </Row>
            <hr></hr>
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
}
