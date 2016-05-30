var UserBioProto = Object.create(HTMLElement.prototype);

UserBioProto.createdCallback = function(){
    
    var root = this.createShadowRoot();
    root.innerHTML = '<style>' + 
                     ' div { ' + 
                     '   box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); ' +
                     '   width:300px;' +
                     '   padding:10px;' +
                     '}'+
                     ' img { ' + 
                     '   width:30px;' +
                     '   height:30px;' +
                     '   float:left;' +
                     '   text-align:left;' +
                     '   margin-top:10px;' +
                     '   margin-right:10px;' +
                     '}'+
                     ' p { ' + 
                     '   padding-bottom:0px;' +
                     '}'+
                     '</style>' + 
                 '<div><img src="img/sauron.jpg"></img> <p> Sauron - The Necromancer </p></div>';
    
};

var userBio = document.registerElement('user-bio',{
  prototype:UserBioProto  
});