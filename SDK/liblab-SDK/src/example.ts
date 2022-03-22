import { SDK } from "./lib/SDK";

SDK.getBooks("api_key");
SDK.getAllMovies("api_key");
SDK.getAllQuotes("api_key");
SDK.getAllChapters("api_key");
SDK.getBook("api_key", "id");
SDK.getMovie("api_key", "id");
SDK.getQuote("api_key", "id");
SDK.getChapter("api_key", "id");
SDK.getBookChapters("api_key", "id");
SDK.getMovieQuote("api_key", "id");
