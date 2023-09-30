exports.create = async (req, res) => {
    res.status(200).json({status:"success", data: "database create sucess"})
};


exports.read = async (req, res) => {
    res.status(200).json({status:"success", data: "database read sucess"})
 };


exports.delete = async (req, res) => { 
    res.status(200).json({status:"success", data: "database delete sucess"})
};


exports.update = async (req, res) => { 
    res.status(200).json({status:"success", data: "database update sucess"})
};