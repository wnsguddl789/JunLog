import React from 'react';
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { COLOR, CARRER_LISTS } from '../constant';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <IntroDuce>
        <h1>Hey, I &#39;m Jun!!</h1>
        <p>
          I &#39;m a FrontEnd Developer! 👨🏽‍💻
          <br />
          Now I&#39;m working as Web Frontend Junior Developer at
          <a href="https://piip.co.kr/ko/sejinmind" target="_blank" rel="noreferrer">
            SejinMind
          </a>
          that serves
          <a href="https://markiny.com/" target="_black">
            Markiny.
          </a>
        </p>
      </IntroDuce>
      <CarrerContainer>
        <span> I&#39;ve worked at</span>
        <ul>
          {CARRER_LISTS.map((list, index) => (
            <React.Fragment key={`carrer-${index}`}>
              <li>
                <span className="carrer-compny_title">{list.company_name}</span>
                <div>
                  <p className="carrer-position">{list.position}</p>
                  <p className="carrer-range">{list.range}</p>
                </div>
              </li>
              <ul className="carrer-skills_list">
                {list.skills?.map((skill, skillIndex) => (
                  <li key={`skill-${skillIndex}`}>{skill}</li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </ul>
      </CarrerContainer>
    </React.Fragment>
  );
};

export default Home;

const IntroDuce = styled.div`
  margin: 0;
  padding: 2em 0;

  h1 {
    font-size: 2em;
    padding: 0.5em 0;
    font-weight: 700;
    ::after {
      padding: 0 0.2em;
      content: '🇰🇷';
    }
  }
  p {
    line-height: 1.6;
    font-size: 0.8em;
    a {
      padding: 0 0.1em;
      color: black;
      text-decoration: underline;
      font-weight: 700;
      :hover {
        color: ${COLOR.defaultColor};
      }
    }
  }
`;
const CarrerContainer = styled.div`
  & > span {
    line-height: 1.6;
    font-size: 1.5em;
    font-weight: 500;
    padding: 0 0.2em;
    background-color: ${COLOR.defaultColor};
    ::before {
      content: '👨🏽‍💻';
    }
  }

  & > ul {
    display: flex;
    flex-direction: column;
    .carrer-skills_list {
      display: flex;

      & > li {
        font-size: 0.5em;
        padding: 0 0.2em;
      }
      padding: 0.5em 0;
      border-bottom: 1px solid black;
    }
  }
  & > ul > li {
    display: flex;
    align-items: center;
    padding: 1.2em 0;

    & > .carrer-compny_title {
      font-size: 1em;
      width: 40%;
      font-weight: 700;
    }
    div {
      width: 60%;
    }
    & .carrer-position {
      font-size: 0.8em;
      font-weight: 600;
      color: gray;
    }
    & .carrer-range {
      font-size: 0.8em;
      font-weight: 400;

      color: gray;
    }
  }
`;
