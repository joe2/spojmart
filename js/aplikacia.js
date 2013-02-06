// H O M E  - funkcia nastavuje pociatocny stav
require(["dojo/dom", "dojo/dom-style", "dojo/query", "dojo/domReady!"],
function (dom, domStyle, query){
	query(".s_obsah").style("display", "none");
        domStyle.set(dom.byId("uvod"), "display", "block");
});


/////////////////////////////////////
//                                 //
// R I A D E N I E   S E K C I I   //
//                                 //
/////////////////////////////////////
require(["dijit/registry", "dojo/parser", "dojo/dom", "dojo/ready", "dojo/query", "dojo/dom", "dojo/dom-style", "dijit/WidgetSet", "dijit/Menu", "dijit/MenuItem", "dijit/PopupMenuItem", "dojo/domReady!"],
function(registry, parser, dom, ready, query, dom, domStyle){

       	function executeSection(linka){
		query(".s_obsah").style("display", "none");
                if(     linka=="link1" ){ domStyle.set(dom.byId("spoje" ), "display", "block"); }
                else if(linka=="link2" ){ domStyle.set(dom.byId("kotvy" ), "display", "block"); }
                else if(linka=="link3" ){ domStyle.set(dom.byId("dreva"), "display", "block"); }
                else if(linka=="link4" ){ domStyle.set(dom.byId("distie"), "display", "block"); }
                else if(linka=="link5" ){ domStyle.set(dom.byId("plasty"), "display", "block"); }
                else if(linka=="link6" ){ domStyle.set(dom.byId("retaze"), "display", "block"); }
                else if(linka=="link7" ){ domStyle.set(dom.byId("chemia"), "display", "block"); }
                else if(linka=="link8" ){ domStyle.set(dom.byId("kanban"), "display", "block"); }
                else if(linka=="link9" ){ domStyle.set(dom.byId("pozicovna"), "display", "block"); }
                else if(linka=="link10"){ domStyle.set(dom.byId("podmienky"), "display", "block"); }
                else if(linka=="link11"){ domStyle.set(dom.byId("tinfo"), "display", "block"); }
                else if(linka=="link12"){ domStyle.set(dom.byId("profil"), "display", "block"); }
                else if(linka=="link13"){ domStyle.set(dom.byId("referencie"), "display", "block"); }
                else if(linka=="link14"){ domStyle.set(dom.byId("mapa"), "display", "block"); }
                else { domStyle.set(dom.byId("uvod"), "display", "block"); }
       	}


        // tu je riadenie sekcii pre polozky z menu
	ready(function(){
		var onItemSelect = function(evt){ executeSection(this.id); }

		parser.parse().then(function(){
			registry.byClass("dijit.MenuItem").forEach(function(item){
			item.onClick = onItemSelect;
			});
		});
	});



        // tu je riadenie sekcii pre obrazky, linky, a vsetko ostatne	
       	ready(function(){
		var myObject = {
			id: "myObject",
			onClick: function(evt){ executeSection(this.id); }
		}

		query(".clickMenu").on("click", myObject.onClick);
	});



});


require(["dojo/parser", "dojo/ready", "dijit/registry", "dojox/data/FlickrRestStore", "dojo/query", "dojox/image/SlideShow"],
function(parser, ready, registry, flickrRestStore, query){

    ready(function(){
        var frs = new flickrRestStore();
        var req = {
            query: {
                tags: "spojmart0",
		userid: "92635190@N03",
                apikey: "cf871d02feca50eea4d0c513cf949d0e"
            },
            count: 5
        };
        registry.byId("slideshow1").setDataStore(frs, req);
    });
});


require(["dojo/parser", "dojox/geo/openlayers/widget/Map"]);

require(["dijit/form/ComboBox", "dojo/store/Memory"]);

require(["dijit/form/Select", "dojo/data/ObjectStore", "dojo/store/Memory", "dojox/data/FlickrRestStore", "dojox/image/Gallery"],
function(Select, ObjectStore, Memory, FlickrRestStore){

     function gotItems(tgx){

        var frs = new FlickrRestStore();
        var rqs = {
        	query: {userid: "92635190@N03",
	        	apikey: "cf871d02feca50eea4d0c513cf949d0e",
		        tags: tgx
        		},
		       count: 20
		}
	dijit.byId('gallery1').setDataStore(frs, rqs);
     }

  var store = new Memory({
    data: [
      {id: '*', label: '*'},
      {id: '1', label: 'Hutniaca a vibračná technika'},
      {id: '2', label: 'Búracie a sekacie kladivá'},
      {id: '3', label: 'Kombi kladivá a vŕtačky'},
      {id: '4', label: 'Píly, drážkovače a rezačky'},
      {id: '5', label: 'Lasery, detektory a merače'},
      {id: '6', label: 'Ohrievače a odvlhčovače'},
      {id: '7', label: 'Príslušenstvo'},
      {id: '8', label: 'Upratovanie a čistenie'},
      {id: '9', label: 'Miešačky betónu'},
      {id: '10',label: 'Pripravujeme pre Vás'},
      {id: '11',label: 'Kompresory'},
      {id: '12',label: 'Frézy, brúsky na betón'}
    ]
  });

  var os = new ObjectStore({ objectStore: store });

  var s = new Select({
    store: os,
    style: "width: 300px;",
  }, "skupinaInput");
  s.startup();

  s.on("change", function(){ gotItems( "spojmart"+this.get("value")); })

})

require(["dijit/form/Select", "dojo/data/ObjectStore", "dojo/store/Memory", "dojox/data/FlickrRestStore", "dojox/image/Gallery"],
function(Select, ObjectStore, Memory, FlickrRestStore){

     function gotItems(tgx){

        var frs = new FlickrRestStore();
        var rqs = {
        	query: {userid: "92635190@N03",
	        	apikey: "cf871d02feca50eea4d0c513cf949d0e",
		        tags: tgx
        		},
		       count: 20
		}
	dijit.byId('gallery2').setDataStore(frs, rqs);
     }

  var store = new Memory({
    data: [
      {id: 'x', label: '*'},
      {id: '13', label: 'Zástrče a závesy'},
      {id: '14', label: 'Záhradné spojky'},
      {id: '15', label: 'Spojovacie prvky dreva'},
      {id: '16', label: 'Vruty Power Fast'}
    ]
  });

  var os = new ObjectStore({ objectStore: store });

  var s = new Select({
    store: os,
    style: "width: 300px;",
  }, "skupina2Input");
  s.startup();

  s.on("change", function(){ gotItems( "spojmart"+this.get("value")); })

})