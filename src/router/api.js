const express = require('express');
const router = express.Router();
const userController = require('../controler/userController');
const adminController = require('../controler/adminController');
const subAdminController = require('../controler/subAdminController');
const postController = require('../controler/postController');
const myController= require('../controler/myController');
//user controller
router.get('/user_create',userController.create);
router.get('/user_delete',userController.delete);
router.get('/user_update',userController.update);
router.get('/user_read',userController.read);
//admin controller
router.get('/admin_create', adminController.create);
router.get('/admin_read', adminController.read);
router.get('/admin_update', adminController.update);
router.get('/admin_delete', adminController.delete);
//sub admin controller
router.get('/sub_admin_create', subAdminController.create);
router.get('/sub_admin_read',subAdminController.read);
router.get('/sub_admin_update',subAdminController.update);
router.get('/sub_admin_delete',subAdminController.delete);
//post controller
router.get('/post_create',postController.create);
router.get('/post_read',postController.read);
router.get('/post_update',postController.update);
router.get('/post_delete',postController.delete);
//my controller
router.get('/database_create',myController.create);
router.get('/database_read',myController.read);
router.get('/database_update',myController.update);
router.get('/database_delete',myController.delete);
module.exports =router