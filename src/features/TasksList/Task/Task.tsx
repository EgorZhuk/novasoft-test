import {TaskType} from 'common/types/common.types';
import {ChangeEvent, FC, memo} from 'react';
import {taskActions} from 'features/TasksList/tasks.reducer';
import {useActions} from 'common/hooks/useActions';
import {Checkbox, IconButton} from '@mui/material';
import {Delete} from '@mui/icons-material';
import {EditableTitle} from 'common/components/EditableTitile/EditableTitle';
import s from 'features/TasksList/Task/Task.module.css'

type Props = {
  task: TaskType
}
export const Task: FC<Props> = memo(({task}) => {
  const {removeTask, updateTask} = useActions(taskActions)

  const removeTaskHandler = ()=>{
    removeTask({id: task.id})}

  const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const status = e.currentTarget.checked
    updateTask({id:task.id, model: {status}})
  }

  const changeTitleHandler = (title: string)=> updateTask({id:task.id, model: {title}})

  return (
    <div key={task.id} style={{ alignItems: 'center', justifyContent: 'space-between', display: 'flex'}} className={task.status === true ? s.isDone : ''}>
     <div>
       <Checkbox
         checked={task.status === true}
         color="primary"
         onChange={changeStatusHandler}
       />
       <EditableTitle value={task.title} onChange={changeTitleHandler}/>
     </div>
      <IconButton onClick={removeTaskHandler}>
        <Delete/>
      </IconButton>
    </div>
  )
})