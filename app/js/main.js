require.config({
    // Karma serves files under /base, which is the basePath from your config file
    paths: {
        'slugify': 'slugify',
        'calculator': 'calculator'
    },

    baseUrl: '/base/app/js',

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});


    require(['slugify','calculator'], function(slugify,calculator) {
    	//Do stuff with slugify and calculator

   	;}
