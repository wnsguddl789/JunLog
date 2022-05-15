import * as React from 'react';
import { GetServerSideProps } from 'next';
import { COLOR, ARTICLE_DATA } from '../../constant';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
type ArticleListType = {
  data: {
    id: string;
    title: string;
    content: string;
    createdAt: string;
  };
};

interface AppProps {
  data: ArticleListType['data'][];
}

const ArticleListPage = ({ data: datas }: AppProps) => {
  const router = useRouter();
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
      {datas &&
        datas?.map((data: ArticleListType['data'], dataIndex: Number) => (
          <ArticleContainer key={`data-${dataIndex}`} onClick={() => router.push(`/article/${data.id}`)}>
            <p className="article-title">{data.title}</p>
            <p className="article-created_at">{data.createdAt}</p>
            <p className="article-content">{data.content}</p>
          </ArticleContainer>
        ))}
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await ARTICLE_DATA;
  return {
    props: { data },
  };
};

export default ArticleListPage;
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
const ArticleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  padding: 0.3em 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  .article-title {
    width: 100%;
    font-weight: 600;
    line-height: 1.6;
  }
  .article-created_at {
    width: 100%;
    line-height: 1.6;
    font-size: 0.6em;
    color: rgba(0, 0, 0, 0.4);
  }
  .article-content {
    line-height: 1.6;
    font-size: 0.8em;
  }
`;
