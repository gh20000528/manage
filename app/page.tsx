import axios from 'axios';
import Board from './components/board';

const getAllUser = async () => {
  const req = await axios.get('http://localhost:3000/api/user/getAllUser')
  
  return req.data
}


export default async function Home() {  
  const userData = await getAllUser()
  console.log(userData);
  
  return (
    <Board>
      <div>

      </div>
    </Board>
  );
}
