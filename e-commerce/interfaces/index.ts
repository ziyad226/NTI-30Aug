import { FiltetData } from "./filterData";

declare module "express" {
  interface Request {
    filterData?: FiltetData;
  }
}
