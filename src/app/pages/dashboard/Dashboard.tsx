import { useCallback, useEffect, useState } from 'react'

import { ITarefa, TarefasService } from '../../shared/services/api/tarefas/TarefasService';
import { ApiException } from '../../shared/services/api/ApiException';



export const Dasboard = () => {
    const [list, setList] = useState<ITarefa[]>([])

    useEffect(() => {
        TarefasService.getAll()
            .then((result) =>  {
                if (result instanceof ApiException){
                    alert(result.message);
                } else {
                    setList(result)
                }
            })
    }, [])

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {

            if (e.currentTarget.value.trim().length === 0 ) return;
            
            const value = e.currentTarget.value;

            e.currentTarget.value = '';

            if (list.some((listItem) => listItem.title === value)) return;

            TarefasService.create({title: value, isCompleted: false })
                .then((result) => {
                    if (result instanceof ApiException){
                        alert(result.message);
                    } else {
                        setList((oldList) => {
                            return [...oldList, result]
                        })
                    }
                })
        }
    }, [list])

    const handleToggleComplete = useCallback ((id: number) => {
        const tarefaToUpdate = list.find((tarefa) => tarefa.id === id);
        if (!tarefaToUpdate) return;
        
        TarefasService.updateById(id.toString(), {
            ...tarefaToUpdate,
            isCompleted: !tarefaToUpdate.isCompleted,
        })
        .then((result) => {
            if(result instanceof ApiException) {
                alert(result.message)
            } else {
                setList(oldList => {
                    return oldList.map(oldlistItem => {
                        if (oldlistItem.id === id) return result
                        return oldlistItem
                    })
                })
            }}
        )}, [list])

    const handleDelete = useCallback((id: number) => {
        TarefasService.deleteById(id.toString())
        .then((result) => {
            if (result instanceof ApiException){
                alert(result.message)
            } else {
                setList(oldList => {
                    return oldList.filter((oldListItem) => oldListItem.id !== id)
                })
            }
        })
    }, [])

    return (
        <div>
            <p>Lista</p>
            
            <p>{list.filter((listItem) => listItem.isCompleted).length}</p>
            <input type="text" 
                onKeyDown={handleInputKeyDown}
            />

            <ul>
                {list.map((listItem) => {
                    return <li>
                        <input type="checkbox" 
                            checked={listItem.isCompleted}
                            onChange={() => {handleToggleComplete(listItem.id)}}
                        />
                        {listItem.title}
                        <input type="button"
                            value="Delete"
                            onClick={() => {handleDelete(listItem.id)}}
                        />
                        </li>
                })}
            </ul>

        </div>
    );
}