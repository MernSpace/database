exports.create = async (req, res) => {
    res.status(200).json({status:"success", data: "user create sucess"})
};


exports.read = async (req, res) => {
    res.status(200).json({status:"success", data: "user read sucess"})
 };


exports.delete = async (req, res) => { 
    res.status(200).json({status:"success", data: "user delete sucess"})
};


exports.update = async (req, res) => { 
    res.status(200).json({status:"success", data: "user update sucess"})
};