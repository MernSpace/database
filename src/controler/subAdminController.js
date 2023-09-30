exports.create = async (req, res) => {
    res.status(200).json({status:"success", data: "sub admin create sucess"})
};


exports.read = async (req, res) => {
    res.status(200).json({status:"success", data: "sub admin read sucess"})
 };


exports.delete = async (req, res) => { 
    res.status(200).json({status:"success", data: "sub admin delete sucess"})
};


exports.update = async (req, res) => { 
    res.status(200).json({status:"success", data: "sub admin update sucess"})
};