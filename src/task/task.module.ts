// src/task/task.module.ts
// Módulo de tareas: registra el controlador, el servicio y Prisma

import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TaskController],
  providers: [
    TaskService,
    PrismaService, // ← necesario para que la inyección en TaskService funcione
  ],
})
export class TaskModule {}
