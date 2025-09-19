import Wdio from '../utils/Wdio';

const locators = {
  speedValue: '#speed-value',
  speedUnits: '#speed-units',
  uploadValue: '#upload-value',
  uploadUnits: '#upload-units',
  downloadLatencyValue: '#latency-value',
  downloadLatencyUnits: '#latency-units',
  loadedLatencyValue: '#bufferbloat-value',
  loadedLatencyUnits: '#bufferbloat-units',
  indicatorSuccess: '.speed-progress-indicator.succeeded',
  showMoreDetailsButton: '#show-more-details-link',
  userLocation: '#user-location',
  userIp: '#user-ip',
  userIsp: '#user-isp',
  serverLocation: '#server-locations',
};

export default class FastTest {
  url: string;
  
  constructor() {
    this.url = process.env.FAST_URL ?? '';
  }
  // *** ACTIONS ***
  async openUrl(url = this.url) {
    await Wdio.goTo(url);
  }

  async waitUntilTestIsFinished() {
    await Wdio.waitUntilClassChanges({ selector: locators.indicatorSuccess, className: 'succeeded' }, 120000);
  }

  async clickShowMoreDetails() {
    await Wdio.waitAndClick({ selector: locators.showMoreDetailsButton });
  }

  // *** GETTERS - VALUES ***
  async getDownloadValue() {
    const speedValue = await Wdio.getText({ selector: locators.speedValue });
    const speedUnits = await Wdio.getText({ selector: locators.speedUnits });
    return `${speedValue} ${speedUnits}`;
  }

  async getUploadValue() {
    const uploadValue = await Wdio.getText({ selector: locators.uploadValue });
    const uploadUnits = await Wdio.getText({ selector: locators.uploadUnits });
    return `${uploadValue} ${uploadUnits}`;
  }

  async getDownloadLatencyValue() {
    const latencyValue = await Wdio.getText({ selector: locators.downloadLatencyValue });
    const latencyUnits = await Wdio.getText({ selector: locators.downloadLatencyUnits });
    return `${latencyValue} ${latencyUnits}`;
  }

  async getLoadedLatencyValue() {
    const loadedLatencyValue = await Wdio.getText({ selector: locators.loadedLatencyValue });
    const loadedLatencyUnits = await Wdio.getText({ selector: locators.loadedLatencyUnits });
    return `${loadedLatencyValue} ${loadedLatencyUnits}`;
  }

  async getInfoClient() {
    const location = await Wdio.getText({ selector: locators.userLocation });
    const ip = await Wdio.getText({ selector: locators.userIp });
    const isp = await Wdio.getText({ selector: locators.userIsp });
    const serverLocation = await Wdio.getText({ selector: locators.serverLocation });
    return { location, ip, isp, serverLocation };
  }
}