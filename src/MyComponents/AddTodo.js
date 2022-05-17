import React from 'react'

export const AddTodo = () => {
  return (
    <div className='container'>
        <h3 className='text-center'>
            Add TodoItem
        </h3>
        <form >
    <div class="mb-3">
      <label for="exampleInputEmail1" className="form-label">Todo Title</label>
      <input type="text" className="form-control" id="title" aria-describedby="emailHelp" />
      
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <input type="text" class="form-control" id="description" />
    </div>
   
    <button type="submit" class="btn btn-sm btn-success">Add Todo</button>
  </form>
  </div>
  )
}
