const MOCKED_RESULTS = [
    {
        title: 'item1',
        abstract: 'this is the abstract',
        type: 'Technical Paper',
        doi: 1234
    },
    {
        title: 'item2',
        abstract: 'this is the abstract 2',
        type: 'Technical Paper 2',
        doi: 4567
    },
    {
        title: 'item3',
        abstract: 'this is the abstract 3',
        type: 'Technical Paper 3',
        doi: 891011
    }
]
const MOCKED_FACETS = [
    {
        name: 'Content Type'
    }, 
    {
        name: 'Collections'
    }
]
const MOCKED_ITEM = {
    title: 'This is the item title',
    issn: 123456,
    doi: 456,
    type: 'Technical paper',
    sector: 'test sector',
    language: 'English',
    authors: [
        {
            name: 'Emmanuel Hidalgo',
            email: 'emmanuel.hidalgo@rivetlogic.com'
        },
        {
            name: 'Test Author',
            email: 'test.author@rivetlogic.com'
        }
    ]
}

export const fetchResults = (term) => {
    console.log(term);
    return {
        type: 'FETCH_RESULTS',
        payload: MOCKED_RESULTS
    }
}

export const fetchFacets = () => {
    return {
        type: 'FETCH_FACETS',
        payload: MOCKED_FACETS
    }
}

export const fetchResultItem = () => {
    return {
        type: 'FETCH_RESULT_ITEM',
        payload: MOCKED_ITEM
    }
}