import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Aryan",
    lastName: "Dayal",
    email:"rnhub@gmail.com",
    username: "aryanthecrew",
    password: "aryanthecrew",
    userPhoto: "https://i.ibb.co/NTds3WK/aryanp.jpg",
    bio:"dont know!",
    link:"https://emojipedia.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Arjun",
    lastName: "Kumar",
    email:"arjun@gmail.com",
    username: "arjunkumar",
    password: "arjun1234",
    userPhoto: "https://i.ibb.co/NVv1wbx/arjun.jpg",
    bio:"Full stack Developer",
    link:"https://arjun.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jerry",
    lastName: "Jerry",
    email:"jerry@gmail.com",
    username: "jerry",
    password: "jerry123",
    userPhoto: "https://i.ibb.co/Jr3QhSH/jerry.jpg",
    bio:"i love tom",
    link:"https://tomandjerry.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Super",
    lastName: "Mario",
    email:"mario@gmail.com",
    username: "mario",
    password: "mario123",
    userPhoto: "https://i.ibb.co/VmXfSKD/mario.jpg",
    bio:"i find my queen",
    link:"https://google.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Picka",
    lastName: "Pickachu",
    email:"pickachu@gmail.com",
    username: "pickachu124",
    password: "pikachu",
    userPhoto: "https://i.ibb.co/Bz2rG3Z/pickachu.png",
    bio:"i love me",
    link:"https://www.pokrmon.in/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

];
