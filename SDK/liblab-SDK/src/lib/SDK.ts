import axios from "axios";
import _ from "lodash";

export class SDK {
  static url = "https://the-one-api.dev/v2";

  static async getBooks(access_token: string) {
    const res = axios
      .get(`${SDK.url}/book/`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((resp) => {
        console.log(_.map(resp.data.docs, "name"));
      });
    return res;
  }

  static async getBook(access_token: string, id: string) {
    const res = axios
      .get(`${SDK.url}/book/${id}`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((resp) => {
        console.log(_.map(resp.data.docs, "name"));
      });
    return res;
  }

  static async getBookChapters(access_token: string, id: string) {
    const res = axios
      .get(`${SDK.url}/book/${id}/chapter`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((resp) => {
        console.log(_.map(resp.data.docs, "chapterName"));
      });
    return res;
  }

  static async getMovie(access_token: string, id: string) {
    const res = axios
      .get(`${SDK.url}/movie/${id}`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((resp) => {
        console.log(_.map(resp.data.docs, "name"));
      });
    return res;
  }

  static async getAllMovies(access_token: string) {
    const res = axios
      .get(`${SDK.url}/movie`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((resp) => {
        console.log(_.map(resp.data.docs, "name"));
      });
    return res;
  }

  static async getMovieQuote(access_token: string, id: string) {
    const res = axios
      .get(`${SDK.url}/movie/${id}/quote`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((resp) => {
        console.log(_.map(resp.data.docs, "dialog"));
      });
    return res;
  }

  static async getAllQuotes(access_token: string) {
    const res = axios
      .get(`${SDK.url}/quote`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((resp) => {
        console.log(_.map(resp.data.docs, "dialog"));
      });
    return res;
  }

  static async getQuote(access_token: string, id: string) {
    const res = axios
      .get(`${SDK.url}/quote/${id}`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((resp) => {
        console.log(_.map(resp.data.docs, "dialog"));
      });
    return res;
  }

  static async getAllChapters(access_token: string) {
    const res = axios
      .get(`${SDK.url}/chapter/`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((resp) => {
        console.log(_.map(resp.data.docs, "chapterName"));
      });
    return res;
  }

  static async getChapter(access_token: string, id: string) {
    const res = axios
      .get(`${SDK.url}/chapter/${id}`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((resp) => {
        console.log(_.map(resp.data.docs, "chapterName"));
      });
    return res;
  }
}
