import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export const ProductsPage = () => {
    const { id } = useParams()
    const [params] = useSearchParams()

    const navigate = useNavigate()

    const onLogout = () => {
        navigate('/login', {
            replace: true
        })
    }
    return (
        <div>
            Products Page {id} {params.get('sort')}
            <button onClick={() => onLogout()}>Logout</button>
        </div>
    )
}
