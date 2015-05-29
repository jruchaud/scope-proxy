"use strict";

(function() {
    console.log("It is the mod !");

    var kernel = $scope.importScope("kernel");
    console.log(kernel.data);
    console.log(kernel.value);

    $scope.mod = "The mod";

}());
