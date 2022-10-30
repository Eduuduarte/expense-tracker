import { useEffect, useState } from 'react';
import { Item } from '../../types/Item';
import * as C from './style';

type Props = {
    onAdd: (newItem: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {
    const [dateTracker, setDateTracker] = useState('');
    const [categoryTracker, setCategoryTracker] = useState('');
    const [titleTracker, setTitleTracker] = useState('');
    const [valueTracker, setValueTracker] = useState(0);
    
    useEffect(() => {
        console.log(dateTracker);
    }, [dateTracker])

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(dateTracker),
            category: categoryTracker,
            title: titleTracker,
            value: valueTracker
        };
        onAdd(newItem);
        console.log('lista', onAdd);
    }

    return (
        <C.Container>
                <input type='date' name='date' onChange={e => setDateTracker(e.target.value)}/>
                <select name='category' onChange={e => setCategoryTracker(e.target.value)}>
                    <option value='food'>Food</option>
                    <option value='rent'>Aluguel</option>
                    <option value='salary'>Salário</option>
                </select>
                <input type='text' placeholder='Título' name='title' onChange={e => setTitleTracker(e.target.value)} />
                <input type='number' placeholder='Valor' name='value' onChange={e => setValueTracker(parseInt(e.target.value))}/>
                <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    );
}