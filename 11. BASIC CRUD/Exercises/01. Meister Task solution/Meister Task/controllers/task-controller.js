const Task=require('../Models/Task')
module.exports = {
  getIndex: function (req, res) {
    Task  
      .find({})
      .then((allTasks)=>{
        const openTasks=allTasks.filter(t=>t.status==='Open');
        const inProgressTasks=allTasks.filter(t=>t.status==='In Progress');
        const finishedTasks=allTasks.filter(t=>t.status==='Finished');

        return res.render('index',{openTasks,inProgressTasks,finishedTasks});
      })
  },
  getCreate: function (req, res) {
    return res.render('create');
  },
  postCreate: function (req, res) {
    console.log(req.body);
    Task
      .create(req.body)
      .then((createdTask)=>{
        console.log(createdTask)
        return res.redirect('/');
      })
      .catch((err)=>console.log(err))    
  },
  getEdit: function (req, res) {
    const id=req.params.id;
    Task
      .findById(id)
      .then((task)=>{
        task.open=task.status==='Open';
        task.inProgress=task.status==='In Progress';
        task.finished=task.status==='Finished';
        return res.render('edit', {task})
      })
  },
  postEdit: function (req, res) {
    const id=req.params.id;
    const updatedTask=req.body;

    Task
      .findByIdAndUpdate(id,updatedTask)
      .then(()=>{
        res.redirect('/')
      })    
  },
  getDelete: function (req, res) {
    const id=req.params.id;
    Task
      .findById(id)
      .then((task)=>{
        task.open=task.status==='Open';
        task.inProgress=task.status==='In Progress';
        task.finished=task.status==='Finished';
        return res.render('delete', {task})
      })
  },
  postDelete: function (req, res) {
    const id=req.params.id;
    
    Task
      .findByIdAndRemove(id)
      .then(()=>{
        res.redirect('/')
      })
  }
};