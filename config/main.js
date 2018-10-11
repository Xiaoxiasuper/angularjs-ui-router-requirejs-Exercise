require.config({
	baseUrl:'requirejs-ui.router demo',
	paths: {
		'angular': '../commen/angular',
		'router': '../commen/angular-ui-router',
		'domReady':"../commen/domReady",
		'app':'../app',
		'angularAMD':'../commen/angularAMD',
		'jquery':'../commen/jquery',
		'bootstrap':'../commen/bootstrap',
		'uib':'../commen/ui-bootstrap-tpls-2.5.0.min'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angularAMD': ['angular'],
		'router': {
			deps: ['angular']
		},
		'bootstrap': {
			deps: ['jquery']
		},
		'uib':{
			deps: ['bootstrap']
		},
		'app': {
			deps: ['router']
		},
		
	}
})

require(["domReady!",'app'],function( document){
	angular.bootstrap(document, ['myapp'])
})



