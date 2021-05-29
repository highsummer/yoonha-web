import React from "react";
import {Badge, Col, Container, Row} from "react-bootstrap";
import {concat, Timeline} from "../src/utils/timeline";
import {AvailableLanguages, Contact, EducationOngoing, Educations, i18n, WorkExperiences} from "../src/data";
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
      span: "Yoonha".length - 1,
    },
    {
      get: (timing: number) => ({ ...ZeroAnimationState, firstName: "Yoonha", lastName: "Hwang".slice(0, timing), cursorOn: "last" }),
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
        <Row className={"d-md-none"}>
          <Col xs={6} className={"position-relative"} style={{ height: "28rem" }}>
            <img alt={"portrait-yoonha-desktop"} src={"/portrait.png"} className={"position-absolute"}  style={{ right: "3rem", bottom: 0, height: "25rem" }} />
          </Col>
          <Col xs={6} className={"position-relative"} style={{ height: "28rem" }}>
            <div className={"position-absolute"} style={{ width: "14rem", left: "-2.375rem", top: "8.25rem" }}>
              <div className={"display-4 text-name text-primary"} style={{ lineHeight: "0.9em" }}>
                {(animationState.firstName + (animationState.cursorOn === "first" ? cursor : "")) || "\u00A0"}
              </div>
              <div className={"display-4 text-name"} style={{ lineHeight: "0.9em" }}>
                {(animationState.lastName + (animationState.cursorOn === "last" ? cursor : "")) || "\u00A0"}
              </div>
            </div>
            <div className={"position-absolute"} style={{ width: "14.125rem", left: "-2.5rem", top: "14rem" }}>
              <div className={"ml-1 mt-4 text-name"} style={{ fontSize: "1rem" }}>
                from infrastructure <br/>
                to frontend <br/>
                an enthusiastic <br/>
                data engineer.
              </div>
            </div>
          </Col>
        </Row>
        <Row className={"d-none d-md-flex"}>
          <Col xs={6} className={"position-relative"} style={{ height: "36rem" }}>
            <img alt={"portrait-yoonha-desktop"} src={"/portrait.png"} className={"position-absolute"}  style={{ right: "6rem", bottom: 0, height: "31.25rem" }} />
          </Col>
          <Col xs={6} className={"position-relative"}>
            <div style={{ height: "36rem" }}/>
            <div className={"position-absolute"} style={{ left: "-3rem", top: "10rem" }}>
              <div className={"display-1 text-name text-primary"} style={{ lineHeight: "0.9em" }}>
                {(animationState.firstName + (animationState.cursorOn === "first" ? cursor : "")) || "\u00A0"}
              </div>
              <div className={"display-1 text-name"} style={{ lineHeight: "0.9em" }}>
                {(animationState.lastName + (animationState.cursorOn === "last" ? cursor : "")) || "\u00A0"}
              </div>
              <div className={"ml-1 mt-4 text-name"} style={{ fontSize: "1.5rem" }}>
                from infrastructure <br/>
                to frontend <br/>
                an enthusiastic <br className={"d-lg-none"}/>
                data engineer.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <Container>
      <Row className={"pt-5"}>
        <Col xs={12} lg={8} className={"pr-lg-5"}>
          <Row>
            <Col xs={12}>
              <h1 className={"section"}>Work Experiences</h1>
            </Col>
            <Col>
              {
                WorkExperiences
                  .map((work, i) => <div key={i}>
                    {
                      i === 0 ? <></> : <>
                        <div className={"pt-5"} />
                        <div className={"d-none d-md-block border-top pt-3"} />
                      </>
                    }
                    <Row className={"pt-3"}>
                      <Col xs={12} md={6}>
                        <h2>
                          <span>{i18n(work.company)}</span>
                        </h2>
                      </Col>
                      <Col xs={12} md={6} className={"text-md-right"}>
                        <strong>{i18n(work.charge)}</strong><br/>
                        <span className={"text-secondary"}>{toYearMonth(work.from)} ~ {work.to ? toYearMonth(work.to) : ""}</span>
                      </Col>
                    </Row>
                    {
                      work.contents.map((sub, i) =>
                        <Row key={i}>
                          <Col xs={12} className={"pt-3 d-md-none"}>
                            <div className={"border-top"}/>
                          </Col>
                          <Col xs={12} md={4} className={"pt-3 pt-md-5"}>
                            <strong>{i18n(sub.subtitle)}</strong><br/>
                            {sub.stacks.map((stack, i) => <Badge key={i} variant={"secondary"} className={"mr-1"}>{i18n(stack)}</Badge>)}<br/>
                          </Col>
                          <Col xs={12} md={8} className={"pt-3 pt-md-5"}>
                            {i18n(sub.text)}<br/>
                          </Col>
                        </Row>)
                    }
                  </div>)
              }
            </Col>
          </Row>
        </Col>
        <div className={"d-none d-lg-block"} style={{ width: 0 }}>
          <div className={"border-left h-100"} style={{ width: "1px" }} />
        </div>
        <Col xs={12} lg={4} className={"pl-lg-4"}>
          <Row>
            <Col xs={12} className={"pt-5 pt-lg-0"}>
              <h1 className={"section"}>Contact</h1>
            </Col>
            <Col xs={12} className={"pt-2"}>
              <table style={{ lineBreak: "anywhere" }}>
                <tbody>
                <tr>
                  <td style={{ width: "2rem" }}><Call className={"text-primary"}/></td>
                  <td>{i18n(Contact.phone)}</td>
                </tr>
                <tr>
                  <td style={{ width: "2rem" }}><LocationOn className={"text-primary"}/></td>
                  <td>{i18n(Contact.location)}</td>
                </tr>
                <tr>
                  <td style={{ width: "2rem" }}><Email className={"text-primary"}/></td>
                  <td>{i18n(Contact.email)}</td>
                </tr>
                <tr>
                  <td style={{ width: "2rem" }}><Web className={"text-primary"}/></td>
                  <td>{i18n(Contact.website)}</td>
                </tr>
                </tbody>
              </table>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className={"pt-5"}>
              <h1 className={"section"}>Educations</h1>
            </Col>
            <Col xs={12} className={"pt-2"}>
              <table className={"w-100"}>
                <tbody>
                {
                  Educations.map((edu, i) => <tr key={i}>
                    <td className={"align-top"}><strong>{i18n(edu.name)}</strong></td>
                    <td className={"align-top text-right"}>
                      <span>{i18n(edu.department)} {i18n(edu.degree)}</span><br/>
                      <span className={"text-secondary"}>{toYearMonth(edu.from)} ~ {edu.to ? toYearMonth(edu.to) : i18n(EducationOngoing)}</span><br/>
                    </td>
                  </tr>)
                }
                </tbody>
              </table>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className={"pt-5"}>
              <h1 className={"section"}>Languages</h1>
            </Col>
            <Col xs={12} className={"pt-2"}>
              <table className={"w-100"}>
                <tbody>
                {
                  AvailableLanguages.map((lang, i) => <tr key={i}>
                    <td>{lang.emoji}</td>
                    <td><strong>{i18n(lang.name)}</strong></td>
                    <td>{i18n(lang.level)}</td>
                  </tr>)
                }
                </tbody>
              </table>

            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <Container style={{ height: "7.5rem"}} />
    <div className={"bg-light"}>
      <Container>
        <Row>
          <Col className={"text-center text-white"} style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
            Yoonha Hwang © 2021 All Rights Reserved
          </Col>
        </Row>
      </Container>
    </div>
  </div>
};

export default Index;
