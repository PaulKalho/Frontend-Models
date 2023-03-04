import { RequestBody } from "../src/core/Request";

export class MainBody extends RequestBody {
  lang = "de";
  data = [];

  constructor() {
    super("data", this);
  }
}
