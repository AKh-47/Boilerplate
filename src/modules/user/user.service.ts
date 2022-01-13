import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(name: string, email: string, password: string) {
    const user = await new this.userModel({
      name,
      email,
      password,
    }).save();

    return user.id as string;
  }

  async findByEmail(email: string) {
    const user = await this.userModel.findOne({ email }).lean();
    return user;
  }
}
