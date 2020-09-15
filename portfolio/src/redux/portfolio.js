const initialState = {
    name: 'Alexander Whitt',
    knowlege: ['React','Redux','JavaScript','CSS','HTML', 'and more!'],
    cards: [
        {id: 1, name:'Clones', description: 'projects that are made to mirror well known websites', links: [], numberOfProjects: function() {return this.links.length}},
        {id: 2, name:'Redux', description: 'projects that focus on state managmet using redux',links: [], numberOfProjects: function() {return this.links.length}}, 
        {id: 3, name:'CSS', description: 'projects focused on aesthetics', links: [], numberOfProjects: function() {return this.links.length}}, 
        {id: 4, name:'Title', description: 'testy, tests that test tests, you test?', links: [], numberOfProjects: function() {return this.links.length}}, 
        {id: 5, name:'Title', description: 'testy, tests that test tests, you test?', links: [], numberOfProjects: function() {return this.links.length}}, 
        {id: 6, name:'Title', description: 'testy, tests that test tests, you test?', links: [], numberOfProjects: function() {return this.links.length}}, 
         ],
    color: 0
}

export const portfolioReducer = (state = initialState, action) => {
    switch(action){
        
        default:
            return state;
    }
}