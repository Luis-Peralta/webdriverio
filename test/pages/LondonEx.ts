import Wdio from '../utils/Wdio';

const elements = {
  buttonViewFTSE100: '.tabs-wrapper a[href*="/constituents"]',
  columnCode: '.code [class="indented clickable"]',
  sortByCodeAsc: '.expanded [title="A-Z"]',
  sortByCodeDesc: '.expanded [title="Z-A"]',
  codeValues: '.ftse-index-table-table  a.blue-text',
};

export default class LondonEx {
  url: string;

  constructor() {
    this.url = process.env.URL2 ?? '';
  }

  async openUrl(url = this.url) {
    await Wdio.goTo(url);
  }

  async clickOnFTSE100() {
    await Wdio.waitAndClick({ selector: elements.buttonViewFTSE100 });
  }

  async switchToFTSE100Tab() {
    await Wdio.switchToLastTab();
  }

  // ftse-100 page
  async clickOnCodeColumn() {
    await Wdio.waitAndClick({ selector: elements.columnCode });
  }

  async sortByCodeAsc() {
    await Wdio.waitAndClick({ selector: elements.sortByCodeAsc });
  }

  async getFirstCodeValue() {
    const code = await Wdio.getText({ selector: elements.codeValues });
    return code;
  }

}