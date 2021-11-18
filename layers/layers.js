var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NEW_SUDA_BOUNDARY_2016_1 = new ol.format.GeoJSON();
var features_NEW_SUDA_BOUNDARY_2016_1 = format_NEW_SUDA_BOUNDARY_2016_1.readFeatures(json_NEW_SUDA_BOUNDARY_2016_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NEW_SUDA_BOUNDARY_2016_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NEW_SUDA_BOUNDARY_2016_1.addFeatures(features_NEW_SUDA_BOUNDARY_2016_1);
var lyr_NEW_SUDA_BOUNDARY_2016_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NEW_SUDA_BOUNDARY_2016_1, 
                style: style_NEW_SUDA_BOUNDARY_2016_1,
                interactive: true,
                title: '<img src="styles/legend/NEW_SUDA_BOUNDARY_2016_1.png" /> NEW_SUDA_BOUNDARY_2016'
            });
var lyr_LC8148_4520210330_0532LST_B10_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "LC8[148_45](2021-03-30_05-32)LST_B10",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LC8148_4520210330_0532LST_B10_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8083911.649978, 2395605.406234, 8132387.638179, 2431415.207015]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_NEW_SUDA_BOUNDARY_2016_1.setVisible(true);lyr_LC8148_4520210330_0532LST_B10_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NEW_SUDA_BOUNDARY_2016_1,lyr_LC8148_4520210330_0532LST_B10_2];
lyr_NEW_SUDA_BOUNDARY_2016_1.set('fieldAliases', {'Id': 'Id', 'AREA': 'AREA', });
lyr_NEW_SUDA_BOUNDARY_2016_1.set('fieldImages', {'Id': 'Range', 'AREA': 'TextEdit', });
lyr_NEW_SUDA_BOUNDARY_2016_1.set('fieldLabels', {'Id': 'no label', 'AREA': 'no label', });
lyr_NEW_SUDA_BOUNDARY_2016_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});