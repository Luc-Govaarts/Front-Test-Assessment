import React, { useEffect }from 'react'
import { useParams } from 'react-router-dom'
import { selectHomePageById } from '../store/feed/selectors'
import { useSelector, useDispatch } from "react-redux";
import { fetchHomepages } from '../store/feed/actions'
import DetailedPageCard from '../components/DetailedPageCard'
import Story from '../components/Story'

export default function DetailsPage() {
    const dispatch = useDispatch()
    const params = useParams()   
    const pageId = parseInt(params.id)
    const thisPage = useSelector(selectHomePageById(pageId))
    const stories = {...thisPage}.stories || []
    const sortedStories = stories.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt)
    });

    
    useEffect(() => {
        if (!thisPage || thisPage.lenght === 0) {
            dispatch(fetchHomepages)
            }
        dispatch(fetchHomepages);
    }, [dispatch]); 

    console.log("STORIES:", stories)
    
    if (!thisPage) {
        return <div>Loading</div>
    } else {
        return  <div>
                    <DetailedPageCard
                        key={thisPage.id}
                        backgroundColor={thisPage.backgroundColor}
                        color={thisPage.color}
                        title={thisPage.title}
                        description={thisPage.description}/>
                    <h2>Stories</h2>
                    <div> 
                        {sortedStories.map(story => {
                            return <Story
                                key={story.id} 
                                name={story.name}
                                content={story.content}
                                url={story.url}
                                createdAt={story.createdAt}/>
                        })}
                    </div> 
                </div>
    }
}