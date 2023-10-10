import UserModel from '../../models/UserModel';

class UserController {
    // [GET] /user
    async index(req, res) {
        try {
            const users = await UserModel.getAll();
            res.render('pages/users/index', {
                title: 'Người dùng',
                users: users,
                page_name: 'user',
            });
        } catch (error) {
            console.log(error);
        }
    }

    // [GET] /user/create
    create(req, res) {
        res.render('pages/users/create', {
            title: 'Thêm người dùng',
            page_name: 'user',
        });
    }

    // [POST] /user/store
    async store(req, res) {
        const {
            full_name,
            email,
            sex,
            dob,
            phone,
            address,
            password,
            password_r,
        } = req.body;

        const data = {
            full_name,
            email,
            sex,
            dob,
            phone,
            address,
            password,
        };

        await UserModel.create(data);
        res.redirect('/user');
        try {
        } catch (error) {
            console.log(error);
        }
    }

    // [GET] /user/:id/edit
    async edit(req, res) {
        const id = req.params.id;
        try {
            const user = await UserModel.findById(id);
            console.log(user);
            res.render('pages/users/edit', {
                title: 'Cập nhật người dùng',
                user: user,
                page_name: 'user',
            });
        } catch (error) {
            console.log(error);
        }
    }

    // [POST] /user/:id/update
    async update(req, res) {
        const id = req.params.id;
        const { full_name, email, sex, phone, address } = req.body;

        const data = {};

        const user = await UserModel.findById(id);

        if (full_name != user.full_name) {
            data.full_name = full_name;
        }

        if (email != user.email) {
            data.email = email;
        }

        if (sex != user.sex) {
            data.sex = sex;
        }

        if (phone != user.phone) {
            data.phone = phone;
        }

        if (address != user.address) {
            data.address = address;
        }

        await UserModel.update(id, data);
        res.redirect('/user');
    }

    // [POST] /user/:id/delete
    async delete(req, res) {
        const id = req.params.id;
        await UserModel.delete(id);
        res.redirect('/user');
    }
}

export default new UserController();
