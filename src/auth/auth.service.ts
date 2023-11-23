import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AuthService {
  constructor(private database: DatabaseService) {}

  signup() {
    return { msg: 'I have signed upp' };
  }

  signin() {
    return { msg: 'I have signed inn' };
  }
}
