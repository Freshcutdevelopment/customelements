var XSeanProto = Object.create(HTMLElement.prototype);

XSeanProto.createdCallback = function(){
    
    var shadow = this.createShadowRoot();
    
    var heading = document.createElement('h1');
    heading.innerHTML = "sean";
    shadow.appendChild(heading);
    
};

var xSean = document.registerElement('x-sean',{
  prototype:XSeanProto  
});