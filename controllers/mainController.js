const dataModel = require('../models/dataModel');

exports.getAllData = (req, res) => {
    dataModel.getAllData()
        .then(data => {
            res.render('index', { data });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            res.status(500).send("Internal Server Error");
        });
};

// Add and Get or Show data dari tabel kelas
exports.showAddForm = (req, res) => {
    res.render('add');
};

exports.addForm = (req, res) => {
    const formData = req.body;
    dataModel.addData(formData)
        .then(results => {
            console.log('Data added successfully:', results);
            res.redirect('/');
        })
        .catch(error => {
            console.error('Error adding data:', error);
            res.status(500).send('Internal Server Error');
        });
};


// Update
exports.showUpdateForm = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await dataModel.getDataById(id);
        res.render('update', { data });
    } catch (error) {
        console.error("Error fetching data for update:", error);
        res.status(500).send("Internal Server Error");
    }
};


exports.updateData = (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    dataModel.updateData(id, updatedData);
    res.redirect('/');
};

// Delete
exports.deleteData = (req, res) => {
    const student_id = req.params.id;

    dataModel.deleteData(student_id)
        .then(() => {
            res.redirect('/');
        })
        .catch(error => {
            console.error("Error deleting data:", error);
            res.status(500).send("Internal Server Error");
        });
};

// exports.deleteData = (req, res) => {
//     const id = req.params.id;
//     const deletedData = req.body;
//     dataModel.deleteData(id, deletedData);
//     res.redirect('/');
// };

