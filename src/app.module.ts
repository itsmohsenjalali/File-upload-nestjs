import { Module } from '@nestjs/common';
import { FileUploadModule } from './file-upload/file-upload.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    FileUploadModule,
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
  ],
})
export class AppModule {}
