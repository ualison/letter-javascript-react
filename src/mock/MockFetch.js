import {MockDataUsers, MockDataPosts } from "./MockData";

export default async function mockfetch(url) {
                 switch (url) {
                   case "https://jsonplaceholder.typicode.com/users": {
                     return {
                       ok: true,
                       status: 200,
                       json: async () => MockDataUsers,
                     };
                   }
                   case "https://jsonplaceholder.typicode.com/posts": {
                     return {
                       ok: true,
                       status: 200,
                       json: async () => MockDataPosts,
                     };
                   }
                   default: {
                     throw new Error(`Unhandled request: ${url}`);
                   }
                 }
               }
