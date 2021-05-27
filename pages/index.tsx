import React from "react";
import {Badge, Col, Container, Row} from "react-bootstrap";
import {concat, Timeline} from "../src/utils/timeline";
import {AvailableLanguages, Contact, Educations, i18n, WorkExperiences} from "../src/data";
import {Call, Email, LocationOn, Web} from "@material-ui/icons";

interface AnimationState {
  firstName: string,
  lastName: string,
  showCursor: boolean,
  cursorOn: "first" | "last",
}

const ZeroAnimationState: AnimationState = {
  firstName: "",
  lastName: "",
  showCursor: true,
  cursorOn: "first",
}

const Index: React.FunctionComponent = (props) => {
  const step = 60;
  const cursorPeriod = 7;
  const timeline = concat<AnimationState>(
    {
      get: (timing: number) => ({ ...ZeroAnimationState, showCursor: (timing % (cursorPeriod * 2) < cursorPeriod) }),
      span: cursorPeriod * 3,
    },
    {
      get: (timing: number) => ({ ...ZeroAnimationState, firstName: "Yoonha".slice(0, timing + 1) }),
      span: "Yoonha".length,
    },
    {
      get: (timing: number) => ({ ...ZeroAnimationState, firstName: "Yoonha", lastName: "Hwang".slice(0, timing + 1), cursorOn: "last" }),
      span: "Hwang".length,
    },
    {
      get: (timing: number) => ({ firstName: "Yoonha", lastName: "Hwang", showCursor: (timing % (cursorPeriod * 2) < cursorPeriod), cursorOn: "last" }),
      span: 0,
    },
  );

  const [animationState, setAnimationState] = React.useState<AnimationState>(ZeroAnimationState);
  const [timing, setTiming] = React.useState(0);

  React.useEffect(() => {
    setAnimationState(timeline.get(timing));
    const handler = setTimeout(() => setTiming(timing + 1), step);
    return () => clearTimeout(handler)
  }, [timing]);

  const cursor = animationState.showCursor ? "█" : "";

  const toYearMonth = (d: Date): string => `${d.getUTCFullYear()}-${(d.getUTCMonth() + 1).toString().padStart(2, "0")}`;

  return <div>
    <div className={"bg-light"}>
      <Container>
        <Row>
          <Col xs={5} className={"position-relative"} style={{ height: "36rem" }}>
            <img alt={"portrait-yoonha"} src={"/portrait.png"} className={"position-absolute"}  style={{ right: "3rem", bottom: 0, height: "31.25rem" }} />
          </Col>
          <Col xs={7} className={"position-relative"}>
            <div className={"position-absolute"} style={{ top: "10rem" }}>
              <div className={"display-1 text-name text-primary"} style={{ lineHeight: "0.9em" }}>
                {(animationState.firstName + (animationState.cursorOn === "first" ? cursor : "")) || "\u00A0"}
              </div>
              <div className={"display-1 text-name"} style={{ lineHeight: "0.9em" }}>
                {(animationState.lastName + (animationState.cursorOn === "last" ? cursor : "")) || "\u00A0"}
              </div>
              <div className={"ml-1 mt-4 text-name"} style={{ fontSize: "1.5rem" }}>
                from infrastructure <br/>
                to frontend <br/>
                an enthusiastic data engineer.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <Container>
      <Row className={"pt-5"}>
        <Col xs={9} className={"pr-5"}>
          <Row>
            <Col xs={12}>
              <h1 className={"section"}>Work Experiences</h1>
            </Col>
            <Col>
              {
                WorkExperiences
                  .map((work, i) => <div key={i}>
                    <Row className={"pt-3"}>
                      <Col xs={6}>
                        <h2>
                          <span>{i18n(work.company)}</span>
                        </h2>
                      </Col>
                      <Col xs={6} className={"text-right"}>
                        <strong>{i18n(work.charge)}</strong><br/>
                        <span>{toYearMonth(work.from)} ~ {work.to ? toYearMonth(work.to) : ""}</span>
                      </Col>
                    </Row>
                    <Row>
                      {
                        work.contents.map((sub, i) =>
                          <>
                            <Col key={`subtitle-${i}`} xs={12} md={4} className={"mt-4"}>
                              <strong>{i18n(sub.subtitle)}</strong><br/>
                              {sub.stacks.map((stack, i) => <Badge key={i} variant={"secondary"} className={"mr-1"}>{i18n(stack)}</Badge>)}<br/>
                            </Col>
                            <Col key={`text-${i}`} xs={12} md={8} className={"mt-4"}>
                              {i18n(sub.text)}<br/><br/>
                            </Col>
                          </>)
                      }
                    </Row>
                  </div>)
              }
            </Col>
          </Row>
        </Col>
        <Col xs={3} className={"pl-4 border-left"}>
          <Row>
            <Col xs={12}>
              <h1 className={"section"}>Contact</h1>
            </Col>
            <Col xs={12} className={"pt-2"}>
              <Call className={"text-primary"}/>{"\u00A0"}{i18n(Contact.phone)}<br/>
              <LocationOn className={"text-primary"}/>{"\u00A0"}{i18n(Contact.location)}<br/>
              <Email className={"text-primary"}/>{"\u00A0"}{i18n(Contact.email)}<br/>
              <Web className={"text-primary"}/>{"\u00A0"}{i18n(Contact.website)}<br/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className={"pt-5"}>
              <h1 className={"section"}>Educations</h1>
            </Col>
            <Col xs={12} className={"pt-2"}>
              {
                Educations.map((edu, i) => <span key={i}>
                  <strong>{i18n(edu.name)}</strong> {i18n(edu.department)} {i18n(edu.degree)}<br/>
                  <span>{toYearMonth(edu.from)} ~ {edu.to ? toYearMonth(edu.to) : ""}</span><br/>
                </span>)
              }
            </Col>
          </Row>
          <Row>
            <Col className={"pt-5"}>
              <h1 className={"section"}>Languages</h1>
            </Col>
            <Col xs={12} className={"pt-2"}>
              {
                AvailableLanguages.map((lang, i) => <span key={i}>
                  {i18n(lang)}<br/>
                </span>)
              }
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
};

export default Index;
