# scope-proxy
Create scope for script tag with a proxy. Usefull to avoid the global variable and share variable in same scope.

Installation
============

`npm install git://github.com/jruchaud/scope-proxy.git`
`<script type="application/javascript" src="/node_modules/scope-proxy/scope-proxy.js"></script>`

Usage
=====

### Create the scope ###
```js
<script>
    $scope = new ScopeProxy(window);
</script>
```

### Describe the scope when you include your js ###
```js
<script data-scope="kernel" type="application/javascript" src="kernel.js"></script>
<script data-scope="mod" type="application/javascript" src="mod.js"></script>
<script data-scope="mod" type="application/javascript" src="service.js"></script>
```

### Share variable/object in same scope ###

- In mod.js

`$scope.value = "value";`

- You can use it in service.js like:

`$scope.value -> "value"`

- However you cannot access in kernel.js
`$scope.value -> undefined`

- Otherwise you can use exportScope:

`$scope.exportScope(MyClass)`
`$scope.exportScope(new MyClass(), "myClass");`

### Share variable/object from other module ###

- In kernel.js

`$scope.value = "value";`

- You can use it in service.js like:

`var kernel = $scope.importScope("kernel");`
`kernel.value -> "value"`
