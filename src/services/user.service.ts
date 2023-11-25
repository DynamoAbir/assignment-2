import { IUser } from "../interfaces/user.interface";
import MUser from "../models/user.model";

const createUser = async (userData: IUser): Promise<IUser> => {
  const result = await MUser.create(userData);
  return result;
};
const getAllUsers = async (): Promise<IUser[]> => {
  const result = await MUser.find(
    {},
    { username: 1, fullName: 1, age: 1, email: 1, address: 1 }
  );
  return result;
};
const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await MUser.findById(id);
  return result;
};

const updateSingleUser = async (
  id: string,
  userData: IUser
): Promise<IUser | null> => {
  const result = await MUser.findByIdAndUpdate(id, userData, {
    runValidators: true,
  });
  return result;
};
const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await MUser.findByIdAndDelete(id);
  return result;
};
export const userServices = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteUser,
};
