const Book = require('../models/Book');

module.exports = {
  getIndex: function (req, res) {
    Book
      .find({})
      .then((books) =>{
        console.log(books);

        return res.render('index',{books});
      })    
  },
  getCreate: function (req, res) {
    res.render('create'); 
  },
  postCreate: function (req, res) {
    Book
      .create(req.body)
      .then(()=>{
        console.log(req.body);

        return res.redirect('/');
      })
      .catch((err)=>console.log(err))    
  },
  getEdit: function (req, res) {
    const id=req.params.id;
    
    Book
     .findById(id)
     .then((book)=>{
       
      return res.render('edit',{book});
     })    
  },
  postEdit: function (req, res) {
    const id=req.params.id;
    const updatedBook=req.body;

    Book
      .findByIdAndUpdate(id,updatedBook)
      .then((book)=>{
        book.title=req.body.title;
        book.author=req.body.author;
        book.price=req.body.price;

        return res.redirect('/');
      }) 
  },
  getDelete: function (req, res) {
    const id=req.params.id;
    
    Book
     .findById(id)
     .then((book)=>{
       
      return res.render('delete',{book});
     }) 
  },
  postDelete: function (req, res) {
    const id=req.params.id;

    Book
     .findByIdAndRemove(id)
     .then(()=>{
       return res.redirect('/');
     })
  }
};