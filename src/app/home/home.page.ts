import { Component, signal } from '@angular/core';
import { Device, DeviceInfo } from '@capacitor/device';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  readonly deviceInfo = signal<DeviceInfo | null>(null);

  constructor() {
    Device.getInfo().then((info) => {
      this.deviceInfo.set(info);
    });
  }
}
