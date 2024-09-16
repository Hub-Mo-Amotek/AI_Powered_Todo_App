// assets/js/components/TodoList.js
import React, { useState, useEffect, useRef } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CustomModal from './Modal';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import AITodoGenerator from './AITodoGenerator';
import ClipLoader from 'react-spinners/ClipLoader';

const TodoList = ({ room, onTodoUpdate }) => {
    const [todos, setTodos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [todoForm, setTodoForm] = useState({ title: '', description: '', status: false });
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [confettiPieces, setConfettiPieces] = useState(0);
    const { width, height } = useWindowSize();
    const prevAllCompleted = useRef(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`/api/todos?room_id=${room.id}`)
            .then(response => response.json())
            .then(data => setTodos(data));
    }, [room]);

    useEffect(() => {
        const allTodosCompleted = todos.length > 0 && todos.every(todo => todo.status);

        if (allTodosCompleted && !prevAllCompleted.current) {
            setConfettiPieces(200);
            setTimeout(() => {
                const interval = setInterval(() => {
                    setConfettiPieces(prev => {
                        if (prev <= 0) {
                            clearInterval(interval);
                            return 0;
                        }
                        return prev - 10;
                    });
                }, 100);
            }, 3000);
        }

        prevAllCompleted.current = allTodosCompleted;
    }, [todos]);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsEditing(false);
        setTodoForm({ title: '', description: '', status: false });
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setTodoForm({ ...todoForm, [name]: value });
    };

    const handleSaveTodo = () => {
        const method = isEditing ? 'PUT' : 'POST';
        const url = isEditing ? `/api/todos/${selectedTodo.id}` : '/api/todos';

        let newTodo = { ...todoForm, room_id: room.id };

        if (!isEditing) {
            const maxOrder = todos.reduce((max, todo) => (todo.order > max ? todo.order : max), -1);
            newTodo.order = maxOrder + 1;
        }

        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo)
        })
            .then(response => response.json())
            .then(data => {
                if (isEditing) {
                    setTodos(todos.map(t => (t.id === data.id ? data : t)));
                } else {
                    setTodos([...todos, data]);
                }
                handleCloseModal();
                onTodoUpdate();
            });
    };

    const handleEditTodo = (todo) => {
        setSelectedTodo(todo);
        setTodoForm(todo);
        setIsEditing(true);
        handleShowModal();
    };

    const handleDeleteTodo = (todoId) => {
        fetch(`/api/todos/${todoId}`, { method: 'DELETE' })
            .then(() => {
                setTodos(todos.filter(t => t.id !== todoId));
                onTodoUpdate();
            });
    };

    const handleTodoClick = (todo) => {
        const updatedTodo = { ...todo, status: !todo.status };
        fetch(`/api/todos/${todo.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTodo)
        })
            .then(response => response.json())
            .then(data => {
                setTodos(todos.map(t => t.id === data.id ? data : t));
                onTodoUpdate();
            });
    };

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(todos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTodos(items);

        fetch('/api/todos/update-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items.map((todo, index) => ({ id: todo.id, order: index })))
        })
        .then(response => response.json())
        .then(data => {
            console.log('Order updated:', data);
        })
        .catch(error => console.error('Error updating order:', error));
    };

    const calculateProgress = () => {
        const totalTodos = todos.length;
        const completedTodos = todos.filter(todo => todo.status).length;
        return (totalTodos === 0) ? 0 : (completedTodos / totalTodos) * 100;
    };

    const handleTodosGenerated = (generatedTodos) => {
        setTodos((prevTodos) => [...prevTodos, ...generatedTodos]);
        setLoading(false);
    };

    return (
        <div>
            {confettiPieces > 0 && <Confetti width={width} height={height} numberOfPieces={confettiPieces} />}
            <div className='d-flex justify-content-between'>
                <h2>{room.name}</h2>
                <div className="d-flex align-items-center justify-content-around">
                    <Button onClick={handleShowModal} style={{ width: '200%', marginRight: '3px',  }}>
                        <FaPlus /> To Do
                    </Button>
                    <AITodoGenerator roomId={room.id} onTodosGenerated={handleTodosGenerated} setGlobalLoading={setLoading} className="m-1"/>
                </div>
            </div>

            <div className="mt-3">
                <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                            width: `${calculateProgress()}%`,
                            transition: 'width 0.5s ease',
                            backgroundColor: prevAllCompleted.current ? 'green' : 'blue'
                        }}
                        aria-valuenow={calculateProgress()}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
            </div>

            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="todos">
                    {(provided) => (
                        <div className="card-columns mt-5" {...provided.droppableProps} ref={provided.innerRef}>
                            {todos.map((todo, index) => (
                                <Draggable key={todo.id} draggableId={String(todo.id)} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`card-todo mb-3 ${todo.status ? 'done' : ''}`}
                                        >
                                            <Card.Body>
                                                <Card.Title>{todo.title}</Card.Title>
                                                <Card.Text>{todo.description}</Card.Text>
                                                <div className="status-badge">
                                                    {todo.status ? <span className="badge bg-success">Done</span> : <span className="badge bg-secondary">Not done</span>}
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <Button variant={todo.status ? 'secondary' : 'success'} onClick={() => handleTodoClick(todo)} className="mr-2 m-1">
                                                            {todo.status ? <FaTimes /> : <FaCheck />}
                                                        </Button>
                                                    </div>
                                                    <div>
                                                        <Button variant="primary" onClick={() => handleEditTodo(todo)} className="mr-2 m-1">
                                                            <FaEdit />
                                                        </Button>
                                                        <Button variant="danger" onClick={() => handleDeleteTodo(todo.id)} className="mr-2 m-1">
                                                            <FaTrash />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <CustomModal
                show={showModal}
                handleClose={handleCloseModal}
                title={isEditing ? 'Edit Todo' : 'Add Todo'}
                handleSave={handleSaveTodo}>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={todoForm.title}
                            onChange={handleFormChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            value={todoForm.description}
                            onChange={handleFormChange}
                        />
                    </Form.Group>
                </Form>
            </CustomModal>
            {loading && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '1000'
                }}>
                    <ClipLoader color="#0000FF" size={50} />
                </div>
            )}
        </div>
    );
};

export default TodoList;
