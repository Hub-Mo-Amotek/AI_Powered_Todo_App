import React, { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { BsStars } from "react-icons/bs";
import ClipLoader from 'react-spinners/ClipLoader';

const AITodoGenerator = ({ roomId, onTodosGenerated, setGlobalLoading }) => {
    const [prompt, setPrompt] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        if (prompt.trim() === '') return;

        setLoading(true);
        setGlobalLoading(true);
        setShowInput(false);

        try {
            const response = await fetch('/api/generate-todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt, room_id: roomId }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error);
            }

            const data = await response.json();
            onTodosGenerated(data.todos);
            setPrompt('');
        } catch (error) {
            console.error('Error generating todos:', error.message);
        } finally {
            setLoading(false);
            setGlobalLoading(false);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleGenerate();
        }
    };

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <Button variant="secondary" onClick={() => setShowInput(!showInput)}>
                <BsStars />
            </Button>
            {showInput && (
                <InputGroup style={{ position: 'fixed', top: '75px', left: '55%', transform: 'translateX(-50%)', width: '50%' }}>
                    <FormControl
                        style={{ width: '100%', color: '#D3D3D3', backgroundColor: '#343a40', borderColor: '#495057' }}  
                        placeholder="Ask AI to create some todos about a topic..."
                        aria-label="AI Prompt"
                        aria-describedby="basic-addon2"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="ai-todo-input"
                    />
                </InputGroup>
            )}
        </div>
    );
};

export default AITodoGenerator;
