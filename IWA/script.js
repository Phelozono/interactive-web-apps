import { BOOKS_PER_PAGE, authors, genres, books } from "./data.js";

let matches = books;
let page = 1;
const range = [0, 10];

if (!books || !Array.isArray(books)) {
  throw new Error('Source required');
}

if (!range || range.length < 2) {
  throw new Error('Range must be an array with two numbers');
}

const day = {
  dark: '10, 10, 20',
  light: '255, 255, 255',
};

const night = {
  dark: '255, 255, 255',
  light: '10, 10, 20',
};

const fragment = document.createDocumentFragment();
const extracted = books.slice(0, 36);

function createPreview(bookData) {
  const { author, image, title } = bookData;

  const preview = document.createElement('div');
  preview.classList.add('preview');

  const previewImage = document.createElement('img');
  previewImage.src = image;
  previewImage.alt = title;
  preview.appendChild(previewImage);

  const previewTitle = document.createElement('h2');
  previewTitle.textContent = title;
  preview.appendChild(previewTitle);

  const previewAuthor = document.createElement('p');
  previewAuthor.textContent = authors[author];
  preview.appendChild(previewAuthor);

  return preview;
}

function createPreviewsFragment(data, start, end) {
  const fragment = document.createDocumentFragment();

  for (let i = start; i < end && i < data.length; i++) {
    const { author, image, title, id } = data[i];

    const preview = createPreview({
      author,
      id,
      image,
      title
    });

    fragment.appendChild(preview);
  }

  return fragment;
}


document.querySelector('[data-list-items]').appendChild(fragment);


const v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';

const css = {
  day: {
    dark: '10, 10, 20',
    light: '255, 255, 255',
  },
  night: {
    dark: '255, 255, 255',
    light: '10, 10, 20',
  },
};

document.documentElement.style.setProperty('--color-dark', css[v].dark);
document.documentElement.style.setProperty('--color-light', css[v].light);

document.querySelector('[data-list-button]').innerHTML = `Show more (${books.length - BOOKS_PER_PAGE})`;

document.querySelector('[data-list-button]').innerHTML = /* html */ `
  <span>Show more</span>
  <span class="list__remaining"> (${
    matches.length - page * BOOKS_PER_PAGE > 0
      ? matches.length - page * BOOKS_PER_PAGE
      : 0
  })</span>
`;

document.querySelector('[data-list-button]').disabled = !(matches.length - page * BOOKS_PER_PAGE > 0);

document.querySelector('[data-list-button]').innerHTML = /* html */ [
  '<span>Show more</span>',
  `<span class="list__remaining"> (${
    matches.length - page * BOOKS_PER_PAGE > 0
      ? matches.length - page * BOOKS_PER_PAGE
      : 0
  })</span>`,
].join('');

document.querySelector('[data-search-cancel]').addEventListener('click', () => {
  document.querySelector('#data-search-overlay').open = false;
});

document.querySelector('[data-settings-cancel]').addEventListener('click', () => {
  document.querySelector('#data-settings-overlay').open = false;
});

document.querySelector('[data-settings-form]').addEventListener('submit', () => {
  // ...
});

document.querySelector('[data-list-close]').addEventListener('click', () => {
  document.querySelector('#data-list-active').open = false;
});

document.querySelector('[data-list-button]').addEventListener('click', () => {
  document.querySelector('[data-list-items]').appendChild(createPreviewsFragment(matches, page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE));
});

document.querySelector('[data-header-search]').addEventListener('click', () => {
  document.querySelector('[data-search-overlay]').open = true;
  document.querySelector('[data-search-title]').focus();
});
document.querySelector('[data-search-submit]').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  const result = [];

  const booksList = [
    {
      title: 'Book Title 1',
      author: 'Author 1',
      genres: ['Genre 1', 'Genre 2'],
      // ...
    },
    {
      title: 'Book Title 2',
      author: 'Author 2',
      genres: ['Genre 2', 'Genre 3'],
      // ...
    },
    // ...
  ];
  
 if (display.length < 1) {
    document.querySelector('[data-list-message]').classList.add('list__message_show');
  } else {
    document.querySelector('[data-list-message]').classList.remove('list__message_show');
  }

  document.querySelector('[data-list-items]').innerHTML = '';
  const fragment = document.createDocumentFragment();
  const extracted = source.slice(range[0], range[1]);

  for (let i = 0; i < extracted.length; i++) {
    const book = extracted[i];
    const element = document.createElement('button');
    element.classList.add('preview');
    element.setAttribute('data-preview', book.id);

    element.innerHTML = /* html */ `
      <img class="preview__image" src="${book.image}" />
      <div class="preview__info">
        <h3 class="preview__title">${book.title}</h3>
        <div class="preview__author">${authors[book.author]}</div>
      </div>
    `;
    fragment.appendChild(element);
  }

  document.querySelector('[data-list-items]').appendChild(fragment);
});

document.querySelector('[data-list-button]').disabled = initial > 0;
document.querySelector('[data-list-button]').innerHTML = /* html */ `
<span>Show more</span>
<span class="list__remaining"> (${remaining})</span>
`;

window.scrollTo({ top: 0, behavior: 'smooth' });
document.querySelector('[data-search-overlay]').open = false;

document.querySelector('[data-settings-overlay]').addEventListener('submit', (event) => {

});
document.querySelector('[data-settings-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const result = Object.fromEntries(formData);
  document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
  document.documentElement.style.setProperty('--color-light', css[result.theme].light);
  document.querySelector('[data-settings-overlay]').open = false;
});

document.querySelector('[data-list-items]').addEventListener('click', (event) => {
  const pathArray = Array.from(event.path || event.composedPath());
  let active;

  for (let i = 0; i < pathArray.length; i++) {
    const node = pathArray[i];
    if (active) break;
    const previewId = node?.dataset?.preview;

    for (const singleBook of books) {
      if (singleBook.id === previewId) active = singleBook;
    }
  }

  if (!active) return;
  document.querySelector('[data-list-active]').open = true;
  document.querySelector('[data-list-image]').src = active.image;
  document.querySelector('[data-list-title]').textContent = active.title;
  document.querySelector('[data-list-subtitle]').textContent = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
  document.querySelector('[data-list-description]').textContent = active.description;
});
        