import { AggregateRoot } from '@nestjs/cqrs';
import { fileInterface } from './interfaces/file.interface';
import { uploadedFile } from '../events/impl/file-uploaded.event';

export class Filemodel extends AggregateRoot {
  data: any;
  constructor(private readonly id: string | undefined) {
    super();
  }
  setData(file:fileInterface){
    console.log("in model set Data")
    this.data = file;
  }
  uploadFile(){
    console.log("in model uploadFile")
    this.apply(new uploadedFile(this.data.filename))
  }
  getFile(){
    this.apply(new )
  }
}
