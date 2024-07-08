import type { ITodo } from '@/types'

export const FILTER_MAP = {
  ALL: () => true,
  ACTIVE: (task: ITodo) => !task.complete,
  COMPLETE: (task: ITodo) => task.complete,
}

export type filters = keyof typeof FILTER_MAP
