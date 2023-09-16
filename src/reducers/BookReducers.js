import { createSlice } from "@reduxjs/toolkit";
import fantasy from "../data/fantasy.json"
import history from "../data/history.json"
import horror from "../data/horror.json"
import romance from "../data/romance.json"
import scifi from "../data/scifi.json"

const initialState = {
    books: {
        fantasy: fantasy,
        history: history,
        horror: horror,
        romance: romance,
        scifi: scifi
    },
    displayedBooks: fantasy
}

const booksSlice = createSlice({
    name: "books",
    initialState: initialState,
    /* reducers: {
        searchBooks: (state, action) => {
            const query = action.payload.toLowerCase()
            const totalBooks = 
        }

    }*/
})
