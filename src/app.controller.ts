import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  listAll(): Promise<any> {
    return this.prismaService.notification.findMany();
  }
}
