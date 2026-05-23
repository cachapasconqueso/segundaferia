// src/task/task.service.ts
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaClient } from '@prisma/client';

// Instanciamos Prisma para conectarnos a la base de datos
const prisma = new PrismaClient();

@Injectable()
export class TaskService {
  
  // C - CREATE (Crear tarea)
  create(createTaskDto: CreateTaskDto) {
    return prisma.task.create({
      data: {
        title: createTaskDto.title,
        priority: createTaskDto.priority,
        // completed es false por defecto, así lo definimos en el schema
      },
    });
  }

  // R - READ (Leer todas las tareas)
  findAll() {
    return prisma.task.findMany();
  }

  // R - READ (Leer una sola tarea)
  findOne(id: number) {
    return prisma.task.findUnique({
      where: { id: id },
    });
  }

  // U - UPDATE (Actualizar tarea, ej: marcar como completada)
  update(id: number, updateTaskDto: UpdateTaskDto) {
    return prisma.task.update({
      where: { id: id },
      data: updateTaskDto,
    });
  }

  // D - DELETE (Borrar tarea)
  remove(id: number) {
    return prisma.task.delete({
      where: { id: id },
    });
  }
}