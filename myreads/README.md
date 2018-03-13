# Reactnd-myreads

## Quick Start
To quickly start using the app and begin the development process you can copy and paste the following command into your console.
```bash
git clone https://github.com/71emj/Reactnd-myreads.git
cd myreads
```
Then start the app either via npm
```
npm install
npm start
```
or via yarn
```bash
yarn install
yarn start
```
## Documentation
### File Structure
The project is structured as following
```bash
|-- README.md
|-- LICENSE
+-- client
    |-- package.json
    +-- public
    |   |-- index.html
    |   |-- favicon.ico
    |   |-- manifest.json
    +-- src
        |-- App.js
        |-- App.css
        |-- index.js
        |-- index.css
        |-- logo.svg
        |-- registerServiceWorker.js
        +-- components
        |   +-- Book
        |   +-- BookDisplay
        |   +-- BookShelf
        |   +-- SearchBar
        |   +-- SearchResult
        |   +-- ShelfChanger
        +-- routes
        |   +-- HomePage
        |   +-- SearchPage
        +-- util
        |   |-- index.js
        |   |-- BookAPI.js
        |   |-- Helper.js
        +-- icons
        +-- _test_
        +-- App.test.js
```
### Functionality
The application contains two functionality that can be access via following routes:
* "/", "/home", "/index": Stores user's library and divided into three different shelves.
* "/search", "/find", "/books": Search provides user with an interface to find more books to add to their library

#### Home
Contains all the books the user added to their library, and divided them into three different shelves:
* Currently Reading
* Want to Read
* Read
User can reorganize their collection by moving books to different shelves or remove them from library (select none).

#### Search
Search provides an interface for user to search for new books to add to their collection. Simply by typing into the search bar on top of the page, the app will display either a list of books or informed the user that the search it unsuccessful.

### Development Roadmap
The following are a list of functionalities that are scheduled (chronically) to implement into the app
* Search history display
* Autocompleting and search suggestion
* User authentication
* Persistent storage tied to individual user
* Amazon API for a more comprehensive book list

### LICENSE
(MIT)
