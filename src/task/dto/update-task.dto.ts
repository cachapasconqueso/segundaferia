// Permite actualizar cualquier campo de la tarea, incluyendo "completed"
// PartialType hace que todos los campos sean opcionales (?)
import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  completed?: boolean; // necesario para marcar/desmarcar tareas
}
