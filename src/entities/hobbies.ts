import { ImgData } from "../types/img.data";
import { User } from "./user";

export type Hobbies = {
  id: string,
  topic: string,
  author: User,
  place: string,
  picture: ImgData;

} 
