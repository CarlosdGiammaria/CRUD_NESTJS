import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

// El controlador expone los endpoints y llama al servicio.
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  //POST /tasks → crea una nueva tarea con lo que llega en el body.
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  //devuelve todas las tareas
  @Get()
  findAll() {
    return this.tasksService.findAll();
  }
  //busca una tarea por Id y +id lo convierte de string a numero
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);//actualiza solo la tarea con ese ID.
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id); //elimina la tarea
  }
}
