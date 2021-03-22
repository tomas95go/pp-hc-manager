'use strict';

const { getList } = require('../models/haircut/haircut');

const list = async (req, res) => {
    try {
        const hcList = await getList();
        const successMsg = formatSuccess(hcList);
        send(res, successMsg, 200);
    } catch (error) {
        const errorMessage = await formatError(error);
        send(res, errorMessage, 500);
    }
};

const add = (req, res) => {
    const Haircut = function (description, price) {
        this.description = description;
        this.price = price;
    };

    const haircut = new Haircut('Drake', 1500);

    console.log(haircut);

    send(res, haircut, 200);
};

const update = (req, res, id) => {
    send(res, id, 200);
};

const sdelete = (req, res, id) => {
    send(res, id, 200);
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
};
