const initialState = {
    name: 'Alexander Whitt',
    knowlege: ['React','Redux','JavaScript','CSS','HTML', 'and more!'],
    cards: [
        {id: 1, name:'Title', description: 'testy, tests that test tests, you test?', numberOfProjects: 0},
        {id: 2, name:'Redux', description: 'projects that focus on state managmet using redux', numberOfProjects: 0}, 
        {id: 3, name:'CSS', description: 'projects focused on aesthetics', numberOfProjects: 0}, 
        {id: 4, name:'Title', description: 'testy, tests that test tests, you test?', numberOfProjects: 0}, 
        {id: 5, name:'Title', description: 'testy, tests that test tests, you test?', numberOfProjects: 0}, 
        {id: 6, name:'Title', description: 'testy, tests that test tests, you test?', numberOfProjects: 0}, 
         ],
    color: 0
}

export const portfolioReducer = (state = initialState, action) => {
    switch(action){
        
        default:
            return state;
    }
}