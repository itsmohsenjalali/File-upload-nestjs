import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UploadCommand } from '../impl/uploaded.command';
import { FileRepository } from '../../repository/file.repository';

@CommandHandler(UploadCommand)
export class UploadHandler implements ICommandHandler<UploadCommand> {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly filerepository: FileRepository,
  ) {}

  async execute(command: UploadCommand) {
    console.log('In The Command Handler...');
    const { file } = command;
    const up = this.publisher.mergeObjectContext(
      await this.filerepository.fileUpload(file),
    );
    up.uploadFile(file.filename)
    up.commit()
  }
}
