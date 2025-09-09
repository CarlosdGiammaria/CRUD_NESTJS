import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '@/tasks/entities/task.entity';
import { CreateTaskDto } from '@/tasks/dto/create-task.dto';
import { UpdateTaskDto } from '@/tasks/dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) { }

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find(); // SELECT * FROM task;
  }

  //👉 Busca una tarea por id. Si no existe lanza un error 404
  async findOne(id: number): Promise<Task> {
    const task = await this.tasksRepository.findOne({ where: { id } });
    if (!task) throw new NotFoundException(`Task ${id} not found`);
    return task;
  }
  // Crea una nueva tarea.
  create(dto: CreateTaskDto): Promise<Task> {
    const newTask = this.tasksRepository.create(dto);// Crea objeto
    return this.tasksRepository.save(newTask)// INSERT en DB
  }

  //Actualiza la tarea con los campos que reciba.
  async update(id: number, dto: UpdateTaskDto): Promise<Task> {
    await this.tasksRepository.update(id, dto);// UPDATE en DB
    return this.findOne(id);// Devuelve la tarea actualizada
  }
  //👉 Elimina una tarea.
  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id); // DELETE en DB
  }
}
