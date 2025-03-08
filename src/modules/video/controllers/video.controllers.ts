import { BadRequestException, Body, Controller, Get, Post, Put, Query, Req } from "@nestjs/common";
import { VideoDto } from "../dtos/video.dtos";
import { VideoService } from "../services/video.services";
import { Request } from "express";

@Controller('v1/video')
export class VideoController {
    constructor(
        private readonly videoService: VideoService
    ){ }

    @Post('')
    async create(@Body() model: VideoDto){
        try{
            return await this.videoService.create(model);
        }catch(error){
            throw new BadRequestException(error);
        }
    }

    @Put('')
    async update(@Query('id') id: string, @Body() model: VideoDto){
        try{
            return await this.videoService.update(id, model);
        }catch(error){
            throw new BadRequestException(error);
        }
    }    

    @Get('')
    async GetByName(@Req() request: Request){
        try{
            if (request.query['name'] != undefined)
                return await this.videoService.findByName(request.query['name']?.toString() ?? "");
            else if (request.query['id'] != undefined)
                return await this.videoService.findById(request.query['id']?.toString() ?? "");
            throw ('No query params founded!')
        }catch(error){
            throw new BadRequestException(error);
        }
    }

    @Get('/paginated')
    async GetPaginated(
        @Req() request: Request,
        @Query('page') page: number, 
        @Query('limit') limit: number,
        @Query('isPrivate') isPrivate: boolean){

        if (request.query['page'] == undefined) 
            page = 1;
        if (request.query['limit'] == undefined || limit >= 500) 
            limit = 50;
        if (request.query['isPrivate'] == undefined) 
            isPrivate = true;        

        return await this.videoService.findAllPaginated(page, limit, isPrivate);
    }
}