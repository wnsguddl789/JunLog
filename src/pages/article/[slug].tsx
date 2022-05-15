import * as React from 'react';
import { GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { COLOR, ARTICLE_DATA } from '../../constant';
import { ParsedUrlQuery } from 'querystring';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const ArticleDetailPage = ({ data }: any) => {
  console.log(data);
  return (
    <React.Fragment>
      <IntroDuce>
        <h1>Article</h1>
        <p>
          This page is an article page documenting my growth...!
          <br />
          From Junior Developer to Senior Developer
        </p>
      </IntroDuce>
      <p>{data.title}</p>
      <p>{data.content}</p>
      <p>{data.createdAt}</p>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    params: { slug },
  } = context;
  const data = ARTICLE_DATA.filter((_) => _.id === parseInt(slug))[0];
  return {
    props: { data },
  };
};

export default ArticleDetailPage;
const IntroDuce = styled.div`
  margin: 0;
  padding: 2em 0;

  h1 {
    font-size: 2em;
    padding: 0.5em 0;
    font-weight: 700;
    ::after {
      padding: 0 0.2em;
      content: '📒';
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
