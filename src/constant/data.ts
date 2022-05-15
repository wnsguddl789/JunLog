import dayjs from 'dayjs';
import * as isLeapYear from 'dayjs/plugin/isLeapYear'; // import plugin
import 'dayjs/locale/ko'; // import locale

export const ARTICLE_DATA = [
  {
    id: 1,
    title: '1번째 포스팅 더미 타이틀',
    content: '1번째 포스팅 더미 컨텐트',
    createdAt: JSON.stringify(dayjs().format()),
  },
  {
    id: 2,
    title: '2번째 포스팅 더미 타이틀',
    content: '2번째 포스팅 더미 컨텐트',
    createdAt: JSON.stringify(dayjs().format()),
  },
  {
    id: 3,
    title: '3번째 포스팅 더미 타이틀',
    content: '3번째 포스팅 더미 컨텐트',
    createdAt: JSON.stringify(dayjs().format()),
  },
];
