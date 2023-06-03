import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'

const port = 8081;

const start = async () => {
    const app = express();

    const admin = new AdminJS({});

    const adminRouter = AdminJSExpress.buildRouter(admin);
    app.use(admin.options.rootPath, adminRouter);

    app.listen(port, () => {
        console.log('AdminJSstarted on http://localhost:${PORT}${admin.options.rootPath}')
    })
}

start();