// import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
// import { Types } from 'mongoose';
// import { GetFileQuery } from '../impl/get-file.query';
//
// @QueryHandler(GetFileQuery)
// export class FindSingleOrderHandler
//   implements IQueryHandler<GetFileQuery> {
//   constructor(private readonly orderRepository: GetFileQuery) {}
//
//   async execute(query: GetFileQuery) {
//     const { id } = query;
//     return this.orderRepository.findOne(new Types.ObjectId(id));
//   }
// }
