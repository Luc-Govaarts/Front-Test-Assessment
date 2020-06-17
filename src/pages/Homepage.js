import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import { selectFeedPages } from '../store/feed/selectors'
import { fetchHomepages } from '../store/feed/actions'
import PageCard from '../components/PageCard'

export default function HomePage() {
    const dispatch = useDispatch()
    const pages = useSelector(selectFeedPages)

    useEffect(() => {
        dispatch(fetchHomepages);
    }, [dispatch]);

    return <div>
                {pages.map(page => {
                    return  <div key={page.id}>   
                                <PageCard 
                                    id = {page.id}
                                    title={page.title}
                                    description={page.description}
                                    backgroundColor={page.backgroundColor}
                                    color={page.color}/>
                            </div>
                })}
            </div> 
}