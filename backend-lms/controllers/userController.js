import User from '../models/userModel.js';

// Example function to create a user
const createUser = async () => {
    try {
        const newUser = new User({ name: 'John Doe', email: 'john@example.com' });
        await newUser.save();
        console.log('User saved successfully:', newUser);
    } catch (err) {
        console.error('Error saving user:', err);
    }
};

createUser();