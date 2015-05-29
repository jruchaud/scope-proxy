"use strict";

var ScopeProxy = function(global, Factory) {

    var handler = function(global, Factory) {

        global.__scopes__ = {};

        var getScope = function() {
            var script = document.currentScript;
            if (!script) {
                return global;
            }

            var scopeName = script.dataset.scope;

            var scope = global.__scopes__[scopeName];
            if (!scope) {
                scope = global.__scopes__[scopeName] = new Factory();
            }

            return scope;
        };

        var importScope = function(name, alias) {
            var scope = getScope();
            var otherScope = global.__scopes__[name];

            scope[alias || name] = otherScope;
            return otherScope;
        };

        var exportScope = function(value, alias) {
            var scope = getScope();
            scope[alias || value.name] = value;
        };

        return {
            get: function(receiver, name) {
                if (name === "importScope") {
                    return importScope;

                } else if (name === "exportScope") {
                    return exportScope;

                } else {
                    var scope = getScope();
                    return scope[name];
                }
            },

            set: function(receiver, name, val) {
                var scope = getScope();
                scope[name] = val;
            }
        };
    };

    return Proxy.create(handler(global, Factory || Function));
};
