import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../constants/normalazid-mock";

const initialState = {
  ids: normalizedUsers.map(({ id }) => id),
  entities: normalizedUsers.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {})
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  selectors: {
    selectUsersIds: (state) => state.ids,
    selectUserById: (state, id) => state.entities[id],
  }
})

export const { selectUsersIds, selectUserById } = usersSlice.selectors;