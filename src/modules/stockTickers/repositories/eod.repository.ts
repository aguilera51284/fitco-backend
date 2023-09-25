import { Injectable } from '@nestjs/common';
import { MarketstackServices } from '@modules/stockTickers/services/marketstack/marketstack.services';
import { PaginatedQueryRequestDto } from '@src/libs/api/paginated-query.request.dto';

@Injectable()
export class EODRepository {
  constructor(private readonly httpService: MarketstackServices) {}

  async getEndofDayData(
    queryParams: PaginatedQueryRequestDto,
    symbols: string[],
  ): Promise<any> {
    return this.httpService.getEndofDayData(queryParams, symbols);
  }
}
