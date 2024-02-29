import { NextApiRequest, NextApiResponse } from 'next';
import bcryptjs from 'bcryptjs';
import User from '../../models/user';

export default async function signup (req: NextApiRequest, res: NextApiResponse) {  
    const { name, email, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ where: { email: email } });

      if (existingUser) {
        return res.status(404).json({ message: 'User already exists' })
      }
  
      const salt = bcryptjs.genSaltSync(10);
      const hashedPassword = bcryptjs.hashSync(password, salt);
  
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });
  
      res.status(200).json({ message: 'success' });
    } catch (err) {
      return console.log(err);
    }
};
  