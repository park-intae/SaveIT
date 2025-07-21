import axios from 'axios';

export async function CallQuote(tags) {
  if (!tags || tags.length == 0) {
    throw new Error('태그가 입력되지 않았습니다');
  }

  const tagQuery = tags.join('|');
  const url = `https://api.quotable.io/random?tags=${tagQuery}`;

  try {
    const res = await axios.get(url);
    return {
      content: res.data.content,
      author: res.data.author,
    };
  } catch (err) {
    console.error('명언 불러오기 실패:', err.message);
    return {
      content: '명언을 불러오는데 실패했습니다',
      author: '-',
    };
  }
}
