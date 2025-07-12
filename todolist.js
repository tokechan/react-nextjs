import React, { useState } from 'react';

function TodoCheckbox() {
  //# タスクの状態を保存するための状態(useState)を作成してください。
  const [tasks, setTasks] = useState([
    { id: 1, text:'Learning', completed: false },
    { id: 2, text:'Leading', completed: false },
    { id: 3, text:'Writing', completed: false },
  ]);
  //# チェックボックスが変更されたときに呼ばれる関数を作成してください。
  const handleCheckbox = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed }: task ));
  };

  return (
    <div className="p-4">
      {tasks.map(task => (
        <label key={task.id} className="block">
         <input
           type="checkbox"
           checked={task.completed}
           onChange={() => handleCheckbox(task.id)}
           className="mr-2"
         />
        <span className={task.completed ? 'line-through' : '' }>{task.text}</span>
        </label>
      ))}
      {/* ここにチェックボックスとタスク名を表示するコードを記述してください */}
    </div>
  );
}

export default TodoCheckbox;