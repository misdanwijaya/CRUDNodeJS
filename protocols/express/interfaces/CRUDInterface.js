/**
 * Created by rakhmatullahyoga on 29/09/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    
    // Deklarasikan crud controller disini
    const crudController = TOOLS.CONTROLLERS.CRUDController;

    return {

        // add interface get list here
        getList: function (previousData, req, res, next) {
            var model = req.query.model;
            if (!model) {
                let error = {code: 400, message: 'Please input models'};
                next(error, null);
            } else {
                crudController.getList(model, next);
            }
        },

        // add interface get list here
        getOne: function (previousData, req, res, next) {
            var model = req.query.model;
            if (!model) {
                let error = {code: 400, message: 'Please input models'};
                next(error, null);
            } else {
                var id = req.params.id;
                var opts = {where: {id: id}};
                crudController.getOne(model, opts, next);
            }
        }, 

        // add interface post/create here
        create: function (previousData, req, res, next) {
            var model = req.query.model;
            if (!model) {
                let error = {code: 400, message: 'Please input models'};
                next(error, null);
            } else {
                var data = req.body;
                crudController.create(model, data, next);
            }
        },
 
        // add interface update here

        // add interface delete here
    
    };
};