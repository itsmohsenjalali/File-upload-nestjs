import { AggregateRoot } from '@nestjs/cqrs';
import { fileInterface } from './interfaces/file.interface';
import { uploadedFile } from '../events/impl/file-uploaded.event';

export class Filemodel extends AggregateRoot {
  constructor(private readonly file: fileInterface) {
    super();
  }
  uploadFile(filename: string){
    this.apply(new uploadedFile(filename))
  }
}
