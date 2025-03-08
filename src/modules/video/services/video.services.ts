
import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { VideoDto } from 'src/modules/video/dtos/video.dtos';
import { Video } from 'src/modules/video/interfaces/video.interfaces';
import { VIDEO_MODEL } from 'src/constants';

@Injectable()
export class VideoService {
  constructor(
    @Inject(VIDEO_MODEL) private readonly model: Model<Video>
    ) {  }

  async create(createVideoDto: VideoDto): Promise<Video> {
    const createdVideo = new this.model(createVideoDto);
    return await createdVideo.save();
  }

  async update(id: string, updateVideoDto: VideoDto): Promise<Video | null> {
    return await this.model.findOneAndUpdate({ _id: id }, updateVideoDto, { new: true });
  }

  async findByName(name: string): Promise<Video| null> {
    return await this.model.findOne({ name: name }).exec();
  }

  async findById(id: string): Promise<Video| null> {
    return await this.model.findById(id).exec();
  }

  async findAllPaginated(page: number, limit: number, isPrivate: boolean) : Promise<Video[]> {
    return await this.model
        .find({ isPrivate: isPrivate }, {}, {skip: (page-1) * limit, limit: limit})
        .sort('name')
        .exec();
  }
}
