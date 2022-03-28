const users =[
    {id: 1, name: 'Tamires', email: 'rtamires@gmail.com', cashback: '200'},
    {id: 2, name: 'gerson', email: 'rgerson@gmail.com', cashback: '100'},
]; 

module.exports = {
    Query: {
        users: () => users, 
        user: () => users[0]
    }, 

    Mutation: {
        createUser: () => users[0]
    },
};