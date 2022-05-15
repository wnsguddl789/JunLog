import React from 'react';
import styled from '@emotion/styled';
import { COLOR } from '../constant';
import Link from 'next/link';
import { FaGithubSquare, FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';
export const AppLayout: React.FunctionComponent<any> = ({ children }) => {
  return (
    <Container>
      <header>
        <span className="header-title">
          <Link href={'/'}>Jun Log</Link>
        </span>
        <li className="header-list">
          <ul>
            <Link href={'/article'}>Article</Link>
          </ul>
          <ul>
            <Link href={'/wiki'}>Wiki</Link>
          </ul>
          <ul>
            <Link href={'/log'}>Log</Link>
          </ul>
        </li>
      </header>
      <Main>{children}</Main>
      <Footer>
        <span className="footer-title">© 2022 Jun.</span>
        <li className="footer-list">
          <ul>
            <a href="https://github.com/wnsguddl789" target="_blank" rel="noreferrer">
              <FaGithubSquare />
            </a>
          </ul>
          <ul>
            {' '}
            <a href="https://www.instagram.com/bbak_jun/" target="_blank" rel="noreferrer">
              <FaInstagramSquare />
            </a>
          </ul>
          <ul>
            {' '}
            <a href="https://www.facebook.com/profile.php?id=100004491251855" target="_blank" rel="noreferrer">
              <FaFacebookSquare />
            </a>
          </ul>
        </li>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 30%;
  @media (max-width: 1366px) {
    padding: 0 25%;
  }
  @media (max-width: 1100px) {
    padding: 0 20%;
  }
  @media (max-width: 900px) {
    padding: 0 15%;
  }
  @media (max-width: 800px) {
    padding: 0 10%;
  }

  header {
    display: flex;
    @media (max-width: 800px) {
      display: block;
    }
    padding: 1rem 0;
    align-items: center;
    justify-content: space-between;

    a {
      color: black;
      text-decoration: none;
      :hover {
        color: ${COLOR.defaultColor};
      }
    }

    .header-title {
      font-size: 1.6em;
      font-weight: 700;
      ::after {
        padding: 0 0.2em;
        content: ',';
        color: ${COLOR.defaultColor};
      }
    }
    .header-list {
      display: flex;
      ul {
        padding: 20px 20px 20px 0;
        cursor: pointer;
      }
    }
  }
`;
const Main = styled.main`
  min-height: 50vh;
`;
const Footer = styled.footer`
  display: flex;
  align-items: center;
  padding: 2em 0;
  justify-content: space-between;

  .footer-title {
    font-size: 1em;
    font-weight: 700;
    color: gray;
  }
  .footer-list {
    display: flex;
    ul {
      padding: 0 0.2em;
      cursor: pointer;
      a {
        color: gray;
      }
    }
  }
`;
