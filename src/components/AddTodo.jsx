"use client"
import { useState } from "react";
import "../../src/app/globals.css"
const Home = () => {


    const [todo, setTodo] = useState({ title: "", desc: "" })

    const addTodo = () => {
        let todos = localStorage.getItem("todos")
        if (todos) {
            let todosJson = JSON.parse(todos)
            if (todosJson.filter(value => { return value.title == todo.title }).length > 0) {
                alert("Todo with this title already exists")
            }
            else {
                todosJson.push(todo)
                localStorage.setItem("todos", JSON.stringify(todosJson))
                alert("Todo has been added")
                setTodo({ title: "", desc: "" })
            }
        }
        else {
            localStorage.setItem("todos", JSON.stringify([todo]))
        }
    }

    const onChange = (e) => {

        setTodo({ ...todo, [e.target.name]: e.target.value })
        console.log(todo)
    }
    return (
        <div className='container '>
            <div className="my-2 text-3xl">
                <section class="text-gray-600 body-font">
                    <div class="px-5 py-24  flex flex-wrap items-center mx-auto">

                        <div class=" mx-auto  bg-gray-100 rounded-lg p-8 flex items-center w-[70%]  flex-col   mt-10 md:mt-0  ">
                            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Add a Todo</h2>
                            <div class="relative mb-4">
                                <label for="title" class="leading-7 text-sm text-gray-600">Todo Title</label>
                                <input onChange={onChange} required value={todo.title} type="text" id="title" name="title" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-4">
                                <label for="desc" class="leading-7 text-sm text-gray-600">Todo Text</label>
                                <input onChange={onChange} value={todo.desc} required type="text" id="desc" name="desc" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button onClick={addTodo} class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none w-fit hover:bg-indigo-600 rounded text-lg">Add Todo</button>
                            <p class="text-xs text-gray-500 mt-3">Literally you probably  heard of them jean shorts.</p>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Home;