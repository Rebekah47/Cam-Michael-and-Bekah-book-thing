document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const formInput = function(event){
    event.preventDefault();
    const list = document.querySelector('#reading-list');
    const newListItem = document.createElement('ls');
    const titleTitle = document.createElement('h2');
    const title = document.createElement('h5');
    const authorTitle = document.createElement('h3');
    const author = document.createElement('h5');
    const categoryTitle = document.createElement('h4');
    const category = document.createElement('h5');
    
    titleTitle.textContent = "Title:"
    title.textContent = event.target.title.value;
    authorTitle.textContent = "Author:"
    author.textContent = event.target.author.value;
    categoryTitle.textContent = "Category:"
    category.textContent = event.target.category.value;
    
    newListItem.appendChild(titleTitle);
    newListItem.appendChild(title);
    newListItem.appendChild(authorTitle)
    newListItem.appendChild(author);
    newListItem.appendChild(categoryTitle);
    newListItem.appendChild(category);

    if (event.target.category.value === "Book"){
      newListItem.classList.add('book');
    } else if (event.target.category.value === "Article"){
      newListItem.classList.add('article');
    } else {
      newListItem.classList.add('blog-post');
    };

    list.appendChild(newListItem);

    
    formSubmit.reset();
  };

  const formSubmit = document.querySelector('#new-item-form')
    formSubmit.addEventListener('submit', formInput)
})
