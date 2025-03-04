import {create} from 'zustand';

export const useStore = create((set,get)=>({
    cars:[],
    setStoreCars : (new_cars)=>set({cars:new_cars})
}));