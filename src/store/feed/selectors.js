export function selectPagesLoading(state) {
    return state.feed.loading
}

export function selectFeedPages(state) {
    return state.feed.pages
}

export const selectHomePageById = (id) => (state) => state.feed.pages.find(hp => hp.id === id)

