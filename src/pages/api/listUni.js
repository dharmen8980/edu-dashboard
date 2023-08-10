export default async function handler(req, res) {
    const id = parseInt(req.query.users);
    switch(id) {
        case 1:
            res.status(200).json({universities: "University of Science"});
            break;
        case 2:
            res.status(200).json({universities: "University of Technology"});
            break;
        case 3:
            res.status(200).json({universities: "University of Medicine"});
            break;
        case 4:
            res.status(200).json({universities: "University of Education"});
            break;
        case 5:
            res.status(200).json({universities: "University of Economics"});
            break;
        case 6:
            res.status(200).json({universities: "University of Social Science and Humanities"});
            break;
        default:
            res.status(200).json({universities: "Invalid userid"});
    }
}