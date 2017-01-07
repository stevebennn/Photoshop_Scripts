/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/


function makeShadow(){

    var activeDoc = app.activeDocument;
    var layer = activeDoc.activeLayer;
    var width = layer.bounds[2] - layer.bounds[0];
    var height = layer.bounds[3] - layer.bounds[1];
    
    

    app.doAction('selection','Panel-Actions.ATN');
    
    var shadowLayer = activeDoc.artLayers.add();
    shadowLayer.move(
        layer,
        ElementPlacement.PLACEAFTER
    )
    
    shadowLayer.name = layer.name + "_shadow";
    
    solidBlack = new SolidColor;
    
    solidBlack.cmyk.black = 100;
    solidBlack.cmyk.cyan = 100;
    solidBlack.cmyk.yellow = 100;
    solidBlack.cmyk.magenta = 100;
    
    activeDoc.selection.fill(solidBlack);
    activeDoc.selection.deselect();
    
    shadowLayer.resize(
        100,
        20,
        AnchorPosition.BOTTOMCENTER
    );

    var shadowWidth = shadowLayer.bounds[2] - shadowLayer.bounds[0];
    var shadowHeight = shadowLayer.bounds[3] - shadowLayer.bounds[1];

    
    shadowLayer.opacity = 15;
    shadowLayer.blendMode = BlendMode.LINEARBURN;
    // TODO: replace 300 with document resolution
    var shadowBlur = Number( (shadowWidth * 300) / 100 );
    shadowLayer.applyGaussianBlur(shadowBlur);
    
    
}
