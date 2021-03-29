'use strict';

const {
    getList,
    addToDB,
    getOneDB,
    updateDB,
    sdeleteDB,
    getMultipleDB,
} = require('../models/haircut/haircut');

const list = async (req, res) => {
    try {
        const hcList = await getList();
        const successMsg = formatSuccess(hcList);
        send(res, successMsg, 200);
    } catch (error) {
        const errorMessage = formatError(error.message);
        send(res, errorMessage, 500);
    }
};

const handleIndividualAdd = async (req, res) => {
    try {
        const haircut = prepareIndividualAdd(req);
        const newHaircut = await addIndividualHaircut(haircut);
        send(res, newHaircut, 200);
    } catch (error) {
        const errorMessage = formatError(error.message);
        return errorMessage;
    }
};

const prepareIndividualAdd = req => {
    const { description, price } = req.body;
    try {
        const haircut = new Haircut(null, description, price);
        return haircut;
    } catch (error) {
        const errorMessage = formatError(error.message);
        return errorMessage;
    }
};

const addIndividualHaircut = async haircut => {
    try {
        const newHaircut = await addToDB(haircut);
        const successMsg = formatSuccess(newHaircut);
        return successMsg;
    } catch (error) {
        const errorMessage = formatError(error.message);
        return errorMessage;
    }
};

const handleMultipleAdd = async (req, res) => {
    try {
        const haircuts = prepareMultipleAdd(req);
        const haircutQuantity = haircuts.length;
        const newHaircuts = await addMultipleHaircuts(haircuts);
        send(res, newHaircuts, 200);
    } catch (error) {
        const errorMessage = formatError(error.message);
        return errorMessage;
    }
};

const prepareMultipleAdd = req => {
    const { haircuts } = req.body;
    try {
        const newHaircuts = haircuts.map(element => {
            const { description, price } = element;
            const haircut = new Haircut(null, description, price);
            return haircut;
        });
        return newHaircuts;
    } catch (error) {
        const errorMessage = formatError(error.message);
        return errorMessage;
    }
};

const addMultipleHaircuts = async haircuts => {
    try {
        const newHaircuts = [];
        for (const haircut of haircuts) {
            const newHaircut = await addToDB(haircut);
            newHaircuts.push(newHaircut);
        }
        const successMsg = formatSuccess(newHaircuts);
        return successMsg;
    } catch (error) {
        const errorMessage = formatError(error.message);
        return errorMessage;
    }
};

const selectOne = async (req, res) => {
    const { id } = req.params;

    try {
        const haircut = await getOneDB(id);
        const isEmpty = haircut === null;
        if (isEmpty) {
            throw new Error(`Haircut with number ${id} do not exist`);
        }
        const successMsg = formatSuccess(haircut);
        send(res, successMsg, 200);
    } catch (error) {
        const errorMessage = formatError(error.message);
        send(res, errorMessage, 500);
    }
};

const selectMultiple = async (req, res) => {
    const { haircutsIds } = req.body;
    try {
        const editableHaircuts = await getMultipleDB(haircutsIds);
        const successMsg = formatSuccess(editableHaircuts);
        send(res, successMsg, 200);
    } catch (error) {
        const errorMessage = formatError(error.message);
        send(res, errorMessage, 500);
    }
};

const handleMultipleEdits = async (req, res) => {
    const { haircuts } = req.body;
    try {
        for (const haircut of haircuts) {
            await updateDB(haircut);
        }
        const successMsg = formatSuccess(haircuts);
        send(res, successMsg, 200);
    } catch (error) {
        const errorMessage = formatError(error.message);
        send(res, errorMessage, 500);
    }
};

const update = async (req, res) => {
    const { id } = req.params;
    const { description, price } = req.body;
    try {
        const haircut = new Haircut(id, description, price);
        const updatedHaircut = await updateDB(haircut);
        const successMsg = formatSuccess(haircut);
        send(res, successMsg, 200);
    } catch (error) {
        const errorMessage = formatError(error.message);
        send(res, errorMessage, 500);
    }
};

const sdelete = async (req, res) => {
    const { id } = req.params;

    try {
        const sdeleteHaircut = await sdeleteDB(id);
        const successMsg = formatSuccess(sdeleteHaircut);
        send(res, successMsg, 200);
    } catch (error) {
        const errorMessage = formatError(error.message);
        send(res, errorMessage, 500);
    }
};

const Haircut = function (id, description, price) {
    this.id = id;
    this.description = description;
    this.price = price;
};

const buildSuccessMessage = function (message, data) {
    this.message = message;
    this.data = data;
};

const buildErrorMessage = function (message, data) {
    this.message = message;
    this.data = data;
};

const formatSuccess = data => {
    const successMessage = new buildSuccessMessage('Success', data);
    return successMessage;
};

const formatError = data => {
    const errorMessage = new buildErrorMessage('Failure', data);
    return errorMessage;
};

const send = (res, json, status) => {
    res.status(status).json(json);
};

module.exports = {
    list,
    update,
    sdelete,
    selectOne,
    handleMultipleAdd,
    handleIndividualAdd,
    selectMultiple,
    handleMultipleEdits,
};
