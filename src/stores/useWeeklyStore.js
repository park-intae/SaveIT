import {create} from 'zustand';
// import axios from 'axios';
// import weeklyRecords from '../data/WeeklyRecords';
import { getExpense } from '../api/expense';
import { getSave } from '../api/save';

const useWeeklyStore = create((set) => ({
    // weeklyRecords: [],
    expenseData: [],
    saveData:[],
    isLoadingExpense: false,
    isLoadingSave: false,
    isLoading: false,
    error: null,
    
    fetchExpense: async (offset = 0) => {
    set({ isLoading: true, error: null});
        try {
        const data = await getExpense(offset); // API 호출
        set({ expenseData: data, isLoadingExpense: false, isLoading:false });
        } catch (error) {
        set({ error: error.message || "오류 발생", isLoadingExpense: false });
        }
    },

    fetchSave: async (offset = 0) => {
    set({ isLoading: true, error: null });
        try {
        const data = await getSave(offset); // API 호출
        set({ saveData: data, isLoadingSave: false, isLoading:false });
        } catch (error) {
        set({ error: error.message || "오류 발생", isLoadingSave: false });
        }
    },

}));

export default useWeeklyStore;