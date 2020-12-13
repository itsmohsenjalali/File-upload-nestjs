// import { Injectable } from '@nestjs/common';
// import {
//   MulterModuleOptions,
//   MulterOptionsFactory,
// } from '@nestjs/platform-express';
// import * as GridFsStorage from 'multer-gridfs-storage';
//
// @Injectable()
// export class FileUploadService implements MulterOptionsFactory {
//   gridFsStorage: GridFsStorage;
//   constructor() {
//     this.gridFsStorage = new GridFsStorage({
//       url: 'mongodb://localhost:27017/test',
//     });
//   }
//
//   createMulterOptions(): MulterModuleOptions {
//     return {
//       storage: this.gridFsStorage,
//     };
//   }
// }
