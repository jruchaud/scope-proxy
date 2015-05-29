"use strict";

(function() {
    console.log("It is the kernel !")

    $scope.value = "kernel";
    $scope.exportScope({
        data: "Hello world !"
    }, "data");
}());
