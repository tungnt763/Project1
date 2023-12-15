// moi khi truy cap vao 1 duong link cua website thi no se chay vao file nay dau tien
import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();
let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);
    // res api -> muon lay data thi dung method get
    // muon tao data thi dung method post
    // muon xoa data thi dung method delete
    // muon update data thi dung put

    return app.use("/", router);
}

module.exports = initWebRoutes;