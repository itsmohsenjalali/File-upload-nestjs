import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { FileUploadController } from './file-upload.controller';
import { FileUploadService } from './file-upload.service';
import { FileRepository } from './repository/file.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { FileSchema } from './models/schemas/file.schema';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([{ name: 'File', schema: FileSchema }]),
  ],
  controllers: [FileUploadController],
  providers: [FileUploadService, ...CommandHandlers, FileRepository],
})
export class FileUploadModule {}
