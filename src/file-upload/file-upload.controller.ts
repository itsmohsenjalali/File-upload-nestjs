import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CommandBus } from '@nestjs/cqrs';
import { UploadCommand } from './commands/impl/uploaded.command';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly commandBus: CommandBus) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { dest: './uploads' }))
  async uploadfile(@UploadedFile() file) {
    console.log(file);
    return this.commandBus.execute(new UploadCommand({ ...file}));
  }
}
