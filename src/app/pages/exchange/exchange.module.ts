import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeComponent } from './exchange.component';
import { SharedModule } from '../../shared/shared.module';
import { ExchangeRoutes } from './exchange.routing';
import { TradingviewComponent } from './tradingview/tradingview.component';
import { OrderComponent } from './order/order.component';
import { OrderPositionComponent } from './orderPosition/orderPosition.component';
import { PositionComponent } from './orderPosition/position/position.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ExchangeRoutes
  ],
  declarations: [
    ExchangeComponent,
    TradingviewComponent,
    OrderComponent,
    OrderPositionComponent,
    PositionComponent
  ]
})
export class ExchangeModule { }
