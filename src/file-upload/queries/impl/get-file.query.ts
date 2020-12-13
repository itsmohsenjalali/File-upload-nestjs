import  {IQuery} from '@nestjs/cqrs';

export class GetFileQuery implements IQuery{
  constructor(public readonly id: string) {}
}