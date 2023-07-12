import React, {ChangeEvent, FC, memo, useState} from 'react';
import {IconButton, TextField} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

type Props = {
  value: string
  onChange: (newValue: string) => void
}

export const EditableTitle: FC<Props> = memo( ({value, onChange}: Props) => {
  let [editMode, setEditMode] = useState(false);
  let [title, setTitle] = useState(value);

  const activateEditMode = () => {
    setEditMode(true);
    setTitle(value);
  }
  const activateViewMode = () => {
    setEditMode(false);
    onChange(title);
  }
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  return editMode
    ?    <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} />
    :
      <span onDoubleClick={activateEditMode}>{value}
        <IconButton onClick={activateEditMode}>
        <EditIcon/>
      </IconButton>
      </span>



});
