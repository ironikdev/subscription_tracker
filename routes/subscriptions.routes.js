import {Router} from 'express';
import {createSubscription, getUserSubscription} from "../controllers/subscription.controller.js";
const subscriptionsRouter = Router();
import authorize from "../middlewares/auth.middleware.js";
subscriptionsRouter.get('/',(req,res)=>res.send({title:'GET all subscriptions'}));

subscriptionsRouter.get('/:id',(req,res)=>res.send({title:'GET  subscription details'}));

subscriptionsRouter.post('/',authorize,createSubscription);

subscriptionsRouter.put('/:id',(req,res)=>res.send({title:'Update subscriptions'}));

subscriptionsRouter.delete('/:id',(req,res)=>res.send({title:'delete subscriptions'}));

subscriptionsRouter.get('/user/:id',authorize,getUserSubscription);

subscriptionsRouter.put('/:id/cancel',(req,res)=>res.send({title:'Cancel subscriptions'}));
subscriptionsRouter.get('/upcoming-renewls',(req,res)=>res.send({title:'Get upcoming subscriptions'}));
export default subscriptionsRouter;
