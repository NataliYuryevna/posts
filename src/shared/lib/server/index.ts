import postsMock from './mock/posts.json';

const myDate = new Date();

myDate.setMinutes(myDate.getMinutes() - 5);
postsMock[0].date = myDate.toString();

myDate.setMinutes(myDate.getMinutes() - 5);
postsMock[1].date = myDate.toString();


export { postsMock };
export { default as usersMock } from './mock/users.json'
export type {default as typePosts} from './type/post'
export type {default as typeUsers} from './type/user'