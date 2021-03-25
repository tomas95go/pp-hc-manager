'use strict';

const { getList, addToDB, getOneDB, updateDB, sdeleteDB } = require('../models/haircut/haircut');

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

const add = async (req, res) => {
    const { description, price } = req.body;

    try {
        const haircut = new Haircut(null, description, price);
        const newHaircut = await addToDB(haircut);
        const successMsg = formatSuccess(newHaircut);
        send(res, successMsg, 200);
    } catch (error) {
        const errorMessage = formatError(error);
        send(res, errorMessage, 500);
    }
};

const addMultiple = async (req, res) => {
    const { data } = req.body;
    res.status(200).json(data);
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
    send(res, id, 200);
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
    add,
    update,
    sdelete,
    selectOne,
    addMultiple,
};
