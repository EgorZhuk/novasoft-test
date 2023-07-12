import React, {FC} from 'react';
import {TaskType} from 'common/types/common.types';
import {Task} from 'features/TasksList/Task/Task';
import s from './TasksList.module.css'

type Props = {
  tasks: TaskType[]
}
export const TasksList: FC<Props> = ({tasks})=> {
  return (
    <div className={s.listContainer}>
        {
          tasks.map(t => <Task key={t.id} task={t}/>)
        }
    </div>
  );
};