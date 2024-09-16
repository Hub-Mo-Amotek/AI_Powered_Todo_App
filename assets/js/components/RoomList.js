import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TodoList from './TodoList';
import CustomModal from './Modal';

const RoomList = () => {
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [roomForm, setRoomForm] = useState({ name: '', description: '' });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetch('/api/rooms')
            .then(response => response.json())
            .then(data => {
                console.log('Rooms fetched:', data);
                setRooms(data);
            })
            .catch(error => console.error('Error fetching rooms:', error));
    }, []);

    const handleRoomClick = (room) => {
        console.log('Room clicked:', room);
        setSelectedRoom(room);
        ReactDOM.render(<TodoList room={room} onTodoUpdate={() => fetchRooms()} />, document.getElementById('todo-list-container'));
    };

    const fetchRooms = () => {
        fetch('/api/rooms')
            .then(response => response.json())
            .then(data => setRooms(data))
            .catch(error => console.error('Error fetching rooms:', error));
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setIsEditing(false);
        setRoomForm({ name: '', description: '' });
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setRoomForm({ ...roomForm, [name]: value });
    };

    const handleSaveRoom = () => {
        const method = isEditing ? 'PUT' : 'POST';
        const url = isEditing ? `/api/rooms/${selectedRoom?.id}` : '/api/rooms';

        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(roomForm)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Room saved:', data);
                if (isEditing) {
                    setRooms(rooms.map(r => (r.id === data.id ? data : r)));
                } else {
                    setRooms([...rooms, data]);
                }
                handleCloseModal();
            })
            .catch(error => console.error('Error saving room:', error));
    };

    const handleEditRoom = (room, e) => {
        e.stopPropagation();
        setSelectedRoom(room);
        setRoomForm(room);
        setIsEditing(true);
        handleShowModal();
    };

    const handleDeleteRoom = (roomId, e) => {
        e.stopPropagation();
        fetch(`/api/rooms/${roomId}`, { method: 'DELETE' })
            .then(() => {
                console.log('Room deleted:', roomId);
                setRooms(rooms.filter(r => r.id !== roomId));
                if (selectedRoom && selectedRoom.id === roomId) {
                    setSelectedRoom(null);
                }
            })
            .catch(error => console.error('Error deleting room:', error));
    };

    const calculateProgress = (room) => {
        const totalTodos = room.todos.length;
        const completedTodos = room.todos.filter(todo => todo.status).length;
        return (totalTodos === 0) ? 0 : (completedTodos / totalTodos) * 100;
    };

    const isAllTodosCompleted = (room) => {
        return room.todos.length > 0 && room.todos.every(todo => todo.status);
    };

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(rooms);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setRooms(items);

        fetch('/api/rooms/update-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items.map((room, index) => ({ id: room.id, order: index })))
        })
        .then(response => response.json())
        .then(data => {
            console.log('Order updated:', data);
        })
        .catch(error => console.error('Error updating order:', error));
    };

    return (
        <div>
            <div className='d-flex justify-content-around'>
                <h2>Rooms</h2>
                <Button onClick={handleShowModal}>
                    <FaPlus /> New Room
                </Button>
            </div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="rooms">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} className="mt-5 mb-3">
                            {rooms.map((room, index) => (
                                <Draggable key={room.id} draggableId={String(room.id)} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`col-md-12 mb-2`}
                                        >
                                            <div
                                                className={`card card-custom p-3 ${selectedRoom && selectedRoom.id === room.id ? 'selected-room' : ''} `}
                                                onClick={() => handleRoomClick(room)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <div className="d-flex justify-content-between">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <div className="ms-2 c-details">
                                                            <h6 className="mb-0">{room.name}</h6>
                                                            <span>{room.description}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <div className="progress">
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{ 
                                                                width: `${calculateProgress(room)}%`,
                                                                 transition: 'width 0.5s ease',
                                                                 backgroundColor: isAllTodosCompleted(room) ? 'green' : 'blue'
                                                              }}
                                                            aria-valuenow={calculateProgress(room)}
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
                                                    </div>
                                                    <div className="mt-3">
                                                        <span className="text1">
                                                            {room.todos.filter(todo => todo.status).length} Completed
                                                            <span className="text2"> of {room.todos.length} todos</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="mt-3 d-flex justify-content-end">
                                                    <Button
                                                        variant="primary"
                                                        onClick={(e) => handleEditRoom(room, e)}
                                                        className="mr-2 m-1"
                                                    >
                                                        <FaEdit />
                                                    </Button>
                                                    <Button
                                                        variant="danger"
                                                        onClick={(e) => handleDeleteRoom(room.id, e)}
                                                        className="mr-2 m-1"
                                                    >
                                                        <FaTrash />
                                                    </Button>
                                                </div>
                                            </div>
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
                title={isEditing ? 'Edit Room' : 'Add Room'}
                handleSave={handleSaveRoom}>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={roomForm.name}
                            onChange={handleFormChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            value={roomForm.description}
                            onChange={handleFormChange}/>
                    </Form.Group>
                </Form>
            </CustomModal>
        </div>
    );
};

export default RoomList;
