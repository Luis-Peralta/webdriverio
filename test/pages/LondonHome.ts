import Wdio from '../utils/Wdio';

export default class LondonHome {
  url: string;

  constructor() {
    this.url = process.env.URL2 ?? '';
  }

}