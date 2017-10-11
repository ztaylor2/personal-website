'use strict';

page('/', app.homeController.init);
page('/permits', app.permitsController.init);
page('/algorithm', app.algorithmController.init);
page('/contact', app.contactController.init);

page();
