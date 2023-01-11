import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setToDo] = useState('');
  let [filters, setFilter] = useState('');

  function handleDeleteClick(id) {
    console.log('Deleted');
    const removeItem = toDos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos([...removeItem]);
  }

  return (  
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos, {id:Date.now(),text: toDo, status: false}])} className="fas fa-plus"></i>
      </div>


      <div className='filter'>
        <div onClick={() => { setFilter('all') }} className='box-3'>
          <div className='btn btn-three'>
            <span>All</span>
          </div>
        </div>
        <div onClick={() => { setFilter('completed') }} className='box-3'>
          <div className='btn btn-three'>
            <span>Completed</span>
          </div>
        </div>
        <div onClick={() => {
          setFilter('uncompleted');
          console.log(filters);
        }} className='box-3'>
          <div className='btn btn-three'>
            <span>Uncompleted</span>
          </div>
        </div>
      </div>




      <div className="todos">
        {toDos.map((value, index) => {
          if (filters === '' || filters === 'all') {
            return (
              <div className="todo" key={index}>
                <div className="left">
                  <input
                    onChange={(e) => {
                      setTodos(toDos.filter(obj => {
                        if (obj.id === value.id) {
                          obj.status = e.target.checked
                        }
                        return obj
                      }))
                    }}
                    checked={value.status}
                    value={value.status}
                    type="checkbox"
                    name=""
                    id=""
                    className="che" />
                  <p>{value.status === true ? <s>{value.text}</s> : value.text}</p>
                </div>
                <div className="right">
                  <i className='far fa-trash-alt delete' onClick={() => { handleDeleteClick(value.id) }}></i>
                </div>
              </div>)
          } else if (filters === 'completed' || filters === 'uncompleted') {
            const con = filters === 'completed' ? true : false;
            if (value.status === con) {
              return (
                <div className="todo" key={value.id}>
                  <div className="left">
                    <input
                      onChange={(e) => {
                        setTodos(toDos.filter(obj => {
                          if (obj.id === value.id) {
                            obj.status = e.target.checked
                          }
                          return obj
                        }))
                      }}
                      checked={value.status}
                      value={value.status}
                      type="checkbox"
                      name=""
                      id=""
                      className="che" />
                    <p>{value.status === true ? <s>{value.text}</s> : value.text}</p>
                  </div>
                  <div className="right">
                    <i className='far fa-trash-alt delete' onClick={() => { handleDeleteClick(value.id) }}></i>
                  </div>
                </div>)
            }
          }
          return null;
        })
        }
      </div>
    </div>
  );
}

export default App;
