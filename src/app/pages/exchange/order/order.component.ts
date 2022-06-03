import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  constructor(iconsLibrary: NbIconLibraries) {
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
  }
  settingFormGroup: FormGroup = new FormGroup({
    amount: new FormControl(100, [Validators.required]),
    price: new FormControl(100, [Validators.required]),
    tp: new FormControl(100, [Validators.required]),
    sl: new FormControl(100, [Validators.required]),
    type: new FormControl('buy', [Validators.required])
  })
  ngOnInit() {
  }
  get f() { return this.settingFormGroup.controls; }
}
