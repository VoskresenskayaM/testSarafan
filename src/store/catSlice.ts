import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';

export type Cat = {
    breeds: string[];
    id: string;
    url: string;
    width: number;
    height: number;
    isLike?: boolean;
}
  
type CatsState = {
    list: Cat[];
    loading: boolean;
    error: string | null;
    isOpen: boolean;
    selectedCard?:Cat;
  }

export const fetchCats = createAsyncThunk<Cat[], undefined, {rejectValue: string}>(
    'cats/fetchCat',
    async function(_, {rejectWithValue}) {
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
            if (!response.ok) {
                return rejectWithValue('Server Error!');
            }
            const data = await response.json();
            return data;
    }
);

const initialState: CatsState={
    list: [],
    loading: false,
    error: null,
    isOpen: false
}

const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        likeCats(state, action: PayloadAction<string>){
            const toggledLike = state.list.find(cat => cat.id === action.payload);
            if(!toggledLike) return
            if (!toggledLike.hasOwnProperty('isLike')) {
                toggledLike['isLike'] = true;
              }
              else{
                toggledLike.isLike = !toggledLike.isLike;
              }
        },
        deleteCat(state, action: PayloadAction<string>){
            state.list = state.list.filter(cat => cat.id !== action.payload);
        },
        showCard(){},
        showLikeCard(state){
            state.list = state.list.filter(cat => cat.isLike === true);
        },
        onClose(state){
            state.isOpen=false;
            console.log(state.selectedCard)
        },
        cardClik(state,  action: PayloadAction<string>){
            state.isOpen=true;
            state.selectedCard = state.list.find(cat => cat.id === action.payload);
            console.log(state.selectedCard)
        },

    },
    extraReducers:(bilder) =>{
        bilder
        .addCase(fetchCats.pending,(state, action)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCats.fulfilled,(state, action)=>{
            state.list = action.payload;
            state.loading = false;
        })
        .addMatcher(isError, (state, action: PayloadAction<string>)=>{
            state.error = action.payload;
            state.loading = false;
        })
    } 
})
export const { deleteCat, likeCats, showLikeCard, onClose, cardClik } = catsSlice.actions;
export default catsSlice.reducer;

function isError(action: AnyAction) {
    return action.type.endsWith('rejected');
  }
