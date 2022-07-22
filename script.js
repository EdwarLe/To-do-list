import { addTask } from "./componentes/addTask.js";
import { readTasks } from "./componentes/readTasks.js";
const btn = document.querySelector("[data-form-btn]");

btn.addEventListener("click", addTask);

readTasks();
