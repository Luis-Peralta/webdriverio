import LondonEx from '../pages/LondonEx';
const londonEx = new LondonEx();

describe('LondonEx Page', () => {
  beforeEach(async () => {
    await londonEx.openUrl();
  });

  it('User should able to order by asc in code table', async () => {
    await londonEx.clickOnFTSE100();
    await londonEx.switchToFTSE100Tab();
    await londonEx.clickOnCodeColumn();
    await londonEx.sortByCodeAsc();
    expect(await londonEx.getFirstCodeValue()).toContain('AA');
  });
});