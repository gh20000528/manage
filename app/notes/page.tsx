"use client"

import dynamic from "next/dynamic";
import { useState } from "react";
import Board from "../components/board";
import Tiptap from '../components/tools/tiptap';

const Editor = dynamic(() => import("./editorinit"), {
    ssr: false,
});

export default function EditorPage() {
    //state to hold output data. we'll use this for rendering later
    const [data, setData] = useState();
    return (
        <Board>
            <div className="w-full h-full p-5">
                <Editor
                    data={data}
                    onChange={setData}
                    holder="editorjs-container"
                />
            </div>
        </Board>
    );
};