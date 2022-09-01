import { BASE_URL, messages, textCategories } from './constants';

const getProjectCards = async ({ page, limit, category }) => {
  try {
    let categoryQuery = '';
    if (category && category !== textCategories[0]) {
      categoryQuery = `category=${category.toLowerCase()}&`;
    }
    const res = await fetch(
      `${BASE_URL}/projects?${categoryQuery}_page=${page}&_limit=${limit}`
    );
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.status);
  } catch (e) {
    throw new Error(e.message ?? messages.SERVER_ERR);
  }
};

export default getProjectCards;
