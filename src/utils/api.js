import { BASE_URL } from './constants';

const getProjectCards = async ({ page, limit }) => {
  try {
    const res = await fetch(
      `${BASE_URL}/projects?_page=${page}&_limit=${limit}`
    );
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.status);
  } catch (e) {
    throw new Error(e.message ?? 'Server error');
  }
};

export default getProjectCards;
