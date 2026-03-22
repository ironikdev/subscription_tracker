/*
import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req,res,next)=>{
    try{
        const subscription =await Subscription.create({
           ... req.body,
            user:req.user._id
        });
        res.status(201).json({success:true,data:subscription});

    }catch(error){
        next(error);
    }
}

export const getUserSubscription = async (req,res,next)=>{
    try{
        if(req.user.id !== req.params.id){
            const error = new Error("You are not the owner of this account");
            error.status=401;
            throw error;
        }

        const subscription = await subscription.find({user:req.params.id});

        res.status(200).json({Success: true,data: subscription});

    }catch(error){
        next(error);
    }
} */

import Subscription from "../models/subscription.model.js";
import {workflowClient} from "../config/upstash.js";

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id
        });

        console.log("✅ Subscription created:", subscription._id);

        console.log("🚀 Triggering workflow...");

        const workflowResponse=await workflowClient.trigger({
            url: `${process.env.SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body: {
                subscriptionId: subscription._id
            },

            headers: {
                "Content-Type": "application/json"
            }

        });
        console.log("✅ Workflow response:", workflowResponse);


        res.status(201).json({
            success: true,
            data: subscription,
            workflow: workflowResponse
        });

    } catch (error) {
        next(error);
    }
};

export const getUserSubscription = async (req, res, next) => {
    try {
        if (req.user._id.toString() !== req.params.id) {
            const error = new Error("You are not the owner of this account");
            error.status = 401;
            throw error;
        }

        const subscriptions = await Subscription.find({
            user: req.params.id
        });

        res.status(201).json({
            success: true,
            data: subscriptions
        });

    } catch (error) {
        next(error);
    }
};