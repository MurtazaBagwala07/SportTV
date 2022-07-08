import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
 
  },
  {
    _id: uuid(),
    categoryName: "Football",
 
  },
  {
    _id: uuid(),
    categoryName: "Chess",
    
  },
  {
    _id: uuid(),
    categoryName: "Tennis",
  },
  {
    _id: uuid(),
    categoryName: "Cricket",
  },
];
