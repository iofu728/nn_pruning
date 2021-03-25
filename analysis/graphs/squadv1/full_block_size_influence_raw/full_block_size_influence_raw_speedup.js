(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("f692c95d-37bc-447e-bfc6-50196321b194");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f692c95d-37bc-447e-bfc6-50196321b194' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"f6c86d66-5b92-4d37-b2fb-76c93af37b93":{"roots":{"references":[{"attributes":{"data_source":{"id":"10765"},"glyph":{"id":"10766"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10767"},"selection_glyph":null,"view":{"id":"10769"}},"id":"10768","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10766","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10693","type":"Line"},{"attributes":{},"id":"10763","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10718","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11266","type":"Line"},{"attributes":{},"id":"10764","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"11319"},"selection_policy":{"id":"11318"}},"id":"11265","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"11265"},"glyph":{"id":"11266"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11267"},"selection_glyph":null,"view":{"id":"11269"}},"id":"11268","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10694","type":"Line"},{"attributes":{"source":{"id":"10692"}},"id":"10696","type":"CDSView"},{"attributes":{"end":3.25,"start":0.75},"id":"10651","type":"Range1d"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"10739"},"selection_policy":{"id":"10738"}},"id":"10717","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11321","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11378","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"10791"},"selection_policy":{"id":"10790"}},"id":"10765","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11267","type":"Line"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10799","type":"Line"},{"attributes":{"source":{"id":"11265"}},"id":"11269","type":"CDSView"},{"attributes":{},"id":"10630","type":"BasicTicker"},{"attributes":{"data_source":{"id":"11320"},"glyph":{"id":"11321"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11322"},"selection_glyph":null,"view":{"id":"11324"}},"id":"11323","type":"GlyphRenderer"},{"attributes":{},"id":"10709","type":"UnionRenderers"},{"attributes":{},"id":"10710","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10767","type":"Line"},{"attributes":{"source":{"id":"10765"}},"id":"10769","type":"CDSView"},{"attributes":{},"id":"11318","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"10714","type":"Scatter"},{"attributes":{},"id":"11319","type":"Selection"},{"attributes":{"data":{"x":[2.0],"y":[87.5]},"selected":{"id":"10737"},"selection_policy":{"id":"10736"}},"id":"10712","type":"ColumnDataSource"},{"attributes":{},"id":"10790","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"10794","type":"Scatter"},{"attributes":{},"id":"10791","type":"Selection"},{"attributes":{"data_source":{"id":"10717"},"glyph":{"id":"10718"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10719"},"selection_glyph":null,"view":{"id":"10721"}},"id":"10720","type":"GlyphRenderer"},{"attributes":{"source":{"id":"10712"}},"id":"10716","type":"CDSView"},{"attributes":{"data_source":{"id":"10712"},"glyph":{"id":"10713"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10714"},"selection_glyph":null,"view":{"id":"10716"}},"id":"10715","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.78125],"y":[90.3]},"selected":{"id":"10826"},"selection_policy":{"id":"10825"}},"id":"10793","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10741","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10742","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"11376"},"selection_policy":{"id":"11375"}},"id":"11320","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"10740"},"glyph":{"id":"10741"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10742"},"selection_glyph":null,"view":{"id":"10744"}},"id":"10743","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"10828"},"selection_policy":{"id":"10827"}},"id":"10798","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10719","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"10795","type":"Scatter"},{"attributes":{"data_source":{"id":"10798"},"glyph":{"id":"10799"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10800"},"selection_glyph":null,"view":{"id":"10802"}},"id":"10801","type":"GlyphRenderer"},{"attributes":{"source":{"id":"10717"}},"id":"10721","type":"CDSView"},{"attributes":{"source":{"id":"10793"}},"id":"10797","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11322","type":"Line"},{"attributes":{"data_source":{"id":"10793"},"glyph":{"id":"10794"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10795"},"selection_glyph":null,"view":{"id":"10797"}},"id":"10796","type":"GlyphRenderer"},{"attributes":{"source":{"id":"11320"}},"id":"11324","type":"CDSView"},{"attributes":{"data_source":{"id":"11377"},"glyph":{"id":"11378"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11379"},"selection_glyph":null,"view":{"id":"11381"}},"id":"11380","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0.9840340185670864,1.026141974757969,1.095528107464865,1.1632636047982534,1.170038217254783,1.2607211638158147,1.3349999991845345,1.3926143255719736,1.5170581452285046],"y":[90.24019516114679,89.78322305629628,88.66959543954316,88.11360890595924,87.64967103979136,87.45347230995543,86.50729252303553,85.66626983371626,85.40699359564026]},"selected":{"id":"10933"},"selection_policy":{"id":"10932"}},"id":"10897","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"10829"},"glyph":{"id":"10830"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10831"},"selection_glyph":null,"view":{"id":"10833"}},"id":"10832","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10800","type":"Line"},{"attributes":{},"id":"11375","type":"UnionRenderers"},{"attributes":{"source":{"id":"10798"}},"id":"10802","type":"CDSView"},{"attributes":{},"id":"11376","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"10861"},"selection_policy":{"id":"10860"}},"id":"10829","type":"ColumnDataSource"},{"attributes":{},"id":"10736","type":"UnionRenderers"},{"attributes":{},"id":"10737","type":"Selection"},{"attributes":{"label":{"value":"Hybrid, BERT-base"},"renderers":[{"id":"11696"}]},"id":"11762","type":"LegendItem"},{"attributes":{},"id":"10738","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"11435"},"selection_policy":{"id":"11434"}},"id":"11377","type":"ColumnDataSource"},{"attributes":{},"id":"10739","type":"Selection"},{"attributes":{},"id":"10825","type":"UnionRenderers"},{"attributes":{},"id":"10826","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11379","type":"Line"},{"attributes":{"source":{"id":"11377"}},"id":"11381","type":"CDSView"},{"attributes":{},"id":"11495","type":"UnionRenderers"},{"attributes":{},"id":"10827","type":"UnionRenderers"},{"attributes":{},"id":"11496","type":"Selection"},{"attributes":{},"id":"10828","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"10764"},"selection_policy":{"id":"10763"}},"id":"10740","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"10629"},"ticker":null},"id":"10632","type":"Grid"},{"attributes":{"source":{"id":"10740"}},"id":"10744","type":"CDSView"},{"attributes":{},"id":"10642","type":"HelpTool"},{"attributes":{"text":"Mobile Bert (w/o opt)","x":1.78125,"y":90.3},"id":"10792","type":"Label"},{"attributes":{"text":"TinyBERT","x":2.0,"y":87.5},"id":"10711","type":"Label"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"10655","type":"Scatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"10654","type":"Scatter"},{"attributes":{},"id":"10640","type":"SaveTool"},{"attributes":{"source":{"id":"10653"}},"id":"10657","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"10713","type":"Scatter"},{"attributes":{},"id":"10641","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"10637"},{"id":"10638"},{"id":"10639"},{"id":"10640"},{"id":"10641"},{"id":"10642"}]},"id":"10644","type":"Toolbar"},{"attributes":{"text":"F1 against Speedup (BERT-base reference)"},"id":"10619","type":"Title"},{"attributes":{"below":[{"id":"10629"}],"center":[{"id":"10632"},{"id":"10636"},{"id":"10652"},{"id":"10673"},{"id":"10711"},{"id":"10792"},{"id":"11058"}],"left":[{"id":"10633"}],"plot_width":800,"renderers":[{"id":"10656"},{"id":"10661"},{"id":"10678"},{"id":"10695"},{"id":"10715"},{"id":"10720"},{"id":"10743"},{"id":"10768"},{"id":"10796"},{"id":"10801"},{"id":"10832"},{"id":"10865"},{"id":"10900"},{"id":"10938"},{"id":"10977"},{"id":"11018"},{"id":"11062"},{"id":"11067"},{"id":"11114"},{"id":"11163"},{"id":"11214"},{"id":"11268"},{"id":"11323"},{"id":"11380"},{"id":"11439"},{"id":"11501"},{"id":"11564"},{"id":"11629"},{"id":"11696"},{"id":"11766"},{"id":"11837"},{"id":"11910"}],"title":{"id":"10619"},"toolbar":{"id":"10644"},"x_range":{"id":"10651"},"x_scale":{"id":"10625"},"y_range":{"id":"10623"},"y_scale":{"id":"10627"}},"id":"10618","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"10653"},"glyph":{"id":"10654"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10655"},"selection_glyph":null,"view":{"id":"10657"}},"id":"10656","type":"GlyphRenderer"},{"attributes":{},"id":"10623","type":"DataRange1d"},{"attributes":{},"id":"10625","type":"LinearScale"},{"attributes":{},"id":"11761","type":"Selection"},{"attributes":{},"id":"11107","type":"UnionRenderers"},{"attributes":{},"id":"11108","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11764","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"11833"},"selection_policy":{"id":"11832"}},"id":"11763","type":"ColumnDataSource"},{"attributes":{},"id":"11109","type":"UnionRenderers"},{"attributes":{},"id":"11110","type":"Selection"},{"attributes":{"data_source":{"id":"11763"},"glyph":{"id":"11764"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11765"},"selection_glyph":null,"view":{"id":"11767"}},"id":"11766","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11835","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11908","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11765","type":"Line"},{"attributes":{"source":{"id":"11763"}},"id":"11767","type":"CDSView"},{"attributes":{"data_source":{"id":"11834"},"glyph":{"id":"11835"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11836"},"selection_glyph":null,"view":{"id":"11838"}},"id":"11837","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"10974"},"glyph":{"id":"10975"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10976"},"selection_glyph":null,"view":{"id":"10978"}},"id":"10977","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Full block method, bs= 8x8, dl=1.0"},"renderers":[{"id":"11439"}]},"id":"11497","type":"LegendItem"},{"attributes":{"data_source":{"id":"11693"},"glyph":{"id":"11694"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11695"},"selection_glyph":null,"view":{"id":"11697"}},"id":"11696","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11161","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11112","type":"Line"},{"attributes":{"source":{"id":"11211"}},"id":"11215","type":"CDSView"},{"attributes":{},"id":"11832","type":"UnionRenderers"},{"attributes":{},"id":"11833","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11113","type":"Line"},{"attributes":{"source":{"id":"11111"}},"id":"11115","type":"CDSView"},{"attributes":{"data_source":{"id":"11160"},"glyph":{"id":"11161"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11162"},"selection_glyph":null,"view":{"id":"11164"}},"id":"11163","type":"GlyphRenderer"},{"attributes":{"source":{"id":"10658"}},"id":"10662","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"10643","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10660","type":"Line"},{"attributes":{},"id":"11435","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"11906"},"selection_policy":{"id":"11905"}},"id":"11834","type":"ColumnDataSource"},{"attributes":{},"id":"11158","type":"UnionRenderers"},{"attributes":{},"id":"11159","type":"Selection"},{"attributes":{},"id":"11434","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11836","type":"Line"},{"attributes":{"source":{"id":"11834"}},"id":"11838","type":"CDSView"},{"attributes":{"data_source":{"id":"11907"},"glyph":{"id":"11908"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11909"},"selection_glyph":null,"view":{"id":"11911"}},"id":"11910","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"11210"},"selection_policy":{"id":"11209"}},"id":"11160","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11213","type":"Line"},{"attributes":{},"id":"11905","type":"UnionRenderers"},{"attributes":{},"id":"11906","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11162","type":"Line"},{"attributes":{"source":{"id":"11160"}},"id":"11164","type":"CDSView"},{"attributes":{"data_source":{"id":"10658"},"glyph":{"id":"10659"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10660"},"selection_glyph":null,"view":{"id":"10662"}},"id":"10661","type":"GlyphRenderer"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"11981"},"selection_policy":{"id":"11980"}},"id":"11907","type":"ColumnDataSource"},{"attributes":{},"id":"11209","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.63],"y":[86.9]},"selected":{"id":"10670"},"selection_policy":{"id":"10669"}},"id":"10653","type":"ColumnDataSource"},{"attributes":{},"id":"11210","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10659","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11909","type":"Line"},{"attributes":{"axis_label":"F1","formatter":{"id":"10664"},"ticker":{"id":"10634"}},"id":"10633","type":"LinearAxis"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"10672"},"selection_policy":{"id":"10671"}},"id":"10658","type":"ColumnDataSource"},{"attributes":{"source":{"id":"11907"}},"id":"11911","type":"CDSView"},{"attributes":{"axis":{"id":"10633"},"dimension":1,"ticker":null},"id":"10636","type":"Grid"},{"attributes":{"click_policy":"hide","items":[{"id":"10674"},{"id":"10934"},{"id":"11264"},{"id":"11497"},{"id":"11762"}]},"id":"10673","type":"Legend"},{"attributes":{"label":{"value":"Reference F1=88.5 BERT-base"},"renderers":[{"id":"10661"},{"id":"10678"},{"id":"10695"},{"id":"10720"},{"id":"10743"},{"id":"10768"},{"id":"10801"},{"id":"10832"},{"id":"10865"},{"id":"10938"},{"id":"10977"},{"id":"11018"},{"id":"11067"},{"id":"11114"},{"id":"11163"},{"id":"11268"},{"id":"11323"},{"id":"11380"},{"id":"11501"},{"id":"11564"},{"id":"11629"},{"id":"11766"},{"id":"11837"},{"id":"11910"}]},"id":"10674","type":"LegendItem"},{"attributes":{},"id":"10634","type":"BasicTicker"},{"attributes":{},"id":"11980","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"11436"},"glyph":{"id":"11437"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11438"},"selection_glyph":null,"view":{"id":"11440"}},"id":"11439","type":"GlyphRenderer"},{"attributes":{},"id":"11981","type":"Selection"},{"attributes":{"text":"DistilBERT","x":1.63,"y":86.9},"id":"10652","type":"Label"},{"attributes":{"label":{"value":"Full block method, bs= 8x8, dl=0.25"},"renderers":[{"id":"11214"}]},"id":"11264","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11438","type":"Line"},{"attributes":{},"id":"11263","type":"Selection"},{"attributes":{},"id":"11262","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"11560"},"selection_policy":{"id":"11559"}},"id":"11498","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.9695394330694393,2.1003540884863323,2.1124331270315624,2.227490161916501,2.262663009764823,2.471023235070233,2.61711931355729,2.681246344578876,2.704854439028025,2.860446087610368,2.86191312967017],"y":[88.06903108265608,87.70461789964966,87.48291010744668,87.3881230572442,87.14755939306319,86.74156854566804,86.39441106336629,86.20063710644014,86.11992485005756,85.69020560735045,85.6109462422114]},"selected":{"id":"11761"},"selection_policy":{"id":"11760"}},"id":"11693","type":"ColumnDataSource"},{"attributes":{},"id":"10664","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"11436"}},"id":"11440","type":"CDSView"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11499","type":"Line"},{"attributes":{"data_source":{"id":"11498"},"glyph":{"id":"11499"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11500"},"selection_glyph":null,"view":{"id":"11502"}},"id":"11501","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11562","type":"Line"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11627","type":"Line"},{"attributes":{"axis_label":"Speedup","formatter":{"id":"10666"},"ticker":{"id":"10630"}},"id":"10629","type":"LinearAxis"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10863","type":"Line"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10830","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11500","type":"Line"},{"attributes":{},"id":"10972","type":"UnionRenderers"},{"attributes":{"source":{"id":"11498"}},"id":"11502","type":"CDSView"},{"attributes":{},"id":"10666","type":"BasicTickFormatter"},{"attributes":{},"id":"10973","type":"Selection"},{"attributes":{"data_source":{"id":"11211"},"glyph":{"id":"11212"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11213"},"selection_glyph":null,"view":{"id":"11215"}},"id":"11214","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"11561"},"glyph":{"id":"11562"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11563"},"selection_glyph":null,"view":{"id":"11565"}},"id":"11564","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10831","type":"Line"},{"attributes":{"source":{"id":"10829"}},"id":"10833","type":"CDSView"},{"attributes":{"data_source":{"id":"10862"},"glyph":{"id":"10863"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10864"},"selection_glyph":null,"view":{"id":"10866"}},"id":"10865","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.0625,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11016","type":"Line"},{"attributes":{},"id":"11559","type":"UnionRenderers"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10975","type":"Line"},{"attributes":{},"id":"10860","type":"UnionRenderers"},{"attributes":{},"id":"11560","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"11110"},"selection_policy":{"id":"11109"}},"id":"11064","type":"ColumnDataSource"},{"attributes":{},"id":"10861","type":"Selection"},{"attributes":{},"id":"10669","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10976","type":"Line"},{"attributes":{"source":{"id":"10974"}},"id":"10978","type":"CDSView"},{"attributes":{"data_source":{"id":"11015"},"glyph":{"id":"11016"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11017"},"selection_glyph":null,"view":{"id":"11019"}},"id":"11018","type":"GlyphRenderer"},{"attributes":{},"id":"10670","type":"Selection"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"11625"},"selection_policy":{"id":"11624"}},"id":"11561","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"10896"},"selection_policy":{"id":"10895"}},"id":"10862","type":"ColumnDataSource"},{"attributes":{"source":{"id":"10897"}},"id":"10901","type":"CDSView"},{"attributes":{},"id":"11013","type":"UnionRenderers"},{"attributes":{},"id":"11014","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11563","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10864","type":"Line"},{"attributes":{"source":{"id":"11561"}},"id":"11565","type":"CDSView"},{"attributes":{"data_source":{"id":"11626"},"glyph":{"id":"11627"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11628"},"selection_glyph":null,"view":{"id":"11630"}},"id":"11629","type":"GlyphRenderer"},{"attributes":{"source":{"id":"10862"}},"id":"10866","type":"CDSView"},{"attributes":{"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10898","type":"Line"},{"attributes":{},"id":"10671","type":"UnionRenderers"},{"attributes":{},"id":"10672","type":"Selection"},{"attributes":{},"id":"11624","type":"UnionRenderers"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"11057"},"selection_policy":{"id":"11056"}},"id":"11015","type":"ColumnDataSource"},{"attributes":{},"id":"10895","type":"UnionRenderers"},{"attributes":{},"id":"11625","type":"Selection"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11065","type":"Line"},{"attributes":{},"id":"10896","type":"Selection"},{"attributes":{},"id":"10627","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11017","type":"Line"},{"attributes":{"source":{"id":"11015"}},"id":"11019","type":"CDSView"},{"attributes":{"data":{"x":[1.0],"y":[89.508140874387]},"selected":{"id":"11108"},"selection_policy":{"id":"11107"}},"id":"11059","type":"ColumnDataSource"},{"attributes":{},"id":"10690","type":"UnionRenderers"},{"attributes":{"line_alpha":0.25,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10936","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"11692"},"selection_policy":{"id":"11691"}},"id":"11626","type":"ColumnDataSource"},{"attributes":{"source":{"id":"11693"}},"id":"11697","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#e7298a","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"10899","type":"Line"},{"attributes":{},"id":"11056","type":"UnionRenderers"},{"attributes":{},"id":"11057","type":"Selection"},{"attributes":{"data_source":{"id":"10935"},"glyph":{"id":"10936"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10937"},"selection_glyph":null,"view":{"id":"10939"}},"id":"10938","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11628","type":"Line"},{"attributes":{},"id":"10691","type":"Selection"},{"attributes":{},"id":"10638","type":"WheelZoomTool"},{"attributes":{"source":{"id":"11626"}},"id":"11630","type":"CDSView"},{"attributes":{"label":{"value":"Improved soft movement, BERT-base"},"renderers":[{"id":"10900"}]},"id":"10934","type":"LegendItem"},{"attributes":{"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11694","type":"Line"},{"attributes":{"data_source":{"id":"10675"},"glyph":{"id":"10676"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10677"},"selection_glyph":null,"view":{"id":"10679"}},"id":"10678","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"10643"}},"id":"10639","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.125,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10676","type":"Line"},{"attributes":{},"id":"11692","type":"Selection"},{"attributes":{},"id":"10932","type":"UnionRenderers"},{"attributes":{},"id":"10637","type":"PanTool"},{"attributes":{"data":{"x":[0,3.25],"y":[86.5,86.5]},"selected":{"id":"10710"},"selection_policy":{"id":"10709"}},"id":"10692","type":"ColumnDataSource"},{"attributes":{},"id":"10933","type":"Selection"},{"attributes":{"data_source":{"id":"10897"},"glyph":{"id":"10898"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10899"},"selection_glyph":null,"view":{"id":"10901"}},"id":"10900","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"11061","type":"Scatter"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"10691"},"selection_policy":{"id":"10690"}},"id":"10675","type":"ColumnDataSource"},{"attributes":{},"id":"11691","type":"UnionRenderers"},{"attributes":{"line_color":"#1b9e77","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11212","type":"Line"},{"attributes":{"data_source":{"id":"11064"},"glyph":{"id":"11065"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11066"},"selection_glyph":null,"view":{"id":"11068"}},"id":"11067","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10677","type":"Line"},{"attributes":{"source":{"id":"11059"}},"id":"11063","type":"CDSView"},{"attributes":{"data_source":{"id":"11059"},"glyph":{"id":"11060"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11061"},"selection_glyph":null,"view":{"id":"11063"}},"id":"11062","type":"GlyphRenderer"},{"attributes":{"source":{"id":"10675"}},"id":"10679","type":"CDSView"},{"attributes":{"data_source":{"id":"10692"},"glyph":{"id":"10693"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"10694"},"selection_glyph":null,"view":{"id":"10696"}},"id":"10695","type":"GlyphRenderer"},{"attributes":{"line_color":"#d95f02","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11437","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"11159"},"selection_policy":{"id":"11158"}},"id":"11111","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.1977117757004876,1.3371368758339826,1.4881855061802785],"y":[88.3744311515211,87.66615713942541,86.75922108224064]},"selected":{"id":"11263"},"selection_policy":{"id":"11262"}},"id":"11211","type":"ColumnDataSource"},{"attributes":{"data":{"x":[1.3059049623464731,1.319204091160467,1.5645594133095706,2.0060775865978457],"y":[88.02730364897265,87.861684752796,86.84949475139184,85.16652519097626]},"selected":{"id":"11496"},"selection_policy":{"id":"11495"}},"id":"11436","type":"ColumnDataSource"},{"attributes":{"data":{"x":[0,3.25],"y":[88.5,88.5]},"selected":{"id":"10973"},"selection_policy":{"id":"10972"}},"id":"10935","type":"ColumnDataSource"},{"attributes":{"text":"Original Soft Movement","x":1.0,"y":89.508140874387},"id":"11058","type":"Label"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"11066","type":"Line"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"11060","type":"Scatter"},{"attributes":{"source":{"id":"11064"}},"id":"11068","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#7570b3","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"11695","type":"Line"},{"attributes":{"data_source":{"id":"11111"},"glyph":{"id":"11112"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"11113"},"selection_glyph":null,"view":{"id":"11115"}},"id":"11114","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"10937","type":"Line"},{"attributes":{"data":{"x":[0,3.25],"y":[87.5,87.5]},"selected":{"id":"11014"},"selection_policy":{"id":"11013"}},"id":"10974","type":"ColumnDataSource"},{"attributes":{"source":{"id":"10935"}},"id":"10939","type":"CDSView"},{"attributes":{},"id":"11760","type":"UnionRenderers"}],"root_ids":["10618"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"f6c86d66-5b92-4d37-b2fb-76c93af37b93","root_ids":["10618"],"roots":{"10618":"f692c95d-37bc-447e-bfc6-50196321b194"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();