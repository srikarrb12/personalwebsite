import { Row } from "react-bootstrap";
import ResumeEntry from "./ResumeEntry";

export default function Projects() {
  return (
    <>
      <div className="container">
        <Row>
          <div className="container" style={{ paddingBottom: "10%" }}>
          <Row>
              <ResumeEntry
                sectionTitle="Projects"
                dates="Aug 2022 - Present"
                company="AVA Digital Human"
                position="Researcher"
                description={
                  <>
                    <li>
                    Developed ReactJS user interface to visualize conversation and integrated automatic speech recognition (ASR) and text-to-speech (TTS)
                    </li>
                    <li>
                    Leveraged task-oriented & open-domain dialogue agents (GODEL) to generate natural responses and set up Flask API to call Python script
                    </li>
                    <li>
                    Extended UI capability to scrape HTML elements from websites in real-time with Google Puppeteer and process & pass data to model
                    </li>
                  </>
                }
              />
            </Row>
            <Row>
              <ResumeEntry
                dates="Sept 2021 - May 2022"
                company="Heart Disease Detector"
                position="Team Lead"
                description={
                  <>
                    <li>
                    Created machine learning model using Gaussian Native Bayes algorithm to predict heart disease in patients with over 80% accuracy
                    </li>
                    <li>
                    Designed ReactJS front-end with Bootstrap styling and built API using Flask to connect to Python script containing model on the back-end
                    </li>
                    <li>
                    Outlined action plan for team's goals and led weekly team meetings and guided and monitored team members on their progress.
                    </li>
                  </>
                }
              />
            </Row>
            <Row>
              <ResumeEntry
                dates="July 2021 - Aug 2021"
                company="Credit Card Website"
                position="Personal Project"
                description={
                  <>
                    <li>
                    Brainstormed and conceptualized solutions to difficulties of managing several credit cards and designed page wireframe with Balsamiq
                    </li>
                    <li>
                    Created front-end of webpage using HTML, CSS, and JavaScript, and utilized MySQL, Java, JDBC, and Spring Boot to create back-end
                    </li>
                  </>
                }
              />
            </Row>
          </div>
        </Row>
      </div>
    </>
  );
}
