import { Injectable } from '@nestjs/common';
// import { File } from '../models/file.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { fileInterface } from '../models/interfaces/file.interface';
import { Filemodel } from '../models/file.model';

@Injectable()
export class FileRepository {
  constructor(
    @InjectModel('File') private readonly fileModel: Model<fileInterface>,
  ) {}
  async fileUpload(file: fileInterface): Promise<Filemodel>{
    const newfile = new this.fileModel({ ...file });
    await newfile.save()
    return new Filemodel(newfile)
  }
}
