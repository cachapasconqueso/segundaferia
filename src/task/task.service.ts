// src/task/task.service.ts
// Lógica CRUD de tareas usando PrismaService inyectado por NestJS

import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TaskService {
  // NestJS inyecta PrismaService automáticamente aquí
  constructor(private prisma: PrismaService) {}

  // C - CREATE (Crear tarea)
  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: createTaskDto.title,
        priority: createTaskDto.priority,
        // completed es false por defecto según el schema
      },
    });
  }

  // R - READ (Leer todas las tareas)
  findAll() {
    return this.prisma.task.findMany({
      orderBy: { createdAt: 'desc' }, // más recientes primero
    });
  }

  // R - READ (Leer una sola tarea)
  findOne(id: number) {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  // U - UPDATE (Actualizar tarea: título, prioridad o completada)
  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  // D - DELETE (Borrar tarea)
  remove(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
