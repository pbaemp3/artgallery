//Multi Markers WebAR-AR.js and Aframe - Playing the Archive - Connected Environment CASA-UCL

//Global Variable
var markersURLArray = [];
var markersNameArray = [];
var imageURLArray = [];

AFRAME.registerComponent("markers_start", {
  init: function () {
    console.log("Add markers to the scene");

    var sceneEl = document.querySelector("a-scene");

    //list of the markers
    for (var i = 1; i < 19; i++) {
      var url = "resources/markers/pattern-Individual_Blocks-" + i + ".patt";
      markersURLArray.push(url);
      var imageurl = "resources/imagen/imagen-" + i + ".png";
      imageURLArray.push(imageurl);
      markersNameArray.push("Marker_" + i);
      //console.log(url);
    }

    for (var k = 0; k < 18; k++) {
      var markerEl = document.createElement("a-marker");
      markerEl.setAttribute("type", "pattern");
      markerEl.setAttribute("url", markersURLArray[k]);
      markerEl.setAttribute("id", markersNameArray[k]);

      markerEl.setAttribute("registerevents", "");
      sceneEl.appendChild(markerEl);

      //Adding text to each marker
      var textEl = document.createElement("a-image");

      textEl.setAttribute("id","src");
      textEl.setAttribute("src", imageURLArray[k] );
			textEl.setAttribute("rotation", "-90 0 0");
      textEl.setAttribute("scale","2 2 2");
      textEl.setAttribute("gesture-handler");
      
      
      

      markerEl.appendChild(textEl);
    }
  },
});

//Detect marker found and lost
AFRAME.registerComponent("registerevents", {
  init: function () {
    const marker = this.el;

    marker.addEventListener("markerFound", () => {
      var markerId = marker.id;
      console.log("Marker Found: ", markerId);
    });

    marker.addEventListener("markerLost", () => {
      var markerId = marker.id;
      console.log("Marker Lost: ", markerId);
    });
  },
});
