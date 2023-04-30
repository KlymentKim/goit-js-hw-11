// import notiflix;

const form = document.getElementById('search-form');
const input = document.querySelector('.search-form input');
const button = document.querySelector('.search-form button');

const url = 'https://pixabay.com/api/?key={YOUR_API_KEY}&q={SEARCH_TERM}&image_type=photo&orientation=horizontal&safesearch=true'

notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');