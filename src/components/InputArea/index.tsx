import { Item } from '../../types/Item';
import * as C from './style';

type Props = {
    onAdd: (newItem: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2022, 9, 16),
            category: 'food',
            title: 'Item de teste',
            value: 250.25
        };
        onAdd(newItem);
    }

    return (
        <C.Container>
            <form>
                <input type='date' name='date' />
                <select name='category'>
                    <option value='food'>Food</option>
                    <option value='rent'>Aluguel</option>
                    <option value='salary'>Salário</option>
                </select>
                <input type='text' placeholder='Título' name='title' />
                <input type='number' placeholder='Valor' name='value' />
                <button onClick={handleAddEvent}>Adicionar</button>
            </form>
        </C.Container>
    );
}