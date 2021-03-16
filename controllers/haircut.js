const create = (req, Haircut) => {
    const { description, price } = req.body;
    const haircut = new Haircut(description, price);
    return haircut;
};

module.exports = {
    create,
};
