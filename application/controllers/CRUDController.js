'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    
    //deklarasikan CRUDService disini
    const CRUDService = TOOLS.SERVICES.CRUDService;

    return {
        // add controller getList here
        getList: function (model, callback) {
            CRUDService.findAll(model, function (err, result) {
                if (err) {
                    callback(err, null);
                } else {
                    if (!result) {
                        callback(null, { code: 404, message: 'data not found'}, true);
                    } else {
                        callback(null, { result: result }, true);
                    }
                }
            });
        },

        // add controller getOne here
        getOne: function (model, opts, callback) {
            CRUDService.findById(model, opts, function (err, result) {
                if (err) {
                    callback(err, null);
                } else {
                    if (!result) {
                        callback(null, { code: 404, message: 'data not found'}, true);
                    } else {
                        callback(null, { result: result }, true);
                    }
                }
            });
        },
 
        // add controller create here
        create: function (model, data, callback) {
            CRUDService.create(model, data, function (err, result) {
                if (err) {
                    callback(err, null);
                } else {
                    if (!result) {
                        callback(null, { code: 400, message: 'data failed to create'}, true);
                    } else {
                        callback(null, { result: result }, true);
                    }
                }
            });
        },
 
        // add controller update here

        // add controller delete here
        
    };
};
