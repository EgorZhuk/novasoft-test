export type TaskType = {
  id: string
  title: string
  status: boolean
}
export type UpdateTaskModelType = {
  title?: string
  status?: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed';