'use strict';

const { getList, addToDB, getOneDB } = require('../models/haircut/haircut');

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
        const haircut = new Haircut(description, price);
        const newHaircut = await addToDB(haircut);
        send(res, newHaircut, 200);
    } catch (error) {
        const errorMessage = formatError(error.message);
        send(res, errorMessage, 500);
    }
};

const selectOne = async (req, res) => {
    const { id } = req.params;

    try {
        const haircut = await getOneDB(id);
        const isEmpty = haircut.length === 0;
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

const update = async (req, res) => {
    return null;
};

const sdelete = (req, res, id) => {
    send(res, id, 200);
};

const Haircut = function (description, price) {
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
};
