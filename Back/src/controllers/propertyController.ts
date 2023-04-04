import express from 'express';
import * as propertyModel from '../db/property';

export const getAllProperties = async (req: express.Request, res: express.Response) => {
  try {
    const properties = await propertyModel.getProperties();
    return res.status(200).json(properties);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteProperty = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedProperty = await propertyModel.deletePropertyByID(id);
    return res.json(deletedProperty);

  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const getProperty = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const property = await propertyModel.getPropertyByID(id);
    return res.json(property);

  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const editProperty = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const values  = req.body;

    const editedProperty = await propertyModel.editProperty(id,values);
    return res.json(editedProperty);

  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const addProperty = async (req: express.Request, res: express.Response) => {
  try {
    const values = req.body;
    const addedProperty = await propertyModel.addProperty(values);
    return res.json(addedProperty);
    
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

// export const updateUser = async (req: express.Request, res: express.Response) => {
//   try {
//     const { id } = req.params;
//     const { username } = req.body;

//     if (!username) {
//       return res.sendStatus(400);
//     }

//     const user = await getUserById(id);
    
//     user.username = username;
//     await user.save();

//     return res.status(200).json(user).end();
//   } catch (error) {
//     console.log(error);
//     return res.sendStatus(400);
//   }
// }



