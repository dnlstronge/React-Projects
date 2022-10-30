// container that holds all files in to-do
//import

import React from 'react';
import ToDo from './ToDo';
 
 
const ToDoList = ({toDoList}) => {
   return (
       <div>
           {toDoList.map(todo => {
               return (
                   <ToDo todo={todo} />
               )
           })}
       </div>
   );
};
 
export default ToDoList;