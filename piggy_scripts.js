function MM_jumpMenu(targ, selObj, restore){
    if (targ && selObj && selObj.selectedIndex >= 0) {
        window.location.href = selObj.options[selObj.selectedIndex].value;
    }
    if(restore)selObj.selectedIndex=0;
}

function MM_swapImgRestore(){
    var i,x,a=document.MM_sr;
    for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++)
        x.src=x.oSrc;
}

function MM_preloadImages(){
    var d=document;
    if(d.images){
        if(!d.MM_p) 
            d.MM_p=new Array();
        var i,j=d.MM_p.length,a=MM_preloadImages.arguments;
        for(i=0;i<a.length;i++)
            if(a[i].indexOf("#")!=0){
                d.MM_p[j]=new Image;
                d.MM_p[j++].src=a[i];
            }
    }
}

function MM_findObj(n,d){
    var p,i,x;
    if(!d)
        d=document;
    if((p=n.indexOf("?"))>0&&parent.frames.length){
        d=parent.frames[n.substring(p+1)].document;
        n=n.substring(0,p);
    }
    if(!(x=d[n])&&d.all)x=d.all[n];
    for(i=0;!x&&i<d.forms.length;i++)
        x=d.forms[i][n];
    for(i=0;!x&&d.layers&&i<d.layers.length;i++)
        x=MM_findObj(n,d.layers[i].document);
    if(!x&&d.getElementById)
        x=d.getElementById(n);
    return x;
}

function MM_swapImage(){
    var i,j=0,x,a=MM_swapImage.arguments;
    document.MM_sr=new Array;
    for(i=0;i<(a.length-2);i+=3)
        if((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x;if(!x.oSrc)x.oSrc=x.src;x.src=a[i+2];}}

function MM_displayStatusMsg(msgStr){
    status=msgStr;
    document.MM_returnValue=true;
}

function MM_reloadPage(init){
    if (init === true) {
        document.MM_pgW = window.innerWidth;
        document.MM_pgH = window.innerHeight;
        window.addEventListener('resize', MM_reloadPage);
    }
    else if(innerWidth!=document.MM_pgW||innerHeight!=document.MM_pgH)location.reload();
}
MM_reloadPage(true);

function MM_openBrWindow(theURL,winName,features){
    window.open(theURL,winName,features);
}

function email(){
    const user="dispatch";
    const site="Piggy.com";
    document.write('<a href=\"mailto:'+user+'@'+site+'?subject=website contact message\">');
    document.write(user+'@'+site+'</a>');
}

function quote(){
    const user="Brian";
    const site="Piggy.com";
    document.write('<a href=\"mailto:'+user+'@'+site+'?subject=Please Send Rate Information\"><font color="FFFFFF">Request Quote</font></a>');
}