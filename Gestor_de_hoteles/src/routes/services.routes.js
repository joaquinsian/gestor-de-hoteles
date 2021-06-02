"use strict";

const express = require("express");
const router = express.Router();

const service = require("../controllers/services.controller");

router.post("/serviceCreation", service.createService);
router.get("/servicesView", service.getServices);
router.get("/serviceView/:serviceId", service.getServiceById);
router.put("/servicesUpdate/:serviceId", service.updateServiceById);
router.delete("/servicesDelete/:serviceId", service.deleteServiceById);

module.exports = router;
