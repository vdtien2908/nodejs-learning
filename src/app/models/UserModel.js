import BaseModel from './BaseModel';

class UserModel extends BaseModel {
    constructor() {
        super();
        this.tableName = 'users';
    }
}

export default new UserModel();
