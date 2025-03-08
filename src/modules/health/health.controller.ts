import { Controller, Get } from '@nestjs/common';
import mongoose from 'mongoose';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return ({status: mongoose.ConnectionStates[mongoose.connection.readyState]});
  }
}
