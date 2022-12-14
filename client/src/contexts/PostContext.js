import React from 'react';
import { useParams } from 'react-router-dom';
import { useAsync } from '../hooks/useAsync';
import { getPost } from '../services/posts';

const Context = React.createContext()

export function PostProvider({ children }) {
    const { id } = useParams()
    const { loading, error, value: post } = useAsync(() => {
        getPost(id)
    }, [id])

    return (
        <Context.Provider value={{}}>
            {loading ? (
                <h1>Loading</h1>
            ) : error ? (
                <h1 className='error-msg'>{error}</h1>
            ) : (
                children
            )}
        </Context.Provider>
    )
}