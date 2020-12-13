import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { uploadedFile } from '../impl/file-uploaded.event';

@EventsHandler(uploadedFile)
export class uploadedFileHandler
  implements IEventHandler<uploadedFile> {
  handle(event: uploadedFile) {
    console.log('File Uploaded event '+ event.filename);
  }
}
