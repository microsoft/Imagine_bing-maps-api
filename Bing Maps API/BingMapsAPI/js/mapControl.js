var map = null;

var queryInput = null;
var queryButton = null;

var whatInput = null;
var whereInput = null;
var searchButton = null;

var dataSourceInput = null;
var dataSourceButton = null;

var searchManager = null;

var apiKey = "paste-your-key-here";

window.onload = InitMap;

function InitMap()
{
    //Get HTML elements
    queryInput = document.getElementById('txtQuery');
    queryButton = document.getElementById('btnGeocode');

    whatInput = document.getElementById('txtWhat');
    whereInput = document.getElementById('txtWhere');
    searchButton = document.getElementById('btnSearch');

    dataSourceInput = document.getElementById('txtDataSource');
    dataSourceButton = document.getElementById('btnDataSource');

    // *** Add your source code here ***
}

function ThemesModuleLoaded()
{
    // *** Add your source code here ***
}

function SearchModuleLoaded()
{
    // *** Add your source code here ***

    //Enable search buttons
    queryButton.disabled = false;
    searchButton.disabled = false;
    dataSourceButton.disabled = false;
}

function ClickDataSource(credentials)
{
    map.getCredentials(MakeDataSourceRequest);
}

function MakeDataSourceRequest(credentials)
{
    // *** Add your source code here ***
}

function CallRestService(request)
{
    // *** Add your source code here ***
}

function DataSourceCallback(response, userdata)
{
    // *** Add your source code here ***
}

// *** Add your source code here ***