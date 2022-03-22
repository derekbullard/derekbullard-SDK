# Derek_Bullard-SDK

This streamlines the use (https://the-one-api.dev/)'s endpoints for easy development.

## from https://www.npmjs.com/package/derek-bullard-sdk

Run `npm i derek-bullard-sdk`

## How to Import

At the top of your file use
`import { SDK } from "./lib/SDK";`

# How to use

You can see an example of this in SDK/liblab-SDK/src/example.ts file within the package

You only need to add your api key within the first parameter of your function!
Example

`SDK.getBooks('<api key>');`
or
`SDK.getBook('<api key>', '<id'>)`

# Functions that comes with the SDK

`SDK.getBooks("api_key");` List all of the Lord of the Rings books
`SDK.getAllMovies("api_key");`List all of the Lord of the Rings movies
`SDK.getAllQuotes("api_key");` List all of the Lord of the Rings quotes
`SDK.getAllChapters("api_key");`List all of the Lord of the Rings chapters
`SDK.getBook("api_key", "id");`Return a given book from Lord of the Rings
`SDK.getMovie("api_key", "id");`Return a given movie from Lord of the Rings
`SDK.getQuote("api_key", "id");` Return a given quote from Lord of the Rings
`SDK.getChapter("api_key", "id");`Return a given chapter from Lord of the Rings
`SDK.getBookChapters("api_key", "id");`Return a all chapters from Lord of the Rings Book
`SDK.getMovieQuote("api_key", "id");`Return a given movie quote from Lord of the Rings
