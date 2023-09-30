exports.create = async (req, res) => {
    res.status(200).json({status:"success", data: "post create sucess"})
};


exports.read = async (req, res) => {
    res.status(200).json({status:"success", data: "post read sucess"})
 };


exports.delete = async (req, res) => { 
    res.status(200).json({status:"success", data: "post delete sucess"})
};


exports.update = async (req, res) => { 
    res.status(200).json({status:"success", data: "post update sucess"})
};