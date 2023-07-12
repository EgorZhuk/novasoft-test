import React, {FC} from 'react';
import {FilterValuesType, TaskType} from 'common/types/common.types';
import {Task} from 'features/tasks/Task';

type Props = {
  tasks: TaskType[]
}
export const TasksList: FC<Props> = ({tasks})=> {
  let tasksForTodolist = tasks

  // if (filter === 'active') {
  //   tasksForTodolist = tasks.filter(t => t.status === false)
  // }
  // if (filter === 'completed') {
  //   tasksForTodolist = tasks.filter(t => t.status === true)
  // }
  return (
    <div>
      {
        tasksForTodolist.map(t => <Task key={t.id} task={t}
        />)
      }
    </div>
  );
};