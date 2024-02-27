import { useState, useEffect } from "react";
import axios from 'axios';
import Modal from "../tools/modal";

export default function Auth() {
    const [login, isLogin] = useState(false)

    useEffect(() => {
    })
    
    return(
        <Modal>
            <div>
                <h1>登入</h1>
                <div>
                    <input type="text" />
                    <input type="text" />
                </div>
                <button>登入</button>


                
            </div>
        </Modal>
    )
}