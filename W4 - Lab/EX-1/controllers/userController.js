import {
    getAllUsersModel,
    getUserByIdModel,
    createUserModel,
    updateUserModel,
    deleteUserModel
} from '../models/userModel.js';


export const getAllUsers = (req, res) => {
    res.json(getAllUsersModel());
};

export const getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    const user = getUserByIdModel(id);

    if (!user) {
        return res.status(404).json({
            error: 'User not found'
        });
    }

    res.json(user);
};


export const createUser = (req, res) => {
    const { name, email } = req.body;

    const newUser = {
        id: Date.now(),
        name,
        email
    };

    const createdUser = createUserModel(newUser);

    res.status(201).json(createdUser);
};


export const updateUser = (req, res) => {
    const id = parseInt(req.params.id);

    const updatedUser = updateUserModel(id, req.body);

    if (!updatedUser) {
        return res.status(404).json({
            error: 'User not found'
        });
    }

    res.json(updatedUser);
};


export const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);

    const deleted = deleteUserModel(id);

    if (!deleted) {
        return res.status(404).json({
            error: 'User not found'
        });
    }

    res.status(204).send();
};