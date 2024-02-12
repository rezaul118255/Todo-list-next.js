"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const MyTodo = () => {
    const [todos, setTodos] = useState([])
    console.log(todos)
    useEffect(() => {
        let todos = localStorage.getItem("todos")
        setTodos(JSON.parse(todos))

    }, [])



    const deleteTodo = (title) => {
        let newTodos = todos.filter(item => {
            return item.title != title
        })
        localStorage.setItem("todos", JSON.stringify(newTodos))
        setTodos(newTodos)
    }

    const editTodo = (first) => { second }



    return (
        <div>



            <div className='block'>
                <div className="">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name </th>
                                <th>Todo Title </th>
                                <th>Description</th>
                                <th>Edit</th>
                                <th>Delit</th>

                            </tr>
                        </thead>

                        <tbody>
                            {todos.map((item, index) => (
                                <tr key={index} className="bg-base-200">
                                    <th>{index + 1}</th>
                                    <td>{item?.title || 'N/A'}</td>
                                    <td>{item?.desc || 'N/A'}</td>
                                    <td>

                                        <Link className='text-4xl ' href={`/edit/${item.title}`}>
                                            <FaEdit />
                                        </Link>




                                    </td>
                                    <td>
                                        <button onClick={() => { deleteTodo(item.title) }} className='text-4xl text-red-600'>
                                            <MdDeleteForever />
                                        </button>


                                    </td>
                                </tr>
                            ))}
                        </tbody>




                    </table>
                </div>

            </div>


        </div>
    );
};

export default MyTodo;