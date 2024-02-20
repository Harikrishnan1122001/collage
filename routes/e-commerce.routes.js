const express = require("express");
const multer = require('multer')
const upload = require('../config/multer');
const ecommerce= require('../model/ecommerce.model');
const { model } = require("mongoose");
const router = express.Router();

router.post('/create', upload.single('picture'), async (req, res) => {
    const { name, department, rollnumber, dataofbirth, year, bloodgroup, address, phone, } = req.body;
    console.log("asdfgh=====", req);
    try {
        const data = {
            ecommerceName: name,
            ecommerceDepartment: department,
            ecommerceRollNumber: rollnumber,
            ecommerceDataofBirth: dataofbirth,
            ecommerceYear: year,
            ecommerceBloodGroup: bloodgroup,
            ecommerceAddress: address,
            ecommercePhone: phone,
            ecommerceicture: req.file.path

        }
    } catch {}
    });

router.post('/ecommerce_delete', async (req, res) => {
    const { ecommerceId } = req.body;
    console.log("asdfgh=====", req.body);
    try {
        const ecommerceCreate = await ecommerce.findByIdAndDelete().where({ _id: ecommerceId })
        return res.send({ message: "successfull deleted" });
    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
})
router.get('/fetch_sort', async (req, res) => {
    const { name, department, rollnumber, dataofbirth, year, bloodgroup, address, phone, } = req.body;
    console.log("asdfgh=====", req.body);
    try {
        const ecommerceCreate = await ecommerce.find().sort({ ecommerceBloodGroup: 1 })
        return res.send(ecommerceCreate);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
router.get('/fetch_select', async (req, res) => {
    const { name, department, rollnumber, dataofbirth, year, bloodgroup, address, phone, } = req.body;
    console.log("asdfgh=====", req.body);
    try {
        const ecommerceCreate = await ecommerce.find().select("ecommerceNameecommerceDepartment");
        return res.send(ecommerceCreate);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }

});
module.exports = router;