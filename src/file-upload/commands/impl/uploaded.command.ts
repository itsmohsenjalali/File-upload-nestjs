import { fileInterface } from '../../models/interfaces/file.interface';

export class UploadCommand {
  constructor(public readonly file:fileInterface) {}
}
