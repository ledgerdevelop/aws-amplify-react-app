import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { DataCourseOfferDifference, DataAbout, DataAutogen } from './helpers/data';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #fff;
`;

const Container = styled.div`
  position: relative;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #1F75FE;
  max-width: 556px;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-bottom-style: solid; 
  border-bottom-width: thin;
  border-top-style: solid; 
  border-top-width: thin;
  h1 {
    padding: 1.5rem;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #ffffff;
  color: #000000;
  width: 100%;
  max-width: 556px;
  display: flex;
  flex-direction: column;
  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9em;
    margin-right: 0.6em;
    margin-left: 0.6em;
  }
`;


const Faq = () => {

  const [clickedOne, setClickedOne] = useState(false);
  const [clickedTwo, setClickedTwo] = useState(false);
  const [clickedThree, setClickedThree] = useState(false);

  const toggle = (index, value) => {
    if (value === 1) {
      if (clickedOne === index) {
        //if clicked question is already active, then close it
        return setClickedOne(null);
      }

      setClickedOne(index);
    } else if (value === 2) {
      if (clickedTwo === index) {
        //if clicked question is already active, then close it
        return setClickedTwo(null);
      }

      setClickedTwo(index);
    } else if (value === 3) {
      if (clickedThree === index) {
        //if clicked question is already active, then close it
        return setClickedThree(null);
      }

      setClickedThree(index);
    }
  };

  return (
    <Fragment>
      <section className="box bg-primary text-center py-md">
        <div className="box-inner">
          <h2 className="text-lg">Frequently asked Questions</h2>
          <p className="text-md">
            Antworten für Dich auf häufig gestellte Fragen
          </p>
        </div>
      </section>
      <section className="box-faq bg-secondary text-center py-md">
        <div className="box-inner">
          <p className="text-md">
            Fragen zu den Unterschieden der Kursangebote
          </p>
        </div>
      </section>
      <IconContext.Provider value={{ color: '#ffffff', size: '25px' }}>
        <AccordionSection>
          <Container>
            {DataCourseOfferDifference.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index, 1)} key={index}>
                    <h1>{item.question}</h1>
                    <span>{clickedOne === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clickedOne === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </Container>
        </AccordionSection>
      </IconContext.Provider>

      <div className="text-sm"></div>

      <section className="box-faq bg-secondary text-center py-md">
        <div className="box-inner">
          <p className="text-md">
            Fragen zu Autogenem Training allgemein
          </p>
        </div>
      </section>
      <IconContext.Provider value={{ color: '#ffffff', size: '25px' }}>
        <AccordionSection>
          <Container>
            {DataAutogen.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index, 2)} key={index}>
                    <h1>{item.question}</h1>
                    <span>{clickedTwo === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clickedTwo === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </Container>
        </AccordionSection>
      </IconContext.Provider>

      <div className="text-sm"></div>

      <section className="box-faq bg-secondary text-center py-md">
        <div className="box-inner">
          <p className="text-md">
            Fragen zum Anbieter
          </p>
        </div>
      </section>
      <IconContext.Provider value={{ color: '#ffffff', size: '25px' }}>
        <AccordionSection>
          <Container>
            {DataAbout.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index, 3)} key={index}>
                    <h1>{item.question}</h1>
                    <span>{clickedThree === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clickedThree === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </Container>
        </AccordionSection>
      </IconContext.Provider>
    </Fragment>
  );
};

export default Faq;
