import React, {ChangeEvent, FC, KeyboardEvent, memo, useState} from 'react';
import {Button, ButtonGroup, TextField} from '@mui/material';

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
    <ButtonGroup size="small"
                 aria-label="small button group" fullWidth sx={{gap: '10px'}}>
      <TextField variant="outlined"
                 fullWidth
                 size={'small'}
                 disabled={disabled}
                 error={!!error}
                 value={title}
                 onChange={onChangeHandler}
                 onKeyPress={onKeyPressHandler}
                 label="Add task"
                 helperText={error}
      />
      <Button color="primary"
              fullWidth={false}
              onClick={addItemHandler}
              disabled={disabled}>
        Add
      </Button>
    </ButtonGroup>

  </div>
})