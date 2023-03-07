/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from 'express';
import * as ItemService from './items.service';
import { BaseItem, Item} from  './item.interface';
/**
 * Router Definition
 */
export const itemRouter  = express.Router();
/**
 * Controller Definitions
 */

// GET items
itemRouter.get('/items', (req:Request, res:Response)  => {
try{

} catch(e){
    res.status(500).send({message: e.message});
}
});
// GET items/:id


// POST items

// PUT items/:id

// DELETE items/:id