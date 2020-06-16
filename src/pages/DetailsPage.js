import React from 'react'
import {useParams} from 'react-router-dom'
import { selectFeedPages, selectPagesLoading } from '../store/feed/selectors'
import {useSelector, useDispatch} from "react-redux";
import { fetchHomepages } from '../store/feed/actions'

export default function DetailsPage() {
    const dispatch = useDispatch()
    const userId = useParams()
    const pages = useSelector(selectFeedPages)
    
    console.log("LOG PAGES",pages)
    
    if (pages === []) {
        useEffect(() => {
            dispatch(fetchHomepages);
        }, [dispatch]); 
    } else {
        const thisPage = pages.userId
    }
    
    return (
        <div>
            
        </div>
    )
}
