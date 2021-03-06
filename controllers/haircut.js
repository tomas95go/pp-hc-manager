'use strict';
const Haircut = require('../classes/haircut');
const { formatSuccess, formatError } = require('../helpers/messages');
const {
    getList,
    addToDB,
    getOneDB,
    updateDB,
    sdeleteDB,
    getMultipleDB,
    sdeleteMultipleDB,
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
        const successMsg = formatSuccess(newHaircut);
        send(res, successMsg, 200);
    } catch (error) {
        const errorMessage = formatError(error.message);
        return errorMessage;
    }
};

const prepareIndividualAdd = req => {
    try {
        const { description, price } = req.body;
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
        return newHaircut;
    } catch (error) {
        const errorMessage = formatError(error.message);
        return errorMessage;
    }
};

const handleMultipleAdd = async (req, res) => {
    try {
        const haircuts = prepareMultipleAdd(req);
        const newHaircuts = await addMultipleHaircuts(haircuts);
        const successMsg = formatSuccess(newHaircuts);
        send(res, successMsg, 200);
    } catch (error) {
        const errorMessage = formatError(error.message);
        return errorMessage;
    }
};

const prepareMultipleAdd = req => {
    try {
        const { haircuts } = req.body;
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
        return newHaircuts;
    } catch (error) {
        const errorMessage = formatError(error.message);
        return errorMessage;
    }
};

const selectOne = async (req, res) => {
    try {
        const { id } = req.params;
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
    try {
        const { haircutsIds } = req.body;
        const editableHaircuts = await getMultipleDB(haircutsIds);
        const successMsg = formatSuccess(editableHaircuts);
        send(res, successMsg, 200);
    } catch (error) {
        const errorMessage = formatError(error.message);
        send(res, errorMessage, 500);
    }
};

const handleMultipleUpdates = async (req, res) => {
    try {
        const haircuts = prepareMultipleUpdates(req);
        await updateMultipleHaircuts(haircuts);
        const successMsg = formatSuccess(haircuts);
        send(res, successMsg, 200);
    } catch (error) {
        const errorMessage = formatError(error.message);
        send(res, errorMessage, 500);
    }
};

const prepareMultipleUpdates = req => {
    try {
        const { haircuts } = req.body;
        const newHaircuts = haircuts.map(element => {
            const { id, description, price } = element;
            const haircut = new Haircut(id, description, price);
            return haircut;
        });
        return newHaircuts;
    } catch (error) {
        const errorMessage = formatError(error.message);
        return errorMessage;
    }
};

const updateMultipleHaircuts = async haircuts => {
    try {
        const newHaircuts = [];
        for (const haircut of haircuts) {
            const newHaircut = await updateHaircut(haircut);
            newHaircuts.push(newHaircut);
        }
        return newHaircuts;
    } catch (error) {
        const errorMessage = formatError(error.message);
        return errorMessage;
    }
};

const handleIndividualUpdate = async (req, res) => {
    const haircut = prepareIndividualUpdate(req);
    const updatedHaircut = await updateHaircut(haircut);
    const successMsg = formatSuccess(updatedHaircut);
    send(res, successMsg, 200);
};

const prepareIndividualUpdate = req => {
    try {
        const { id } = req.params;
        const { description, price } = req.body;
        const haircut = new Haircut(id, description, price);
        return haircut;
    } catch (error) {
        const errorMessage = formatError(error.message);
        return errorMessage;
    }
};

const updateHaircut = async haircut => {
    try {
        await updateDB(haircut);
        return haircut;
    } catch (error) {
        const errorMessage = formatError(error.message);
        return errorMessage;
    }
};

const handleIndividualSoftDelete = async (req, res) => {
    try {
        const haircutId = prepareIndividualSoftDelete(req);
        const sdeleteHaircut = await softDelete(haircutId);
        const successMsg = formatSuccess(sdeleteHaircut);
        send(res, successMsg, 200);
    } catch (error) {
        const errorMessage = formatError(error.message);
        send(res, errorMessage, 500);
    }
};

const prepareIndividualSoftDelete = req => {
    try {
        const { id } = req.params;
        return id;
    } catch (error) {
        const errorMessage = formatError(error.message);
        return errorMessage;
    }
};

const softDelete = async id => {
    try {
        const sdeleteHaircut = await sdeleteDB(id);
        return sdeleteHaircut;
    } catch (error) {
        const errorMessage = formatError(error.message);
        return errorMessage;
    }
};

const handleMultipleDeletes = async (req, res) => {
    try {
        const haircutsIds = prepareMultipleSoftDeletes(req);
        const sdeletedHaircuts = await softDeleteMultipleHaircuts(haircutsIds);
        const successMsg = formatSuccess(sdeletedHaircuts);
        send(res, successMsg, 200);
    } catch (error) {
        const errorMessage = formatError(error.message);
        send(res, errorMessage, 500);
    }
};

const prepareMultipleSoftDeletes = req => {
    try {
        const { haircutsIds } = req.body;
        return haircutsIds;
    } catch (error) {
        const errorMessage = formatError(error.message);
        return errorMessage;
    }
};

const softDeleteMultipleHaircuts = async haircutsIds => {
    try {
        const sdeletedHaircuts = await sdeleteMultipleDB(haircutsIds);
        return sdeletedHaircuts;
    } catch (error) {
        const errorMessage = formatError(error.message);
        return errorMessage;
    }
};

const buildSuccessMessage = function (message, data) {
    this.message = message;
    this.data = data;
};

const send = (res, json, status) => {
    res.status(status).json(json);
};

module.exports = {
    list,
    handleIndividualUpdate,
    handleIndividualSoftDelete,
    selectOne,
    handleMultipleAdd,
    handleIndividualAdd,
    selectMultiple,
    handleMultipleUpdates,
    handleMultipleDeletes,
};
