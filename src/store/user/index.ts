import { createSlice } from '@reduxjs/toolkit';


interface ImSliceState {
  name: string;
}
const user = createSlice({
  name: 'user',
  initialState: {
    name: 'xiaoming'
  } as ImSliceState,
  reducers: {},
});
export default user