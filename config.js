System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "*": "app/*",
    "npm:*": "node_modules/*"
  },
  map: {
    "angular": "npm:angular/angular.js",
    "angular-ui-router": "npm:angular-ui-router/release/angular-ui-router.js"
  },
  meta: {
    'angular': {
      format: 'global',
      exports: 'angular'
    },
  }
});
