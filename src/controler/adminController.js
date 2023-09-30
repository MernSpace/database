exports.create = async (req, res) => {
    res.status(200).json({status:"success", data: "admin create sucess"})
};


exports.read = async (req, res) => {
    res.status(200).json({status:"success", data: "admin read sucess"})
 };


exports.delete = async (req, res) => { 
    res.status(200).json({status:"success", data: "admin delete sucess"})
};


exports.update = async (req, res) => { 
    res.status(200).json({status:"success", data: "admin update sucess"})
};