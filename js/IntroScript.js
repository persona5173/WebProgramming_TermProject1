// char.js 추가구현에 따른 script
var chart = AmCharts.makeChart( "chartdiv", {
  "type": "pie",
  "theme": "chalk",
  "titles": [ {
    "text": "Class Frequency by Day",
    "size": 30
  } ],
  "dataProvider": [ {
    "class": "Paladin",
    "player": 10780000
  }, {
    "class": "Warrior",
    "player": 10213000
  }, {
    "class": "Mage",
    "player": 9877000
  }, {
    "class": "Rogue",
    "player": 9737000
  }, {
    "class": "Druid",
    "player": 9030000
  }, {
    "class": "Hunter",
    "player": 8134000
  }, {
    "class": "Priest",
    "player": 7329000
  }, {
    "class": "Shaman",
    "player": 3885000
  }, {
    "class": "Warlock",
    "player": 1022000
  } ],
  "valueField": "player",
  "titleField": "class",
  "startEffect": "elastic",
  "startDuration": 2,
  "labelRadius": 15,
  "innerRadius": "50%",
  "depth3D": 10,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
  "angle": 15,
  "export": {
    "enabled": true
  }
} );
