import FastTest from '../pages/FastTest';

const fastTest = new FastTest();
const data = {
  thresholds: {
    downloadSpeed: '20 Mbps',
    uploadSpeed: '10 Mbps',
    downloadLatency: '100 ms',
    loadedLatency: '200 ms',
  },
};

describe('Fast.com Speed Test', () => {
  beforeEach(async () => {
    await fastTest.openUrl();
  });

  it('Should display all Network Details test after speedtest is finished', async () => {
    await fastTest.waitUntilTestIsFinished();
    await fastTest.clickShowMoreDetails();
    await fastTest.waitUntilTestIsFinished();

    const downloadSpeed = await fastTest.getDownloadValue();
    const uploadSpeed = await fastTest.getUploadValue();
    const downloadLatency = await fastTest.getDownloadLatencyValue();
    const loadedLatency = await fastTest.getLoadedLatencyValue();

    console.log('** Download Speed **', downloadSpeed);
    console.log('** Upload Speed **', uploadSpeed);
    console.log('** Download Latency **', downloadLatency);
    console.log('** Loaded Latency **', loadedLatency);

    expect(parseFloat(downloadSpeed)).toBeGreaterThanOrEqual(parseFloat(data.thresholds.downloadSpeed));
    expect(parseFloat(uploadSpeed)).toBeGreaterThanOrEqual(parseFloat(data.thresholds.uploadSpeed));
    expect(parseFloat(downloadLatency)).toBeLessThanOrEqual(parseFloat(data.thresholds.downloadLatency));
    expect(parseFloat(loadedLatency)).toBeLessThanOrEqual(parseFloat(data.thresholds.loadedLatency));

    const clientInfo = await fastTest.getInfoClient();
    console.log('** Client Info **', clientInfo);
    expect(clientInfo.location).toBeDefined();
    expect(clientInfo.ip).toBeDefined();
    expect(clientInfo.isp).toBeDefined();
    expect(clientInfo.serverLocation).toBeDefined();
  });
});