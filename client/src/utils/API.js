// Required module
import axios from "axios";

// Retrieves Google books
var API = {
    getBook: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },
    
   // Saves book to the DB
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData).then(result => result.data);
    },
    // Gets saved books from DB
    savedBooks: function () {
        return axios.get("/api/books").then(result => result.data);
    },

    // Gets book with the given ID
    // savedBook: function(id) {
    //     return axios.get("/api/books/" + id);
    // },

    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id).then(result => result.data);
    },
}

export default API;
