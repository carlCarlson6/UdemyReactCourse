import Project from '../models/Project';
import Task from '../models/Task';

export const mockProjects = [new Project('proyecto 1', 1), new Project('proyecto 2', 2), new Project('proyecto 3', 3)]
export const mockProjectTasks = [new Task("tarea 1", true, 1), new Task("tarea 2", false, 2), new Task("tarea 3", false,3), new Task("tarea 4", true, 4)]
