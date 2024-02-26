import Image from "next/image";
import axios from 'axios';
import SideBar from "./components/sidebar";
import Board from './components/board';

const getAllUser = async () => {
  const req = await axios.get('http://localhost:3000/api/user/getAllUser')
  
  return req.data
}


export default async function Home() {  
  const userData = await getAllUser()
  console.log(userData);
  
  return (
    <div className="">
      
    </div>
  );
}
