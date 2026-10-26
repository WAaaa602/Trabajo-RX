var APP_DATA = {
  "scenes": [
    {
      "id": "0-estar",
      "name": "Estar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 800,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.3505874244749698,
          "pitch": 0.6564646176690232,
          "rotation": 0,
          "target": "1-dormitorio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8006722490790921,
          "pitch": 0.08372711047219461,
          "title": "<span style=\"font-size: 13px; background-color: rgba(58, 68, 84, 0.8);\">Capsule Home&nbsp;</span>",
          "text": "<div>La Capsule Home propone una nueva forma de habitar a través de una unidad compacta, autónoma y adaptable. Su diseño explora la relación entre tecnología, flexibilidad y vida cotidiana, planteando una vivienda concebida como una cápsula independiente que concentra las funciones esenciales del habitar.</div>"
        }
      ]
    },
    {
      "id": "1-dormitorio",
      "name": "Dormitorio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4633409506239694,
          "pitch": 0.7052350612978202,
          "rotation": 0,
          "target": "0-estar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3202509656156103,
          "pitch": 0.07626237160005545,
          "title": "<div><span style=\"font-size: 13px;\">Espacio interior</span></div>",
          "text": "<div>El interior se organiza mediante diferentes áreas funcionales que conviven dentro de un mismo volumen. La disposición del mobiliario y los elementos divisorios permite diferenciar los usos sin perder la continuidad espacial. Las aberturas incorporan luz natural y conectan visualmente el interior con el exterior, generando una experiencia de habitar integrada.</div>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
