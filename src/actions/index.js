const MOCKED_RESULTS = [
    {
        title: 'Brake Guidance System for Commercial Vehicles with Coordinated Friction and Engine Brakes',
        abstract: 'Using friction brakes for long time can increase easily its temperature and lower vehicle brake performance in the downhill process. The drivers hysteretic perception to future driving condition could...',
        type: 'Technical Paper',
        doi: 'https://doi.org/10.4271/2017-01-2508'
    },
    {
        title: 'Study on Brake Durability Dynamometer Experimental Method for Brake NVH and Wear',
        abstract: 'A brake durability experimental method is proposed to simulate a brake durability vehicle road test. Brake judder and noise often occur in brake durability road testing. Brake judder is difficult to address because of...',
        type: 'Technical Paper',
        doi: 'https://doi.org/10.4271/2014-01-2520'
    },
    {
        title: 'Brake Pedal Feel Control Model',
        abstract: 'Customer perception of brake pedal feel quality, depends on both the customers subjective judgment of quality and the actual build quality of the brake system. The brake performance stability represents an important aspect of a vehicle performance and its quality of...',
        type: 'Technical Paper',
        doi: 'https://doi.org/10.4271/2015-01-2674'
    }
]
const MOCKED_FACETS = [
    {
        name: 'Content Type',
        checkboxes: [
            {
                name: 'Technical Paper'
            },
            {
                name: 'Journal Article'
            },
            {
                name: 'Ground Vehicle Standard'
            }
        ]
    }, 
    {
        name: 'Collections',
        checkboxes: [
            {
                name: 'Magazine Articles'
            },
            {
                name: 'Open Access'
            },
            {
                name: 'TBMG Articles'
            }
        ]
    }
]
const MOCKED_ITEM = {
    title: 'Brake Guidance System for Commercial Vehicles with Coordinated Friction and Engine Brakes',
    issn: '0148-7191',
    doi: 'https://doi.org/10.4271/2017-01-2508',
    type: 'Technical Paper',
    sector: ['Automotive', 'Commercial Vehicle	 '],
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