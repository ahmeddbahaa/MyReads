# MyReads Project

This is the starter template for the final assessment project for Udacity's React Fundamentals course. The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) to bootstrap the project.


## Prerequisites
Your machine must have the following installed on it:
- [Node/NPM](https://nodejs.org/en/download/) (v14 or higher)

## Instructions

### 1. Install Dependencies
After Cloning the project, head inside the project folder and run
```
npm install
```

### 2. Starting the project
Make sure to have Port 3000 available
```
npm start
```
## Screenshots Of The Project

![Alt text](/screenshots/Screenshot1.png?raw=true "Home Screen")
![Alt text](/screenshots/Screenshot2_change_book_state.png?raw=true "Change Book State")
![Alt text](/screenshots/Screenshot3_The_Updated_book_state_without_page_refresh.png?raw=true "Update The Book State")
![Alt text](/screenshots/Screenshot4_search_screen.png?raw=true "Search Screen")
![Alt text](/screenshots/Screenshot5_change_book_state_from_udacity_backend_server.png?raw=true "Change Book State From Udacity Backend Server To Display It in my Shelfs")
![Alt text](/screenshots/Screenshot6_the_updated_book_show_on_the_shelf_after_updating_it's_state_from_udacity_server_without_page_refresh.png?raw=true "The Book is now Added To the Chosen Shelf without page refresh")
## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).
