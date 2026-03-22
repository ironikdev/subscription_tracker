import {getUsers,getUser} from '../controllers/user.controller.js';
import {Router} from 'Express';
import authorize from '../middlewares/auth.middleware.js';
const userRouter =  Router();
userRouter.get('/',getUsers);

userRouter.get('/:id',authorize,getUser);

userRouter.post('/',(req,res)=>{
    res.send({title:'create new users'});
});
userRouter.put('/:id',(req,res)=>{
    res.send({title:'update user'});
});
userRouter.delete('/:id',(req,res)=>{
    res.send({title:'Delete user'});
});
export default userRouter;