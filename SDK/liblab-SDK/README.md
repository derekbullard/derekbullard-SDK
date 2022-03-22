# TheLordOfTheRingsLib
## Library description
This Library is a service for accessing the Lord of the rings API. Original link [https://the-one-api.dev/]

## How to install
Run `npm i the-lord-of-the-rings-library`

## How to use
API Service already injected in root. You need to declare an instance in your component constructor. 
Example `constructor(private theLordOfTheRingsLib: TheLordOfTheRingsLib) {}` 


## What data can be obtained using this library?

Method `getBooks()` return list of all "The Lord of the Rings" books.

Method `getSpecificBook(id)` return one specific book.

Method `getAllChaptersOfASpecificBook()` return all chapters of one specific book.

Method `getListOfMovies()` return list of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies.

Method `getSpecificMovie(id)` return one specific movie.

Method `getListOfCharacters()` return list of characters including metadata like name, gender, realm, race and more.

Method `getSpecificCharacter(id)` return one specific character.

Method `getQuotes()` return list of all movie quotes.

Method `getSpecificMovieQuote(id)` return one specific movie quote.

Method `getChapters()` return list of all book chapters.

Method `getSpecificChapter(id)` return one specific book chapter.

