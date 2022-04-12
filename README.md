# React Project: Google Books User Interface

Create a website in React for finding a book via Google Books API.

![Landing-Page](https://user-images.githubusercontent.com/100544967/162741898-3cd50cde-a004-43ad-8366-899e6104d787.PNG)

![Book Search](https://user-images.githubusercontent.com/100544967/162741877-fcf5fa56-2867-42b1-aaf9-9d369203e37c.PNG)

![Modal-Box](https://user-images.githubusercontent.com/100544967/162867555-c3825a18-9532-480a-a5aa-13bda79f6005.PNG)

<a href="https://arrums.github.io/react-find-a-book/" target="_blank">Live
Project</a>

## Goals

Implementing React and Javascript topics that I have learned such as API, array,
async/await, effects, map, object, promise, state, and props.

## Inspiration

![inspiration](https://user-images.githubusercontent.com/100544967/162867475-24ac6b4f-c8ee-43d5-a49e-6d39bdebd13a.PNG)
[Brewwlab](https://brewwlab.com/)

## Requirements

### MVP

1. Create a page that allows users to search for books
2. Page should include the following:
   - Header section introducing the page
   - Form containing a text input and a submit / search button
   - A grid of books

Instructions:

- When the submit button is clicked you need the request books from the Google
  books API using the input value as your query string
- The books that you receive should be rendered in the books grid.
- Each book in the grid should have an image, author, title and description
- The grid should be responsive on different screen sizes
- You should use async / await for your request code, NOT .then

Styling (required):

- This application should look good, take some time to pick a palette and plan
  out your design. You can use tools like Figma or wireframe pro to plan what
  your application is going to look like.
- Styling must use BEM, and each block should have its own SCSS file Your
  palette should use variables

Application Design (required):

- You should separate DOM functions and non-DOM functions in different modules
  Example:
  https://github.com/nology-tech/kiribati-resources/tree/main/js/modules
- Write as many non-DOM functions as you can Functions should do 1 thing, and
  should be as pure and reusable as possible
- Always use iterators over loops
- Always parametrize and abstract large pieces of duplicate code.

Bonus (optional, but highly recommended):

- Give feedback to the user when no book results can be found for the query.
- When a user clicks a book in the grid, a modal should appear with more book
  information, think about release, publish date, country, languages, etc.

## Implementation Details

1. Create home container for the introduction page and searchbar
2. Create and style booklist container for the book grid
3. Create and style bookcard component
4. Create a function that handles API fetching using async/await
5. Grabbing DOM element for the search function using useState
6. Use useEffect to call the function when a change happen in the searchbar

### Tech Stack

- [x] HTML
- [x] CSS/SCSS
- [x] Javascript
- [x] React
- [x] API (Google Books)
- [x] Git and Github

### Issue to be addressed

- [x] Handle 2 or more authors of the same book
- [x] Modal box for book information
- [x] Modal box content doesn't wrap properly

### Features to implemented

- [ ] Search options for published year and ISBN
- [ ] Pagination for more search results
