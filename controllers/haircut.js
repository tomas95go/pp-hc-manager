'use strict';

const { getList } = require('../models/haircut/haircut');

const list = async (req, res) => {
    const hcList = await getList();
    send(res, hcList, 200);
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

const send = (res, json, status) => {
    res.status(status).json(json);
};

module.exports = {
    list,
    add,
    update,
    sdelete,
};
