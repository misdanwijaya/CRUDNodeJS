'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    
    // deklarasikan model disini
    let models = TOOLS.MODELS;

    var CRUDService = {
        //add CRUDService GET all here
        findAll: function (modelName, cb) {
            models[modelName].findAndCountAll().nodeify(cb);
        },

        //add CRUDService GET by id here
        findById: function (modelName, id, cb) {
            models[modelName].findById(id).nodeify(cb);
        },
 
        //add CRUDService POST here
        create: function (modelName, opts, cb) {
            console.log(opts);
            models[modelName].create(opts).nodeify(cb);
        },
 
        //add CRUDService UPDATE by id here

        //add CRUDService DELETE by id here
    };

    return CRUDService;
};
