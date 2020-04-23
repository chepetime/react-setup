import axios from "axios";

const baseURL = process.env.APP_AXIOS_BASEURL || "/api/";
const timeout = process.env.APP_AXIOS_TIMEOUT || 1000;
const headers = process.env.APP_AXIOS_HEADERS || { "X-Custom-Header": "value" };

/**
 * Create an axios instance with the same base url, timeout
 * and custom headers
 */
const api = axios.create({ baseURL, timeout, headers });

// [handler] Service Error Handler
const throwError = (error) => error;

// [GET Wrapper]
const GET = (route = "/") =>
  api
    .get(route)
    .then((res) => res)
    .catch(throwError);

// [POST Wrapper]
const POST = (route = "/", data = {}) =>
  api
    .post(route, data)
    .then((res) => res)
    .catch(throwError);

/**
 * postInfo
 * example of a get request
 */
export function getInfo() {
  return GET("/info");
}

export function getUsers() {
  return GET("/users");
}

/**
 * postInfo
 * example of a POST request
 * @param {Object} data
 */
export function postInfo(data) {
  return POST("/info", data);
}
