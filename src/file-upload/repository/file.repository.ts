import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { fileInterface } from '../models/interfaces/file.interface';
import { Filemodel } from '../models/file.model';

@Injectable()
export class FileRepository {
  constructor(
    @InjectModel('File') private readonly fileModel: Model<fileInterface>,
  ) {}
  async fileUpload(file: fileInterface){
    console.log("in repository")
    const newfile = await this.fileModel.create({ ...file });
    const fileRoot = new Filemodel(newfile.fieldname)
    fileRoot.setData(file)
    return fileRoot
  }
}
