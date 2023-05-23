import axios from 'axios';

export default async function fetchImages(value, page) {
  const API_URL = 'https://pixabay.com/api/';
  const API_KEY = '35083988-65c327c14dd5a16ddf72a409f';
  const params = `?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${API_URL}${params}`).then(response => response.data);
}
