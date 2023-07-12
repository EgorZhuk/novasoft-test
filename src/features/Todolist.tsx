import React from 'react';
import {AddTaskItemForm} from 'common/components/AddTaskItemForm/AddTaskItemForm';
import {EditableSpan} from 'common/components/EditableTitile/EditableTitle';
import { useAppSelector} from 'common/hooks/useAppDispatch';
import {taskActions} from 'features/tasks/tasks.reducer';
import {useActions} from 'common/hooks/useActions';
import {selectTasks} from 'features/tasks/tasks.selector';
import {TasksList} from 'features/tasks/TasksList';

const Todolist = () => {
  const {addTask}  = useActions(taskActions)
  const tasks = useAppSelector(selectTasks)

  const addTaskCallback = (title: string) => {
    return addTask({title})
  }
  return (
    <div>
      <div>
        Todolist
      </div>
      <div>
        <AddTaskItemForm addItem={addTaskCallback}/>
      </div>
      <div>
       <TasksList tasks={tasks}/>
      </div>
    </div>
  );
};

export default Todolist;