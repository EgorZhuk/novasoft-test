import React from 'react';
import {AddTaskItemForm} from 'common/components/AddTaskItemForm/AddTaskItemForm';
import { useAppSelector} from 'common/hooks/useAppDispatch';
import {taskActions} from 'features/TasksList/tasks.reducer';
import {useActions} from 'common/hooks/useActions';
import {selectTasks} from 'features/TasksList/tasks.selector';
import {TasksList} from 'features/TasksList/TasksList';
import {Box, Container} from '@mui/material';
import TodolistTitle from 'features/TodolistTitle/TodolistTitle';

const Todolist = () => {
  const {addTask}  = useActions(taskActions)
  const tasks = useAppSelector(selectTasks)

  const addTaskCallback = (title: string) => {
    return addTask({title})
  }
  return (
    <div>
      <Container maxWidth="sm" >
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', padding: '2em' }}>
          <TodolistTitle/>
          <AddTaskItemForm addItem={addTaskCallback}/>
          <TasksList tasks={tasks}/>
        </Box>
      </Container>
    </div>
  );
};

export default Todolist;