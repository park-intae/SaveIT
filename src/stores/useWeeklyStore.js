import {create} from 'zustand';
// import axios from 'axios';
import weeklyRecords from '../data/WeeklyRecords';

const useWeeklyStore = create((set) => ({
    weeklyRecords: [],
    isLoading: false,
    error: null,

    fetchWeeklyRecords: async () => {
        set({ isLoading: true, error: null});

        try{
            // 일단 목업 데이터로 사용
            await new Promise ((r)=>setTimeout(r,500)); //데이터 지연 시뮬
            set({weeklyRecords: weeklyRecords, isLoading:false});
            
            // 백 준비되면 위 코드 지우고 아래 코드 사용
            // api 주소 여기에 넣으면 됨
            // const response = await axios.get('exampleAPI URL');
            // set({weeklyRecords:response.data, isLoading:false});

        }catch (error){
            const errorMessage = error.response?.data?.message || error.message || '알수없는 오류';
            set({error:errorMessage, isLoading:false});
        }
    }
}));

export default useWeeklyStore;