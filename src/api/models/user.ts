import { Document, Schema, Model, model } from 'mongoose';
import { User } from '../interfaces/user';

export interface UserModel extends User, Document {
    fullname() : string;
}

export var UserSchema:Schema = new Schema({
    createdAt : {
        type: Date,
        default: new Date(),
    },
    email : String,
    firstName : String,
    lastName : String,
});

UserSchema.pre(`save`, (next) => {
    const now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

UserSchema.methods.fullName = function() : string {
    return(this.firstName.trim() + ` ` + this.lastName.trim());
};

export const UserModel:Model<UserModel> = model<UserModel>(`User`, UserSchema, `HuggieUseer`);
