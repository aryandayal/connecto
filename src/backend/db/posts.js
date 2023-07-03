import { v4 as uuid } from "uuid";
import { formatDate ,formatTime} from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    name:"Aryan Dayal",
    userPhoto:"https://i.ibb.co/NTds3WK/aryanp.jpg",
    postPic:"https://i.ibb.co/qjKYDmZ/aryan.jpg",
    content:
      "this is aryan",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aryanthecrew",
    comments:[],
    time: formatTime(),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name:"Arjun",
    userPhoto:"https://i.ibb.co/NVv1wbx/arjun.jpg",
    postPic:"https://i.ibb.co/wKbYzzZ/n2.jpg",

    content:
      "profile pic",
    likes: {
      likeCount: 52123,
      likedBy: [],
      dislikedBy: [],
    },
    username: "arjun-computer-geek",
    comments:[],
    time: formatTime(),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name:"Pickachu",
    userPhoto:"https://i.ibb.co/Bz2rG3Z/pickachu.png",
    postPic:"https://i.ibb.co/yBQSjNL/n5.jpg",
    content:
      "pickachu",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Pickachu",
    comments:[],
    time: formatTime(),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name:"Mario",
    userPhoto:"https://i.ibb.co/VmXfSKD/mario.jpg",
    postPic:"https://i.ibb.co/J51rbR8/n4.jpg",
    content:
      "mario",
    likes: {
      likeCount: 22,
      likedBy: [],
      dislikedBy: [],
    },
    username: "mario",
    comments:[],
    time: formatTime(),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name:"Jerry",
    userPhoto:"https://i.ibb.co/Jr3QhSH/jerry.jpg",
    postPic:"https://i.ibb.co/54rKXWy/n3.jpg",

    content:
      "Jerry is great",
    likes: {
      likeCount: 52,
      likedBy: [],
      dislikedBy: [],
    },
    username: "jerry",
    comments:[],
    time: formatTime(),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

];
