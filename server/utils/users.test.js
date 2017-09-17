const expect = require('expect');
const {Users} = require('./users');


describe('Users', () => {

    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Daniel',
            room: "Node"
        }, {
            id: '2',
            name: 'Marek',
            room: "React"
        }, {
            id: '3',
            name: 'Olek',
            room: "Node"
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: "123",
            name: "Daniel",
            room: "Room"
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for node room', () => {
        var userList = users.getUserList("Node");
        expect(userList).toEqual(["Daniel", "Olek"]);
    });
    
    it('should return names for node room', () => {
        var userList = users.getUserList("React");
        expect(userList).toEqual(["Marek"]);
    });

    it('should remove a user', () => {
        var userId = '2';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.getUserList('React')).toEqual([]);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userList = users.removeUser('8');
        expect(userList).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    
    });
     
    it('should not find any users', () => {
        var user = users.getUser('9');
        expect(user).toNotExist();
    
    });
});
