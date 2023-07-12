import React, {ChangeEvent, FC, KeyboardEvent, memo, useState} from 'react';
import { IconButton, TextField } from '@mui/material';
import { AddBox } from '@mui/icons-material';
// import {RejectValueType} from 'common/utils/create-app-async-thunk';

type Props = {
  addItem?: (title: string) => Promise<any>
  disabled?: boolean
}

export const AddTaskItemForm: FC<Props> = memo( ({addItem, disabled = false}: Props) => {

  let [title, setTitle] = useState('')
  let [error, setError] = useState<string | null>(null)

  const addItemHandler = () => {
    if (title.trim() !== '') {
      addItem && addItem(title)
          setTitle('');
    } else {
      setError('Title is required');
    }
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (error !== null) {
      setError(null);
    }
    if (e.charCode === 13) {
      addItemHandler();
    }
  }

  return <div>
    <TextField variant="outlined"
               disabled={disabled}
               error={!!error}
               value={title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
               label="Add task"
               helperText={error}
    />
    <IconButton color="primary" onClick={addItemHandler} disabled={disabled}>
      <AddBox/>
    </IconButton>
  </div>
})