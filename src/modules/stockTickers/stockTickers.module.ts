import { Logger, Module } from '@nestjs/common';
import { FindTikcersHttpController } from '@modules/stockTickers/queries/findTickers/findTickers.controller';
import { TickerDomainService } from '@modules/stockTickers/domain/ticker.domain.service';
import { TickerService } from '@modules/stockTickers/queries/findTickers/findTickers.services';
import { MarketstackServices } from './services/marketstack/marketstack.services';
import { HttpService } from '@libs/http/http.service';
import { HttpModule } from '@nestjs/axios';
import { EODRepository } from '@modules/stockTickers/repositories/eod.repository';
import { TickerRepository } from '@modules/stockTickers/repositories/ticker.repository';
import { TickerMapper } from '@modules/stockTickers/mappers/tickers.mappers';
import { EODMapper } from '@modules/stockTickers/mappers/eod.mappers';

const httpControllers = [FindTikcersHttpController];

@Module({
  imports: [HttpModule],
  controllers: [...httpControllers],
  providers: [
    Logger,
    HttpService,
    MarketstackServices,
    TickerService,
    TickerDomainService,
    TickerRepository,
    EODRepository,
    TickerMapper,
    EODMapper,
  ],
})
export class StockTickersModule {}
