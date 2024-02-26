import { NextApiRequest, NextApiResponse} from 'next';
import checkUserInput from '../../../utils/yup';
import bcryptjs from 'bcryptjs';
import User from '../../models/user';

export default async function login (req: NextApiRequest, res: NextApiResponse) {
    const { email, password } = req.body;

    
    try {
        const loggedInUser = await User.findOne({ where: { email: email } });
        if (!loggedInUser) {
            throw new Error('Invalid credentials, user does not exist.');
        }

        console.log(loggedInUser.dataValues.password);
        
    
        const checkPassword = bcryptjs.compareSync(password, loggedInUser.dataValues.password);
        if (!checkPassword) {
            throw new Error('Invalid credentials, please check your email and password.');
        }
    
        const { password: userPassword, ...others } = loggedInUser.dataValues;
  
        res.status(200).json({ message:'user login', user: others });
    } catch (err) {
      return console.log(err);
    }    
};