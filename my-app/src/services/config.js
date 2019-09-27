import axios from 'axios';

const TEST_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWxpZCI6dHJ1ZSwiaWQiOiJiYjA5NTE2MS0wZDYyLTQ1NzktODU3My1jOWMzNWE5YWRhMmQiLCJ1c2VybmFtZSI6IlMzNTEyNSIsImV4cCI6MTUyMzg5NzIyNiwiaWF0IjoxNTIxMzA1MjI2fQ.Os3xhNkbaz3QdH3jUp0vES_g1ugO6oUf6bPENeeIsTU';
// const TEST_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWxpZCI6dHJ1ZSwiaWQiOiJiZTlhZjk2OC1iNzMxLTRmOTAtOGU4MC05MzRlMGJhYTVjZjQiLCJ1c2VybmFtZSI6IlM0MjAwMSIsImV4cCI6MTUyNTUwMDkzOCwiaWF0IjoxNTIyOTA4OTM4fQ.DeZe24zyZVOPWXGVTzj6ZI65p2wV2hims41yzZ48RtA';

const instance = axios.create({
  baseURL: 'https://app.senati.edu.pe/api/v2',
  timeout: 8000,
  // headers: { 'X-Custom-Header': 'foobar' }
});


export {
  instance,
  TEST_TOKEN,
};
