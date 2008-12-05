<%= include 'HEADER' %>

var Prototype = {
  Version: '<%= PROTOTYPE_VERSION %>',
  
  Browser: {
    IE:     false,
    Opera:  false,
    WebKit: false,
    Gecko:  true,
    MobileSafari: false
  },

  BrowserFeatures: {
    XPath: false,
    SelectorsAPI: false,
    ElementExtensions: false,
    SpecificElementExtensions: false
  },

  ScriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script>',
  JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,  
  
  emptyFunction: function() { },
  K: function(x) { return x }
};

if (Prototype.Browser.MobileSafari)
  Prototype.BrowserFeatures.SpecificElementExtensions = false;
  

<%= include 'base.js', 'string.js' %>

<%= include 'enumerable.js', 'array.js', 'number.js', 'hash.js', 'range.js' %>
