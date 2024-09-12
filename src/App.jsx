import { useState } from 'react';
import './App.css'

class User {
  constructor(age) {
    this.id = crypto.randomUUID();
    this.name = age;
    let dateTime = new Date().toISOString();
    const [date, time] = dateTime.split("T");
    this.date = date;
    this.time = time;
  }
}

class AgeValidator {
  static validateAge(age) {
    if (age >= 18) {
      return { message: 'Puedes ingresar al evento', color: 'green' };
    }
    if (age >= 12 && age < 18) {
      return { message: 'Puedes ingresar al evento con un adulto responsable', color: 'yellow' };
    }
    if (age < 12) {
      return { message: 'No puedes ingresar al evento', color: 'red' };
    }
    return { message: '', color: '' };
  }
}

function App() {
  const [age, setAge] = useState('');
  const [message, setMesage] = useState('');
  const [colorMessage, setColorMessage] = useState('');
  const [users, setUsers] = useState([]);

  const handleCheck = (e) => {
    e.preventDefault();
    const { message, color } = AgeValidator.validateAge(age);
    setMesage(message);
    setColorMessage(color);

    if (age >= 12) {
      const newUser = new User(age);
      setUsers((prevUser) => [...prevUser, newUser])
    }
  }

  console.log("users", users)

  return (
    <>
      <form onSubmit={handleCheck} className='checkForm'>
        <p className='title'>Event form</p>
        <div className='containerMessage'>
          <label style={{ "color": colorMessage }}>{message}</label>
        </div>
        <input
          type="text"
          className='inputAge'
          value={age}
          onChange={(e) => {
            const sanitizedAge = e.target.value.replace(/[^0-9]/g, '');
            setAge(sanitizedAge);
          }}
        />
        <button type='submit'>Verify</button>
      </form>
      {users.length > 0 && (
        <ul className='listCheck'>
          {users.map((user) => (
            <li key={user.id} style={{ borderColor: user.name >= 18 ? 'green' : 'yellow', borderStyle: 'solid', borderWidth: '2px' }}>
              <p className='item'><strong>ID:</strong> {user.id}</p>
              <p className='item'><strong>Edad:</strong> {user.name}</p>
              <p className='item'><strong>Fecha:</strong> {user.date}</p>
              <p className='item'><strong>Hora:</strong>{user.time}</p>

            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App
