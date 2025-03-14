const express =  require('express');
const db = require('./config');
const router = express.Router();

router.get('/users', (req, res)=>{
    db.query('SELECT * FROM users', (err, result)=>{
        if(err) return res.status(500).json({error: err.message});
        res.json(result);
    });
});

router.post('/users', (req, res)=>{
    const { name, email } = req.body;
    db.query('INSERT INTO users (name, email) VALUES (?, ?)',
        [name, email],
        (err, result) =>{
            if(err) return res.status(500).json({error : err.message});
            res.json({message: 'user berhasil ditambahkan', id: result.insertId})
        }
    )
});

router.put('/users/:id', (req, res)=>{
    const {id} = req.params;
    console.log("Request Body:", req.body); // Debugging

    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "Name dan email wajib diisi" });
    }

    

    db.query('UPDATE users SET name=?, email=? WHERE id=?',
        [name, email, id],
        (err)=>{
            if(err) return res.status(500).json({error : err.message})
            res.json({message: ' User berhasil diperbarui'})
        }
    )
});

router.delete('/users/:id', (req, res)=>{
    const {id} = req.params;
    db.query('DELETE FROM users WHERE id=?',
        [id],
        (err)=>{
            if(err) return res.status(500).json({error: err.message})
            res.json({message: 'User berhasil dihapus'})
        }
    )
});

module.exports = router;
