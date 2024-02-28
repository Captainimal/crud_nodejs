const db = require('./db');

// Get all data
exports.getAllData = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM kelas';
        db.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

// Get data by ID
exports.getDataById = (student_id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM kelas WHERE student_id = ?';
        db.query(query, [student_id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0]);
            }
        });
    });
};

// Add data
// Add new data to the database
exports.addData = (formData) => {
    return new Promise((resolve, reject) => {
        const {nama, alamat, email, umur, gender, kelas, nama_orangtua, nomor, nilai, hobi} = formData;

        const query ='INSERT INTO kelas SET nama=?, alamat=?, email=?, umur=?, gender=?, kelas=?, nama_orangtua=?, nomor=?, nilai=?, hobi=?';

        const values = [nama, alamat, email, umur, gender, kelas, nama_orangtua, nomor, nilai, hobi];

        db.query(query, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};



// Update data by ID
exports.updateData = (student_id, updatedData) => {
    return new Promise((resolve, reject) => {
        const { nama, alamat, email, umur, gender, kelas, nama_orangtua, nomor, nilai, hobi } = updatedData;

        const query = 'UPDATE kelas SET nama=?, alamat=?, email=?, umur=?, gender=?, kelas=?, nama_orangtua=?, nomor=?, nilai=?, hobi=? WHERE student_id=?';
        const values = [nama, alamat, email, umur, gender, kelas, nama_orangtua, nomor, nilai, hobi, student_id];

        db.query(query, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};


// Delete data by ID
exports.deleteData = (student_id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM kelas WHERE student_id = ?';

        db.query(query, [student_id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};


