import { AfterViewInit, Component, OnInit, ElementRef, Renderer2, ViewChild, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'ngx-tradingview',
  templateUrl: './tradingview.component.html',
  styleUrls: ['./tradingview.component.scss']
})
export class TradingviewComponent implements OnInit, AfterViewInit,OnDestroy {
  @ViewChild('tradingview') tradingview?: ElementRef;
  private destroy$: Subject<void> = new Subject<void>();
  constructor(private _renderer2: Renderer2, private themeService: NbThemeService) { 
  }
  ngOnDestroy(): void {
   
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
    if(!window["LoadTradingView"])
    {
      let script = this._renderer2.createElement('script');
      script.type = `text/javascript`;
      script.src = "https://s3.tradingview.com/tv.js";
      script.onload = () => {
        let script1 = this._renderer2.createElement('script');
        script1.type = `text/javascript`;
        script1.text = `window.LoadTradingView = function name(theme){
              new TradingView.widget(
              {
              "autosize": true,
              "symbol": "BINANCE:BTCUSDT",
              "interval": "D",
              "timezone": "Etc/UTC",
              "theme": theme,
              "style": "1",
              "locale": "en",
              "range": "1D",
              "toolbar_bg": "#f1f3f6",
              "enable_publishing": false,
              "hide_side_toolbar": false,
              "allow_symbol_change": true,
              "container_id": "tradingview_bead9"
            }
            );
             }
             window.LoadTradingView("light");
             `;
        this.tradingview.nativeElement.appendChild(script1);
      };
      this.tradingview.nativeElement.appendChild(script);
    }else{
      window["LoadTradingView"]("light"); 
    }
    this.themeService.onThemeChange().subscribe(theme=>{
      if(window["LoadTradingView"]){
       if(theme.name==="dark"){
         window["LoadTradingView"]("dark");
       }else{
         window["LoadTradingView"]("light"); 
       }
      }
    });
  }


}
