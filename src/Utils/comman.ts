import { DataSource } from "../model";

export function getTodoViewData(data: DataSource, index: number) {
  if (index >= 0 && data?.length > 0) {
    return data[index] ?? [];
  }
  return [];
}
