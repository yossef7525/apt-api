import { Auth } from '../classes/Auth.js';

export function login (req, res) {
        const auth = new Auth();
        const {UserName, Password} = req.body;
        const token = auth.loginUser(UserName, Password)
        token ? res.status(200).json(token) : res.status(403).json({message: 'access denide'});
      }